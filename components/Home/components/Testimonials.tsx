"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Testimonials = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const reviews = [
    {
      name: "Albin Mathews",
      role: "Administrator",
      avatar: "/testimonial/avatar1.png",
      review:
        "The Ctrl Room Software Is Really User Friendly, And I Believe It Is Superior To The Current System. The Design Is Fantastic, And It Minimizes Paperwork, Which Is Beneficial To Both The Manager And The Employee. I Am Quite Delighted With The System.",
    },
    {
      name: "Sherly Thomas",
      role: "HR",
      avatar: "/testimonial/avatar2.png",
      review:
        "I Am So Smitten With The Ctrl Room. Automated ID Creation Of Employee Was Perfect. The Payroll Part Was Really Appreciable. I Am Impressed",
    },
    {
      name: "Sona Pouline",
      role: "Manager",
      avatar: "/testimonial/avatar3.png",
      review:
        "Ctrl Room Is The Greatest Workforce Management System, With Many Features Such As Automated Employee And Manager ID Creation. There Are Three Levels Of Users: Admin, Manager, And Guard.",
    },
  ];

  // Duplicate reviews for seamless infinite scroll
  const duplicatedReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="py-[75px] bg-zinc-50 overflow-hidden">
      <div className="container mx-auto px-[24px] md:px-[98px]">
        {/* Title Section */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
        >
          <h2 className="text-3xl md:text-[50px] font-bold tracking-tight leading-[1.1] text-black">
            Trusted By Teams On The Front Line
          </h2>
          <p className="mt-4 md:mt-6 text-sm md:text-[16px] text-zinc-600 font-medium">
            Organizations rely on CTRL-ROOM to run safer, faster, and more
            accountable operations every day.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div className="flex">
          <motion.div
            className="flex gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{
              opacity: isMounted ? 1 : 0,
              x: isMounted ? [`0%`, `-${100 / 3}%`] : 0,
            }}
            transition={{
              opacity: { duration: 0.3 },
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 60,
                ease: "linear",
                delay: 0.3,
              },
            }}
          >
            {duplicatedReviews.map((review, index) => (
              <motion.div
                key={index}
                className="max-w-[250px] sm:min-w-[220px] md:min-w-[390px] md:max-w-[390px] lg:max-w-[390px] bg-white rounded-2xl p-5 md:p-8 border border-[#DEDEDE] flex-shrink-0"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.2 }}
              >
                {/* User Info */}
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-[71px] md:h-[71px] rounded-full overflow-hidden bg-zinc-200 flex-shrink-0">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      width={56}
                      height={56}
                      quality={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col gap-1 justify-center">
                    <h3 className="text-base md:text-lg font-bold text-black">
                      {review.name}
                    </h3>
                    <p className="text-xs md:text-sm text-zinc-600">
                      {review.role}
                    </p>
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-xs md:text-sm text-zinc-700 leading-relaxed">
                  {review.review}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-zinc-50 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-zinc-50 to-transparent pointer-events-none" />
      </div>
    </div>
  );
};

export default Testimonials;
