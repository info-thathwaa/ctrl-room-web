import Timesheet from "@/components/timesheet/Timesheet";
import React from "react";

export const metadata = {
  title: "Timesheet | CTRL-Room",
  description: "CTRL-Room's Timesheet feature simplifies attendance and hour tracking for distributed, shift-based, or mobile teams.",
};

const page = () => {
  return <Timesheet />;
};

export default page;
