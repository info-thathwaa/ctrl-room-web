import { useMutation } from "@tanstack/react-query";
import { axiosAdmin } from "@/lib/axios";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string | { title?: string; body?: string };
}

interface UseResetPasswordOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useResetPassword = (token: string, options?: UseResetPasswordOptions) => {
  return useMutation({
    mutationFn: async (password: string) => {
      const response = await axiosAdmin.post(`reset-password/${token}`, {
        password,
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Password reset successfully!", {
        position: "top-center",
      });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const responseData = axiosError?.response?.data;
      const apiMessage = responseData?.message;

      let errorMessage = "Failed to reset password. Please try again.";

      if (typeof apiMessage === "string") {
        errorMessage = apiMessage;
      } else if (apiMessage && typeof apiMessage === "object") {
        errorMessage = apiMessage.body || apiMessage.title || JSON.stringify(apiMessage);
      } else if (error?.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage, {
        position: "top-center",
      });
      options?.onError?.(error);
    },
  });
};
