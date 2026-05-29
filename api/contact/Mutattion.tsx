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
      const axiosError = error as AxiosError<{ message?: string }>;
      const errorMessage =
        axiosError?.response?.data?.message ||
        error.message ||
        "Failed to send message. Please try again.";
      toast.error(errorMessage);
    },
  });
};

