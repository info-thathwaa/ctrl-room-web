"use client";

import React from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { TextInput } from "@/components/custom-inputs/TextInput";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  email: z
    .string()
    .email({
      message: "Please enter a valid email address.",
    })
    .optional()
    .or(z.literal("")),
  company: z.string().optional(),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div id="contact" className="py-[75px] bg-white px-6 md:px-[312px] overflow-hidden">
      <div className="container mx-auto">
        {/* Title Section */}
        <motion.div
          className="max-w-3xl text-center mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-[1.2] text-black">
            We'd Love To Talk About How We Can <br/> Work Together.
          </h2>
          <p className="mt-6 text-[15px] md:text-[16px] text-zinc-500 font-medium max-w-2xl mx-auto">
            Everything you might need and then some more in an accessible <br/> and
            intuitive package.
          </p>
        </motion.div>

        {/* Form Section */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <Card className="p-[50px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <TextInput
                    name="name"
                    label={<>Name <span className="text-red-500">*</span></>}
                    placeholder="Name"
                    className="bg-zinc-50 border-none px-4 py-6"
                  />

                  {/* Phone Number */}
                  <TextInput
                    name="phone"
                    label={<>Phone Number <span className="text-red-500">*</span></>}
                    placeholder="Phone Number"
                    className="bg-zinc-50 border-none px-4 py-6"
                  />

                  {/* Email */}
                  <TextInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email"
                    className="bg-zinc-50 border-none px-4 py-6"
                  />

                  {/* Company Name */}
                  <TextInput
                    name="company"
                    label="Company Name"
                    placeholder="Company Name"
                    className="bg-zinc-50 border-none px-4 py-6"
                  />
                </div>

                {/* Message */}
                <TextInput
                  name="message"
                  type="textarea"
                  label={<>Message <span className="text-red-500">*</span></>}
                  placeholder="Type here..."
                  className="resize-none bg-zinc-50 border-none px-4 py-3 min-h-[150px]"
                  rows={5}
                />

                {/* Submit Button */}
                <div className="flex justify-center pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-[#03353B] text-white hover:bg-[#022c30] rounded-full px-10 py-6 text-base"
                  >
                    Submit &gt;
                  </Button>
                </div>
              </form>
            </Form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
