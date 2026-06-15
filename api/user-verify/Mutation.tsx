import { useMutation } from "@tanstack/react-query";
import { axiosAdmin } from "@/lib/axios";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface ApiErrorResponse {
  message?: string | { title?: string; body?: string };
}

interface UseVerifyTenantOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useVerifyTenant = (options?: UseVerifyTenantOptions) => {
  return useMutation({
    mutationFn: async (tenantId: string) => {
      // Simulation delay for mock demonstration
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Wire up backend API when ready:
      // const response = await axiosAdmin.post(`tenants/verify/${tenantId}`);
      // return response.data;
      
      return { success: true };
    },
    onSuccess: () => {
      toast.success("User verified successfully!", {
        position: "top-center",
      });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const responseData = axiosError?.response?.data;
      const apiMessage = responseData?.message;

      let errorMessage = "Verification failed. Please try again.";

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
