"use client";

import { LoaderCircle, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useLeadForm } from "./hooks/useLeadForm";

export const LeadForm = () => {
  const { form, onSubmit, isPending, error } = useLeadForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="space-y-2">
        <Label htmlFor="lead-name">Name</Label>
        <Input
          id="lead-name"
          placeholder="Enter your name"
          autoComplete="name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        <p className="min-h-5 text-xs text-destructive">
          {errors.name?.message ?? " "}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-email">Email</Label>
        <Input
          id="lead-email"
          type="email"
          placeholder="hello@company.com"
          autoComplete="email"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        <p className="min-h-5 text-xs text-destructive">
          {errors.email?.message ?? " "}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-request">Project request</Label>
        <Textarea
          id="lead-request"
          placeholder="Describe the task, expected timeline, and what outcome you want from the first iteration."
          aria-invalid={!!errors.request}
          className="min-h-32 resize-none"
          {...register("request")}
        />
        <div className="flex items-start justify-between gap-3">
          <p className="min-h-5 text-xs text-destructive">
            {errors.request?.message ?? " "}
          </p>
          <p className="shrink-0 text-xs text-muted-foreground">
            Up to 200 characters
          </p>
        </div>
      </div>

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          Failed to send the request. Please try again.
        </div>
      )}

      <Button type="submit" size="lg" disabled={isPending}>
        {isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <Send data-icon="inline-start" />
        )}
        {isPending ? "Sending..." : "Send request"}
      </Button>
    </form>
  );
};
