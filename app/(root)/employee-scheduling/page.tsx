import EmployeeScheduling from "@/components/employee-scheduling/EmployeeScheduling";
import React from "react";

export const metadata = {
  title: "Employee Scheduling | CTRL-Room",
  description: "Simplify workforce planning with our intuitive Employee Scheduling tool. Build smart, conflict-free rosters in minutes, manage shift swaps, track availability, and ensure optimal coverage—all in one dashboard.",
};

const page = () => {
  return <EmployeeScheduling />;
};

export default page;
