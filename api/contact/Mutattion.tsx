import { useMutation } from "@tanstack/react-query";
import { axiosAdmin } from "@/lib/axios";
import { toast } from "sonner";
import { AxiosError } from "axios";

export interface ContactFormData {
  name: string;
  phone?: string;
  email: string;
  company?: string;
  message: string;
}

interface ApiErrorResponse {
  message?: string | { title?: string; body?: string };
}

export const useSubmitContact = () => {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Sends the contact form data to the backend contact endpoint
      const response = await axiosAdmin.post("contact-us", data);
      return response.data;
    },
    onSuccess: () => {
      toast.success("Thank you! Your message has been sent successfully.");
    },
    onError: (error: Error) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;
      const responseData = axiosError?.response?.data;
      const apiMessage = responseData?.message;

      let errorMessage = "Failed to send message. Please try again.";

      if (typeof apiMessage === "string") {
        errorMessage = apiMessage;
      } else if (apiMessage && typeof apiMessage === "object") {
        errorMessage = apiMessage.body || apiMessage.title || JSON.stringify(apiMessage);
      } else if (error?.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    },
  });
};

