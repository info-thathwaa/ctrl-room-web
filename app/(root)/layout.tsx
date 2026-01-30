
import type { Metadata } from "next";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "CTRL-Room",
  description: "CTRL-Room - Real-Time Workforce & Security Operations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>

      {children}
    </div>
  );
}