import LoginSelection from "@/components/login/LoginSelection";
import React from "react";

export const metadata = {
  title: "Login | CTRL-Room",
  description: "Select between Client Login and Admin Login to access the CTRL-Room real-time workforce & operations platform.",
};

const page = () => {
  return <LoginSelection />;
};

export default page;
