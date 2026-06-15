import UserVerify from "@/components/user-verify/UserVerify";
import React from "react";

export const metadata = {
  title: "Verify Account | CTRL-Room",
  description: "Confirm and verify your tenant account registration.",
};

export default function VerifyPage() {
  return <UserVerify />;
}
