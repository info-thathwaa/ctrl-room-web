import Header from "@/components/common/Header";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const lines = [
    "Real-Time Workforce & Security",
    "Operations — One Powerful",
    "Control Room",
  ];
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/hero/Hero-bg.webp')" }}
    >
      <Header variant="transparent" />

      {/* Hero Content */}

      {/* Hero Content */}
      <div className="relative z-50 flex h-full items-end justify-center">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Character Image (Desktop) - Bottom Left with Fade In Animation */}
          <motion.div
            className="hidden lg:block absolute lg:left-[-200px] left-[-170px] top-5 bottom-0 z-50"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          >
            <Image
              src="/hero/Main.webp"
              alt="Hero Character"
              width={5000}
              height={5000}
              quality={100}
              priority
              className="lg:h-[95vh] md:h-[85vh] w-auto object-contain object-bottom"
            />
          </motion.div>

          {/* Text Content - Centered with Animations */}
          <div className="relative z-20 max-w-4xl mx-auto text-center text-white">
            {/* Animated Heading - Word by Word */}
            <h1 className="text-xl sm:text-3xl md:text-[50px] font-bold tracking-normal leading-[1.1]">
              {lines.map((line, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="inline-block mr-[0.3em]"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-4 md:mt-6 text-[12px] md:text-[16px]  font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5, ease: "easeOut" }}
            >
              Manage guards, sites, patrols, incidents, and compliance from a{" "}
              <br />
              single real-time command center.
            </motion.p>

            <motion.div
              className="mt-6 md:mt-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
            >
              <button className="bg-white text-[#03353B] px-6 py-3 md:px-10 md:py-4 rounded-full font-bold text-sm md:text-lg shadow-xl shadow-black/20 hover:bg-zinc-100 transition active:scale-95">
                Request a Live Demo →
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
    </section>
  );
};

export default Hero;
