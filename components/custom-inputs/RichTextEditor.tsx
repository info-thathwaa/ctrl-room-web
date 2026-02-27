"use client";
import { useEffect, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";

let ReactQuill = dynamic<ReactQuillProps>(
  () => import("react-quill"),
  { ssr: false }
);

export const RichTextInput = ({
  name,
  label,
  placeholder,
}: {
  name: string;
  label: string;
  placeholder: string;
}) => {
  const { control } = useFormContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("react-quill").then((mod) => {
      ReactQuill = mod.default;
      setMounted(true);
    });
  }, []);

  if (!mounted || !ReactQuill) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field , fieldState}) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="border rounded-md custom-quill">
              <ReactQuill
                value={field.value || ""}
                onChange={field.onChange}
                theme="snow"
                placeholder={placeholder}
              />             
            </div>
          </FormControl>
         <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};



