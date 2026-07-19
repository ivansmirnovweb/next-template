"use client";

import { LoaderCircle, Send } from "lucide-react";
import { Controller } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { useLeadForm } from "./hooks/useLeadForm";

export const LeadForm = () => {
  const { form, onSubmit, isPending, error } = useLeadForm();
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="lead-name">Name</Label>
        <Input
          id="lead-name"
          autoComplete="name"
          placeholder="Enter your name"
          aria-describedby={errors.name ? "lead-name-error" : undefined}
          aria-invalid={Boolean(errors.name)}
          {...register("name")}
        />
        {errors.name && (
          <p
            id="lead-name-error"
            className="text-xs text-destructive"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-email">Email</Label>
        <Input
          id="lead-email"
          type="email"
          autoComplete="email"
          placeholder="hello@company.com"
          aria-describedby={errors.email ? "lead-email-error" : undefined}
          aria-invalid={Boolean(errors.email)}
          {...register("email")}
        />
        {errors.email && (
          <p
            id="lead-email-error"
            className="text-xs text-destructive"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="lead-request">Project request</Label>
        <Textarea
          id="lead-request"
          className="min-h-32 resize-none"
          placeholder="Describe the task, expected timeline, and what outcome you want from the first iteration."
          aria-describedby={errors.request ? "lead-request-error" : undefined}
          aria-invalid={Boolean(errors.request)}
          {...register("request")}
        />
        <div className="flex items-start justify-between gap-3">
          {errors.request ? (
            <p
              id="lead-request-error"
              className="text-xs text-destructive"
              role="alert"
            >
              {errors.request.message}
            </p>
          ) : (
            <span />
          )}
          <p className="shrink-0 text-xs text-muted-foreground">
            Up to 200 characters
          </p>
        </div>
      </div>

      <Controller
        control={control}
        name="consent"
        render={({ field }) => (
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <Checkbox
                id="lead-consent"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-describedby={
                  errors.consent ? "lead-consent-error" : undefined
                }
                aria-invalid={Boolean(errors.consent)}
              />
              <Label
                htmlFor="lead-consent"
                className="text-sm leading-5 font-normal text-muted-foreground"
              >
                I agree to the processing of my personal data.
              </Label>
            </div>
            {errors.consent && (
              <p
                id="lead-consent-error"
                className="text-xs text-destructive"
                role="alert"
              >
                {errors.consent.message}
              </p>
            )}
          </div>
        )}
      />

      {error && (
        <p
          className="rounded-lg border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive"
          role="alert"
        >
          Failed to send the request. Please try again.
        </p>
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
