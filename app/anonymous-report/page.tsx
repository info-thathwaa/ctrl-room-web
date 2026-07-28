import AnonymousReportForm from "@/components/anonymous-report/AnonymousReportForm";
import React, { Suspense } from "react";

export const metadata = {
  title: "Anonymous Report | CTRL-Room",
  description: "Submit an anonymous report.",
};

export default function AnonymousReportPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <Suspense fallback={<div className="text-center p-8">Loading form...</div>}>
        <AnonymousReportForm />
      </Suspense>
    </div>
  );
}
