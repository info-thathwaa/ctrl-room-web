import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { axiosAdmin } from "@/lib/axios";

interface ApiErrorResponse {
  message?: string | { title?: string; body?: string };
}

interface UseSubmitAnonymousReportOptions {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export const useSubmitAnonymousReport = (options?: UseSubmitAnonymousReportOptions) => {
  return useMutation({
    mutationFn: async (payload: FormData) => {
      const response = await axiosAdmin.post("/v1/api/anonymous-reports", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: () => {
      toast.success("Report submitted successfully.", {
        position: "top-center",
      });
      options?.onSuccess?.();
    },
    onError: (error: Error) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const responseData = axiosError?.response?.data;
      const apiMessage = responseData?.message;

      let errorMessage = "Failed to submit report. Please try again.";

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
