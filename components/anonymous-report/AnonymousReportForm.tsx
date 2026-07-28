"use client";

import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ChevronLeft, Lock, UploadCloud } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Users,
  Hand,
  Cigarette,
  Frown,
  Brain,
  HeartHandshake,
  Eye,
  MoreHorizontal,
  Check,
} from "lucide-react";
import { useSubmitAnonymousReport } from "@/api/anonymous-report/Mutation";

const CATEGORIES = [
  { id: "Bullying", label: "Bullying", icon: Users },
  { id: "Harassment", label: "Harassment", icon: Hand },
  { id: "Vaping", label: "Vaping", icon: Cigarette },
  { id: "Violence", label: "Violence", icon: Frown },
  { id: "Mental Health", label: "Mental Health", icon: Brain },
  { id: "Welfare Concern", label: "Welfare Concern", icon: HeartHandshake },
  { id: "Suspicious Activity", label: "Suspicious Activity", icon: Eye },
  { id: "Other", label: "Other", icon: MoreHorizontal },
];

const formSchema = z.object({
  category: z.string().min(1, "Please select a category"),
  description: z.string().min(1, "Please provide a description").max(1000),
  location: z.string().min(1, "Please select a location"),
  building: z.string().optional(),
  floorRoom: z.string().optional(),
  datetime: z.string().min(1, "Please select a date & time"),
  againsted_by: z.string().optional(),
  complainant: z.string().optional(),
  complainant_contact_number: z.string().optional(),
  isAnonymousConfirmed: z.boolean().refine((val) => val === true, {
    message: "You must confirm you understand this is anonymous",
  }),
});

export default function AnonymousReportForm() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id") || "";
  const report_type = searchParams.get("report_type") || "event";

  const [step, setStep] = useState(1);
  const [file, setFile] = useState<File | null>(null);

  const submitMutation = useSubmitAnonymousReport({
    onSuccess: () => setStep(3),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
      description: "",
      location: "",
      building: "",
      floorRoom: "",
      datetime: "",
      againsted_by: "",
      complainant: "",
      complainant_contact_number: "",
      isAnonymousConfirmed: false,
    },
  });

  const isAnonymousConfirmed = form.watch("isAnonymousConfirmed");

  const handleCategorySelect = (categoryId: string) => {
    form.setValue("category", categoryId, { shouldValidate: true });
    setStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const payload = new FormData();
    payload.append("report_type", report_type);
    payload.append("id", id);
    payload.append("subject", values.category);
    
    payload.append("againsted_by", values.againsted_by || "");
    payload.append("complainant", values.complainant || "");
    payload.append("complainant_contact_number", values.complainant_contact_number || "");

    const extendedDescription = `
Location: ${values.location || "N/A"}
Building: ${values.building || "N/A"}
Floor/Room: ${values.floorRoom || "N/A"}
Date & Time: ${values.datetime || "N/A"}

${values.description}
    `.trim();
    
    payload.append("description", extendedDescription);

    if (file) {
      payload.append("attachment", file);
    }

    submitMutation.mutate(payload);
  };

  if (step === 3) {
    return (
      <Card className="w-full max-w-2xl mx-auto p-8 text-center space-y-4">
        <div className="flex justify-center mb-6 mt-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="bg-emerald-100 p-5 rounded-full"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300, damping: 20 }}
            >
              <Check className="w-10 h-10 text-emerald-600 stroke-[3]" />
            </motion.div>
          </motion.div>
        </div>
        <h2 className="text-2xl font-semibold">Report Submitted</h2>
        <p className="text-muted-foreground">
          Thank you. Your report has been submitted anonymously.
        </p>
        <Button onClick={() => window.location.reload()} variant="outline" className="mt-4">
          Submit Another Report
        </Button>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white overflow-hidden shadow-sm border">
      {/* Header */}
      <div className="px-6 py-4 border-b flex items-center justify-between">
        <div className="flex items-center gap-3">
          {step === 2 ? (
            <button
              onClick={() => setStep(1)}
              type="button"
              className="p-1 hover:bg-slate-100 rounded-md transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>
          ) : (
            <ChevronLeft className="w-5 h-5 text-slate-400 invisible" />
          )}
          <h1 className="text-lg font-semibold text-slate-800">Report a Concern</h1>
        </div>
        <img src="/logo2.png" alt="Ctrl Room" className="h-8 object-contain" />
      </div>

      {step === 1 && (
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              What would you like to report?
            </h2>
            <p className="text-slate-500">
              Select a category that best matches your concern.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategorySelect(category.id)}
                  className="flex items-center gap-4 p-4 border rounded-xl hover:border-emerald-600 hover:shadow-sm transition-all bg-white text-left group"
                >
                  <div className="text-slate-800 group-hover:text-emerald-700 transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium text-slate-800">
                    {category.label}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t flex items-center justify-center gap-2 text-slate-500 text-sm">
            <Lock className="w-4 h-4" />
            <span>100% Anonymous</span>
          </div>
          <div className="text-center mt-4 text-xs text-slate-400 font-medium">
            2. Select Category
          </div>
        </div>
      )}

      {step === 2 && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 flex flex-col gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Tell us more</h2>
              <p className="text-slate-500">
                Please provide details about the concern.
              </p>
            </div>

            <div className="space-y-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CATEGORIES.map((cat) => (
                          <SelectItem key={cat.id} value={cat.id}>
                            {cat.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="againsted_by"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Who is this about? (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Guard Smith" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="complainant"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Name (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Leave blank to remain anonymous" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="complainant_contact_number"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Leave blank to remain anonymous" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>Description</FormLabel>
                      <span className="text-xs text-slate-400">
                        {field.value.length}/1000
                      </span>
                    </div>
                    <FormControl>
                      <Textarea
                        placeholder="Describe what happened..."
                        className="min-h-[120px] resize-none"
                        maxLength={1000}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location (Campus / Area)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="North Campus">North Campus</SelectItem>
                          <SelectItem value="South Campus">South Campus</SelectItem>
                          <SelectItem value="Main Building">Main Building</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="building"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Building (Optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select building" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Building A">Building A</SelectItem>
                          <SelectItem value="Building B">Building B</SelectItem>
                          <SelectItem value="Building C">Building C</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="floorRoom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Floor / Room (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g. Floor 2 / Room 201" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="datetime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Date & Time</FormLabel>
                      <FormControl>
                        <Input type="datetime-local" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="space-y-2">
                <FormLabel>Upload Photo or File (Optional)</FormLabel>
                <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center bg-slate-50/50 hover:bg-slate-50 transition-colors relative">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept=".png,.jpg,.jpeg,.pdf"
                  />
                  <div className="bg-emerald-50 text-emerald-600 p-2 rounded-lg mb-3">
                    <UploadCloud className="w-6 h-6" />
                  </div>
                  {file ? (
                    <p className="text-sm font-medium text-slate-800">{file.name}</p>
                  ) : (
                    <>
                      <p className="text-sm text-slate-600 mb-1">
                        <span className="font-semibold text-emerald-700">Click to upload</span> or drag and drop
                      </p>
                      <p className="text-xs text-slate-400">
                        PNG, JPG, PDF up to 5MB
                      </p>
                    </>
                  )}
                </div>
              </div>

              <FormField
                control={form.control}
                name="isAnonymousConfirmed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow-sm">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium leading-relaxed text-slate-700 cursor-pointer">
                        I understand my report is anonymous and cannot be traced back to me.
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <div className="pt-2 border-t flex flex-col gap-4">
              <Button
                type="submit"
                disabled={submitMutation.isPending || !isAnonymousConfirmed}
                className="w-full bg-[#033F40] hover:bg-[#033F40]/90 text-white py-6 text-base font-semibold disabled:opacity-50"
              >
                {submitMutation.isPending ? "Submitting..." : "Submit Report"}
              </Button>
              <div className="text-center text-sm text-slate-400">
                Powered by Ctrl Room
              </div>
              <div className="text-center text-xs text-slate-400 font-medium">
                3. Report Form
              </div>
            </div>
          </form>
        </Form>
      )}
    </Card>
  );
}
