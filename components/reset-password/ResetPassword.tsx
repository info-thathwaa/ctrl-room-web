"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, Loader2, Eye, EyeOff } from "lucide-react";
import { useResetPassword } from "@/api/reset-password/Mutation";

// Sparkles for the burst animation on success
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

export default function ResetPassword() {
  const params = useParams();
  const token = params?.token as string;

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [resetSuccess, setResetSuccess] = useState(false);

  // Hook to handle window close or redirection, and clearing session lock
  const handleExit = () => {
    if (typeof window !== "undefined") {
      sessionStorage.removeItem("reset_password_lock");
      try {
        window.close();
      } catch (e) {
        console.error("Window close blocked by browser policy:", e);
      }
      // Fallback redirection to home
      setTimeout(() => {
        window.location.href = "/";
      }, 100);
    }
  };

  // Lock the user to this page on component load/render
  useEffect(() => {
    if (token) {
      sessionStorage.setItem("reset_password_lock", token);
    }
  }, [token]);

  // Restrict SPA navigation / lock browser back button on the reset-password page
  useEffect(() => {
    if (typeof window === "undefined") return;

    window.history.pushState(null, "", window.location.href);

    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
      toast.warning("Password reset in progress. Please complete or exit.", {
        position: "top-center",
      });
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const resetMutation = useResetPassword(token, {
    onSuccess: () => {
      setResetSuccess(true);
      setTimeout(() => {
        handleExit();
      }, 2000);
    },
  });

  // Helper to check for sequential characters (digits or letters, e.g. "123", "abc", "321", "cba")
  const checkSequential = (str: string) => {
    if (str.length < 3) return false;
    for (let i = 0; i < str.length - 2; i++) {
      const char1 = str.charCodeAt(i);
      const char2 = str.charCodeAt(i + 1);
      const char3 = str.charCodeAt(i + 2);

      // Ascending (1-2-3 or a-b-c)
      if (char2 === char1 + 1 && char3 === char2 + 1) {
        const isDigit = (c: number) => c >= 48 && c <= 57;
        const isLower = (c: number) => c >= 97 && c <= 122;
        const isUpper = (c: number) => c >= 65 && c <= 90;
        if (
          (isDigit(char1) && isDigit(char2) && isDigit(char3)) ||
          (isLower(char1) && isLower(char2) && isLower(char3)) ||
          (isUpper(char1) && isUpper(char2) && isUpper(char3))
        ) {
          return true;
        }
      }

      // Descending (3-2-1 or c-b-a)
      if (char2 === char1 - 1 && char3 === char2 - 1) {
        const isDigit = (c: number) => c >= 48 && c <= 57;
        const isLower = (c: number) => c >= 97 && c <= 122;
        const isUpper = (c: number) => c >= 65 && c <= 90;
        if (
          (isDigit(char1) && isDigit(char2) && isDigit(char3)) ||
          (isLower(char1) && isLower(char2) && isLower(char3)) ||
          (isUpper(char1) && isUpper(char2) && isUpper(char3))
        ) {
          return true;
        }
      }
    }
    return false;
  };

  // Validations:
  const isMinLength = password.length >= 8;
  const hasNoSpaces = !/\s/.test(password);
  const hasRepeatingChars = /(.)\1\1/.test(password);
  const hasSequentialChars = checkSequential(password);
  const passwordsMatch = password === confirmPassword;

  // Show inline feedback if fields are dirty
  const showMatchError = confirmPassword.length >= password.length && confirmPassword.length > 0 && !passwordsMatch;
  const showLengthError = password.length > 0 && !isMinLength;
  const showSpaceError = password.length > 0 && !hasNoSpaces;
  const showRepeatingError = password.length > 0 && hasRepeatingChars;
  const showSequentialError = password.length > 0 && hasSequentialChars;

  const isFormValid = isMinLength && hasNoSpaces && !hasRepeatingChars && !hasSequentialChars && passwordsMatch && token;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    resetMutation.mutate(password);
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

      {/* Simplified Header */}
      <header className="w-full py-5 px-6 md:px-16 lg:px-[100px] flex items-center justify-between bg-transparent relative z-20">
        <div className="flex items-center">
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
          {!resetSuccess ? (
            <motion.div
              key="reset-card"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="max-w-md w-full bg-white border border-gray-100 rounded-[32px] p-8 md:p-10 shadow-[0_20px_50px_rgba(3,53,59,0.06)] text-center relative overflow-hidden"
            >
              {/* Header Icon */}
              <div className="w-16 h-16 mx-auto mb-6 bg-[#E0F2F1] rounded-full border border-teal-100 flex items-center justify-center shadow-[0_0_15px_rgba(3,53,59,0.04)]">
                {resetMutation.isPending ? (
                  <Loader2 className="w-8 h-8 text-[#03353B] animate-spin" />
                ) : (
                  <Lock className="w-8 h-8 text-[#03353B]" />
                )}
              </div>

              {/* Title */}
              <h1 className="text-2xl font-bold tracking-tight text-[#03353B] mb-2">
                Reset Password
              </h1>
              <p className="text-zinc-500 text-sm mb-6 font-medium">
                Please enter and confirm your new password below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {/* New Password Input */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#03353B]">
                    New Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter new password"
                      disabled={resetMutation.isPending}
                      className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#03353B]/20 focus:border-[#03353B] bg-[#F2F3F6]/50 text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {showLengthError && (
                    <p className="text-xs text-red-500 font-medium">
                      Password must be at least 8 characters.
                    </p>
                  )}
                  {showSpaceError && (
                    <p className="text-xs text-red-500 font-medium">
                      Password must not contain spaces.
                    </p>
                  )}
                  {showRepeatingError && (
                    <p className="text-xs text-red-500 font-medium">
                      Continuous repetition of the same character more than 2 times is not allowed.
                    </p>
                  )}
                  {showSequentialError && (
                    <p className="text-xs text-red-500 font-medium">
                      Sequential letters or numbers are not allowed.
                    </p>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div className="space-y-1.5">
                  <label className="text-sm font-semibold text-[#03353B]">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm new password"
                      disabled={resetMutation.isPending}
                      className="w-full h-12 px-4 pr-10 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#03353B]/20 focus:border-[#03353B] bg-[#F2F3F6]/50 text-sm transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {showMatchError && (
                    <p className="text-xs text-red-500 font-medium">
                      Password doesn&apos;t match
                    </p>
                  )}
                </div>

                {/* Reset Button */}
                <button
                  type="submit"
                  disabled={!isFormValid || resetMutation.isPending}
                  className="w-full bg-[#03353B] text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:bg-[#022a2e] transition-all active:scale-95 group shadow-lg shadow-[#03353B]/20 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer text-sm mt-8"
                >
                  {resetMutation.isPending ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    "Reset Password"
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            /* Success State with Sparkle & Checkmark Animation */
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
                Reset Successful!
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="text-teal-600 font-semibold text-sm animate-pulse"
              >
                Your password has been changed
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.1 }}
                className="text-xs text-zinc-500 mt-6"
              >
                Redirecting...
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
