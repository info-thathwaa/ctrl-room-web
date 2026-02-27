"use client";

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
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Top Gray Background - Responsive Height */}
      <div className="absolute top-0 left-0 w-full h-[600px] md:h-[650px] lg:h-[700px] bg-[#F2F3F6] z-0" />

      {/* Decorative Curves */}
      {/* Red Curve (Left) */}
      <div className="absolute top-[250px] left-0 w-[300px] md:w-[450px] lg:w-[500px] h-[300px] md:h-[450px] lg:h-[700px] aspect-square pointer-events-none z-10">
        <Image
          src="/contact/blue_curve.svg"
          alt="Decorative Curve Left"
          fill
          className="object-contain object-left-top"
          priority
        />
      </div>

      {/* Blue Curve (Right) */}
      <div className="absolute top-[150px] right-0 w-[400px] md:w-[600px] lg:w-[700px] h-[400px] md:h-[600px] lg:h-[700px] aspect-square pointer-events-none z-10">
        <Image
          src="/contact/yellow_curve.svg"
          alt="Decorative Curve Right"
          fill
          className="object-contain object-right-top"
          priority
        />
      </div>

      <Header variant="transparent" logo="solid" />

      {/* Hero Section */}
      <section className="pt-[170px] pb-0 px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full bg-[#E0F2F1] text-[#03353B] text-xs md:text-sm font-semibold tracking-wide mb-8 shadow-sm"
        >
          contact
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#03353B] max-w-4xl mx-auto leading-[1.15] mb-6"
        >
          We&apos;d Love To Talk About How We Can Work Together.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Everything you might need and then some more in an accessible and
          intuitive package.
        </motion.p>
      </section>

      {/* Form Section */}
      <section className="px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.08)] p-8 md:p-14 mb-16"
        >
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            >
              <div>
                <label className="text-xs font-bold text-[#03353B] mb-2 block uppercase tracking-tight">
                  Name <span className="text-red-500">*</span>
                </label>
                <TextInput
                  name="name"
                  placeholder="Name"
                  className="bg-[#F2F3F6] border-none px-6 py-4 rounded-xl h-14"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#03353B] mb-2 block uppercase tracking-tight">
                  Phone Number <span className="text-red-400">^</span>
                </label>
                <TextInput
                  name="phone"
                  placeholder="Name"
                  className="bg-[#F2F3F6] border-none px-6 py-4 rounded-xl h-14"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#03353B] mb-2 block uppercase tracking-tight">
                  Email
                </label>
                <TextInput
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="bg-[#F2F3F6] border-none px-6 py-4 rounded-xl h-14"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#03353B] mb-2 block uppercase tracking-tight">
                  Company Name
                </label>
                <TextInput
                  name="company"
                  placeholder="Name"
                  className="bg-[#F2F3F6] border-none px-6 py-4 rounded-xl h-14"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-xs font-bold text-[#03353B] mb-2 block uppercase tracking-tight">
                  Message <span className="text-red-500">*</span>
                </label>
                <TextInput
                  name="message"
                  type="textarea"
                  placeholder="Type here..."
                  rows={4}
                  className="bg-[#F2F3F6] border-none px-6 py-5 rounded-3xl"
                />
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#03353B] text-white px-12 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-[#022a2e] transition-all active:scale-95 group shadow-lg shadow-[#03353B]/20"
                >
                  Submit
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </FormProvider>
        </motion.div>

        {/* Info Cards */}
        <div className="max-w-[900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center justify-items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-8 lg:p-10 rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center space-y-4 w-full lg:w-[400px] lg:h-[234px] flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#E8F5E9] flex items-center justify-center">
              <Mail className="w-8 h-8 text-[#4CAF50]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#03353B] mb-1">
                Message us
              </h3>
              <p className="text-zinc-500 text-base font-medium">
                admin@ctrl-room.com
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white p-8 lg:p-10 rounded-[35px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col items-center text-center space-y-4 w-full lg:w-[400px] lg:h-[234px] flex-shrink-0"
          >
            <div className="w-16 h-16 rounded-2xl bg-[#FEEBEE] flex items-center justify-center">
              <Phone className="w-8 h-8 text-[#FF5252]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#03353B] mb-1">Call us</h3>
              <p className="text-zinc-500 text-base font-medium">
                +44 7535435323
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="relative w-full max-w-6xl mx-auto h-[400px] md:h-[600px] mt-10 p-10 pointer-events-none">
        <Image
          src="/contact/map.svg"
          alt="World Map"
          fill
          className="object-contain opacity-70"
        />
        {/* Indicators (Flags matching design markers) */}
        {/* UK */}
        <div className="absolute top-[35%] left-[45%] md:top-[38%] md:left-[47%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-sm shadow-md z-30">
          <Image
            src="https://flagcdn.com/w40/gb.png"
            alt="UK Flag"
            width={24}
            height={16}
            className="rounded-[1px]"
          />
        </div>
        {/* UAE */}
        <div className="absolute top-[52%] left-[55%] md:top-[55%] md:left-[56%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-sm shadow-md z-30">
          <Image
            src="https://flagcdn.com/w40/ae.png"
            alt="UAE Flag"
            width={24}
            height={16}
            className="rounded-[1px]"
          />
        </div>
        {/* India */}
        <div className="absolute top-[58%] left-[62%] md:top-[60%] md:left-[63%] transform -translate-x-1/2 -translate-y-1/2 bg-white p-1 rounded-sm shadow-md z-30">
          <Image
            src="https://flagcdn.com/w40/in.png"
            alt="India Flag"
            width={24}
            height={16}
            className="rounded-[1px]"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
