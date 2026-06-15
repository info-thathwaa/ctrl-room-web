"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function VerificationGuard() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if there is an active verification lock in session storage
    const lockId = sessionStorage.getItem("verification_lock");
    
    // If locked and not currently on the verify page, force redirect back
    if (lockId && !pathname.startsWith("/user-verify")) {
      router.replace(`/user-verify/${lockId}`);
    }
  }, [pathname, router]);

  return null;
}
