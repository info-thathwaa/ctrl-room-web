"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ShieldCheck, Loader2 } from "lucide-react";
import { useVerifyTenant } from "@/api/user-verify/Mutation";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// Define the shape of sparkles for the burst animation
const sparkles = [
  { id: 1, delay: 0.0, x: -45, y: -45, scale: 0.7, rotate: 15 },
  { id: 2, delay: 0.1, x: 45, y: -45, scale: 0.9, rotate: 45 },
  { id: 3, delay: 0.2, x: -60, y: 10, scale: 0.6, rotate: -25 },
  { id: 4, delay: 0.05, x: 60, y: 15, scale: 0.8, rotate: 60 },
  { id: 5, delay: 0.15, x: -30, y: 50, scale: 0.9, rotate: 135 },
  { id: 6, delay: 0.25, x: 30, y: 55, scale: 0.7, rotate: 90 },
  { id: 7, delay: 0.08, x: 0, y: -65, scale: 0.8, rotate: 0 },
  { id: 8, delay: 0.3, x: 0, y: 65, scale: 0.6, rotate: 180 },
];

export default function UserVerify() {
  const params = useParams();
  // Get tenant ID from parameters
  const id = params?.id as string;

  const [dialogOpen, setDialogOpen] = useState(false);
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  // Hook to handle window close or redirection, and clearing session lock
  const handleExit = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("verification_lock");
      try {
        window.close();
      } catch (e) {
        console.error("Window close blocked by browser policy:", e);
      }
      // Fallback redirection to blank page
      setTimeout(() => {
        window.location.href = "about:blank";
      }, 100);
    }
  };

  // Lock the user to this verification page on component load/render
  useEffect(() => {
    if (id) {
      sessionStorage.setItem("verification_lock", id);
    }
  }, [id]);

  // Restrict SPA navigation / lock browser back button on the verification page
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Push state to prevent back navigation
    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
      toast.warning("Verification is required. Please complete or cancel verification to leave.", {
        position: "top-center",
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  // API Verification Mutation using our custom hook
  const verifyMutation = useVerifyTenant({
    onSuccess: () => {
      setVerificationSuccess(true);
      // Automatically exit and remove lock after 2 seconds
      setTimeout(() => {
        handleExit();
      }, 2000);
    },
  });

  const handleYes = () => {
    setDialogOpen(false);
    if (id) {
      verifyMutation.mutate(id);
    } else {
      toast.error("Invalid verification ID");
    }
  };

  const handleNo = () => {
    setDialogOpen(false);
    handleExit();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F3F6] text-[#03353B] relative overflow-hidden font-sans">
      {/* Decorative Curves matching other pages */}
      <div className="absolute top-[10%] left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] aspect-square pointer-events-none z-0 opacity-40">
        <Image
          src="/contact/blue_curve.svg"
          alt="Decorative Curve Left"
          fill
          className="object-contain object-top-left"
          priority
        />
      </div>
      <div className="absolute bottom-[10%] right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] aspect-square pointer-events-none z-0 opacity-40">
        <Image
          src="/contact/yellow_curve.svg"
          alt="Decorative Curve Right"
          fill
          className="object-contain object-top-right"
          priority
        />
      </div>

      {/* Simplified Restricted Header */}
      <header className="w-full py-5 px-6 md:px-16 lg:px-[100px] flex items-center justify-between bg-transparent relative z-20">
        <div className="flex items-center">
          {/* Logo is non-interactive image using dark/solid logo2.png for light background */}
          <Image
            src="/logo2.png"
            alt="CTRL-Room Logo"
            width={100}
            height={72}
            className="w-[50px] md:w-[80px]"
            priority
          />
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10">
        <AnimatePresence mode="wait">
          {!verificationSuccess ? (
            <motion.div
              key="verify-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-md w-full p-8 md:p-12 text-center relative overflow-hidden"
            >
              {/* Header Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-[#E0F2F1] rounded-full border border-teal-100 flex items-center justify-center shadow-[0_0_15px_rgba(3,53,59,0.04)]">
                {verifyMutation.isPending ? (
                  <Loader2 className="w-8 h-8 text-[#03353B] animate-spin" />
                ) : (
                  <Shield className="w-8 h-8 text-[#03353B]" />
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold tracking-tight text-[#03353B] mb-3">
                Tenant Activation
              </h1>

              {/* Message Required */}
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-medium">
                Click verify button to confirm the tenant created for your mail
              </p>

              {/* Path ID Info */}
              {id && (
                <div className="bg-[#F2F3F6] border border-gray-200/80 rounded-xl py-2 px-4 inline-flex items-center gap-2 mb-8 select-all">
                  <span className="text-xs text-[#03353B] font-mono font-bold">Tenant ID:</span>
                  <span className="text-xs font-mono text-zinc-600">{id}</span>
                </div>
              )}

              {/* Verify Button matching the other site buttons */}
              <button
                onClick={() => setDialogOpen(true)}
                disabled={verifyMutation.isPending}
                className="w-full bg-[#03353B] text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#022a2e] transition-all active:scale-95 group shadow-lg shadow-[#03353B]/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm"
              >
                {verifyMutation.isPending ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Verify Account"
                )}
              </button>
            </motion.div>
          ) : (
            /* Success State with Sparkle & Ticking Animation */
            <motion.div
              key="success-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="max-w-md w-full bg-white border border-gray-100 rounded-[32px] p-10 shadow-[0_20px_50px_rgba(3,53,59,0.06)] text-center relative overflow-hidden"
            >
              {/* Checkmark ticking and sparkle animations */}
              <div className="relative flex items-center justify-center w-28 h-28 mx-auto mb-8">
                {/* Glow ring in background */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: [1, 1.15, 1], opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 bg-[#E0F2F1] rounded-full blur-xl"
                />

                {/* Animated checkmark circle */}
                <svg className="w-24 h-24 relative z-10" viewBox="0 0 100 100">
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="44"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={{ pathLength: 1, rotate: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <motion.path
                    d="M32 52 L45 65 L68 38"
                    fill="none"
                    stroke="#14b8a6"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
                  />
                </svg>

                {/* Sparkling particle burst */}
                {sparkles.map((sparkle) => (
                  <motion.svg
                    key={sparkle.id}
                    viewBox="0 0 24 24"
                    className="absolute w-6 h-6 fill-[#14b8a6] pointer-events-none z-0"
                    initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                    animate={{
                      x: sparkle.x,
                      y: sparkle.y,
                      scale: [0, sparkle.scale, sparkle.scale, 0],
                      opacity: [0, 1, 1, 0],
                      rotate: sparkle.rotate,
                    }}
                    transition={{
                      delay: sparkle.delay + 0.4,
                      duration: 1.1,
                      ease: "easeOut",
                    }}
                  >
                    <path d="M12 0L15.5 8.5L24 12L15.5 15.5L12 24L8.5 15.5L0 12L8.5 8.5Z" />
                  </motion.svg>
                ))}
              </div>

              {/* Title & Success Message */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="text-2xl font-bold tracking-tight text-[#03353B] mb-2"
              >
                Verification Successful!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="text-teal-600 font-semibold text-sm animate-pulse"
              >
                User verified successfully
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.1 }}
                className="text-xs text-zinc-500 mt-6"
              >
                Closing window...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Confirmation Shadcn AlertDialog with responsive styling */}
      <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent className="bg-white border border-gray-200 text-[#03353B] max-w-sm rounded-[24px] p-6 shadow-xl">
          <AlertDialogHeader className="items-center text-center">
            <div className="w-12 h-12 rounded-full bg-[#E0F2F1] border border-teal-100 flex items-center justify-center mb-2">
              <ShieldCheck className="w-6 h-6 text-[#03353B]" />
            </div>
            <AlertDialogTitle className="text-[#03353B] text-lg font-bold">
              Confirm Activation
            </AlertDialogTitle>
            <AlertDialogDescription className="text-zinc-500 text-sm">
              Confirm activation of the tenant space created for your email.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4 flex flex-row gap-3 justify-center sm:justify-center">
            <AlertDialogCancel
              onClick={handleNo}
              className="flex-1 py-2.5 rounded-full border border-gray-300 bg-transparent text-zinc-700 hover:bg-gray-100 transition-all cursor-pointer text-sm font-semibold h-auto"
            >
              No
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleYes}
              className="flex-1 py-2.5 rounded-full bg-[#03353B] hover:bg-[#022a2e] text-white font-semibold transition-all cursor-pointer text-sm h-auto"
            >
              Yes
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
