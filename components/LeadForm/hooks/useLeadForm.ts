"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useLeadMutation } from "@/api/hooks/lead/useLeadMutation";
import { leadSchema, type Lead } from "@/types/lead";

const DEFAULT_VALUES: Lead = {
  name: "",
  email: "",
  request: "",
  consent: false,
};

export const useLeadForm = () => {
  const isSubmittingRef = useRef(false);
  const form = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const { mutateAsync, isPending, error } = useLeadMutation();

  const onSubmit = async (data: Lead) => {
    if (isSubmittingRef.current) {
      return;
    }

    isSubmittingRef.current = true;

    try {
      const { success } = await mutateAsync(data);

      if (success) {
        form.reset(DEFAULT_VALUES);
        toast.success("Request sent successfully!");
      }
    } catch {
      // The mutation error is rendered by LeadForm.
    } finally {
      isSubmittingRef.current = false;
    }
  };

  return { form, onSubmit, isPending, error } as const;
};
