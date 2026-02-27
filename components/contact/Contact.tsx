"use client";

import React from "react";
import Header from "@/components/common/Header";
import { motion } from "framer-motion";
import { Mail, Phone, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useForm, FormProvider, FieldValues } from "react-hook-form";
import { TextInput } from "@/components/custom-inputs/TextInput";

const Contact = () => {
  const methods = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative Circles (Home-like structure) */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] border border-blue-100 rounded-full opacity-50 pointer-events-none" />
      <div className="absolute top-[10%] right-[-150px] w-[600px] h-[600px] border border-pink-100 rounded-full opacity-50 pointer-events-none" />

      <Header variant="solid" />

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1 rounded-full bg-[#E0F2F1] text-[#03353B] text-sm font-medium mb-6"
        >
          contact
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-[#03353B] max-w-3xl mx-auto leading-tight"
        >
          We&apos;d Love To Talk About How We Can Work Together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-zinc-500 text-sm md:text-base max-w-xl mx-auto"
        >
          Everything you might need and then some more in an accessible and
          intuitive package.
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="px-6 pb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-zinc-200/50 p-8 md:p-12"
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <TextInput
                name="name"
                label="Name"
                placeholder="Name"
                className="bg-zinc-50 border-none px-6 py-4 rounded-xl"
              />

              <TextInput
                name="phone"
                label="Phone Number"
                placeholder="Name" // Kept "Name" as per previous design, though "Phone Number" might be better
                className="bg-zinc-50 border-none px-6 py-4 rounded-xl"
              />

              <TextInput
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                className="bg-zinc-50 border-none px-6 py-4 rounded-xl"
              />

              <TextInput
                name="company"
                label="Company Name"
                placeholder="Name"
                className="bg-zinc-50 border-none px-6 py-4 rounded-xl"
              />

              <div className="md:col-span-2">
                <TextInput
                  name="message"
                  label="Message"
                  type="textarea"
                  placeholder="Type here..."
                  rows={4}
                  className="bg-zinc-50 border-none px-6 py-4 rounded-xl"
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-4">
                <button
                  type="submit"
                  className="bg-[#03353B] text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#022a2e] transition-all active:scale-95 group shadow-lg shadow-[#03353B]/20"
                >
                  Submit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </FormProvider>
        </motion.div>

        {/* Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-10 rounded-3xl shadow-lg shadow-zinc-100 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] flex items-center justify-center">
              <Mail className="w-8 h-8 text-[#4CAF50]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#03353B]">Message us</h3>
              <p className="text-zinc-500 mt-1">admin@ctrl-room.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white p-10 rounded-3xl shadow-lg shadow-zinc-100 flex flex-col items-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FEEBEE] flex items-center justify-center">
              <Phone className="w-8 h-8 text-[#FF5252]" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#03353B]">Call us</h3>
              <p className="text-zinc-500 mt-1">+44 7535435323</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="relative w-full h-[500px] mt-10 pointer-events-none">
        <Image
          src="/contact/map-dots.webp"
          alt="World Map"
          fill
          className="object-contain opacity-20"
        />
        {/* Indicators (Simulated flags based on design) */}
        <div className="absolute top-[50%] left-[45%] flex items-center gap-1 bg-white p-1 rounded shadow-sm">
          <span className="text-xs">🇬🇧</span>
        </div>
        <div className="absolute top-[65%] left-[55%] flex items-center gap-1 bg-white p-1 rounded shadow-sm">
          <span className="text-xs">🇦🇪</span>
        </div>
        <div className="absolute top-[60%] left-[65%] flex items-center gap-1 bg-white p-1 rounded shadow-sm">
          <span className="text-xs">🇮🇳</span>
        </div>
      </section>
    </div>
  );
};

export default Contact;