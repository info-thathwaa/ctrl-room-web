import axios, { AxiosError, AxiosInstance } from "axios";
import { toast } from "sonner";
import type { InternalAxiosRequestConfig } from "axios";

interface RetryAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retry?: boolean;
}
// build error update
// export const AGENT_API = "https://ctrl-room-new-version.vercel.app/v1/api/";
export const AGENT_API = "https://ctrl-room.com/v1/api/";

const axiosAdmin = axios.create({
  baseURL: AGENT_API,
});

// Shared state for token refresh
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: string | null) => void;
  reject: (reason?: AxiosError | Error | unknown) => void;
}> = [];

const processQueue = (
  error: AxiosError | Error | unknown,
  token: string | null = null,
) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

// Helper function to handle logout with notification
const handleLogout = (message: string = "Session expired. Logging out...") => {
  localStorage.removeItem("auth-storage");

  // Show toast notification
  toast.error(message, {
    duration: 2000,
  });

  // Redirect after a short delay to allow user to see the message
  setTimeout(() => {
    window.location.href = "/";
  }, 1500);
};

const setupInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      // Avoid adding token for public auth endpoints
      if (
        !config?.url?.includes("auth/token") &&
        !config?.url?.includes("/register")
      ) {
        const storage = localStorage.getItem("auth-storage");
        let accessToken: string | null = null;

        if (storage) {
          try {
            const parsed = JSON.parse(storage);
            accessToken = parsed?.state?.accessToken ?? null;
          } catch (err) {
            console.error("Failed to parse auth-storage:", err);
          }
        }

        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      }

      return config;
    },
    (error: AxiosError) => Promise.reject(error),
  );

  instance.interceptors.response.use(
    (response) => {
      // Automatically normalize and attach meta.pagination to response.data.data
      if (
        response?.data?.meta?.pagination &&
        response?.data?.data &&
        typeof response.data.data === "object"
      ) {
        const pag = response.data.meta.pagination;
        const normalizedPagination = {
          ...pag,
          total_items: pag.totalItems ?? pag.total_items,
          total_pages: pag.totalPages ?? pag.total_pages,
          current_page: pag.currentPage ?? pag.current_page,
          has_previous_page: (pag.currentPage ?? pag.current_page) > 1,
          has_next_page:
            (pag.currentPage ?? pag.current_page) <
            (pag.totalPages ?? pag.total_pages),
        };

        // Attach safely without modifying iteration behavior for arrays
        Object.defineProperty(response.data.data, "pagination", {
          value: normalizedPagination,
          enumerable: false, // Prevents breaking Object.keys or loops
          configurable: true,
        });
        Object.defineProperty(response.data.data, "meta", {
          value: response.data.meta,
          enumerable: false,
          configurable: true,
        });
      }
      return response;
    },
    async (error: AxiosError) => {
      const originalRequest = error.config as RetryAxiosRequestConfig;

      // If token expired or unauthorized
      if (error.response?.status === 401 && !originalRequest._retry) {
        const storage = localStorage.getItem("auth-storage");

        if (storage) {
          try {
            const parsed = JSON.parse(storage);
            const rememberMe = parsed?.state?.rememberMe ?? false;
            const refreshToken = parsed?.state?.refreshToken ?? null;

            // If remember me is enabled and we have a refresh token, try to refresh
            if (rememberMe && refreshToken) {
              if (isRefreshing) {
                // If already refreshing, queue this request
                return new Promise((resolve, reject) => {
                  failedQueue.push({ resolve, reject });
                })
                  .then(() => {
                    return instance(originalRequest);
                  })
                  .catch((err) => {
                    return Promise.reject(err);
                  });
              }

              originalRequest._retry = true;
              isRefreshing = true;

              try {
                const response = await axiosAdmin.post("auth/token/refresh", {
                  refresh: refreshToken,
                });

                const newAccessToken = response.data.data.access;

                // Update the access token in storage
                parsed.state.accessToken = newAccessToken;
                localStorage.setItem("auth-storage", JSON.stringify(parsed));

                // Update the authorization header for the original request
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                processQueue(null, newAccessToken);

                return instance(originalRequest);
              } catch (refreshError) {
                processQueue(refreshError, null);
                // handleLogout("Session expired. Please login again.");
                return Promise.reject(refreshError);
              } finally {
                isRefreshing = false;
              }
            }
          } catch (err) {
            console.error("Failed to parse auth-storage:", err);
            // handleLogout("Authentication error. Please login again.");
          }
        } else {
          // No storage, redirect to login
          // handleLogout("Please login to continue.");
        }
      }

      return Promise.reject(error);
    },
  );
};

setupInterceptors(axiosAdmin);

export { axiosAdmin };
