"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { useLeadMutation } from "@/api/hooks/lead/useLeadMutation";
import { leadSchema, type Lead } from "@/types/lead";

const DEFAULT_VALUES: Lead = {
  name: "",
  email: "",
  request: "",
};

export const useLeadForm = () => {
  const form = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: DEFAULT_VALUES,
  });
  const { mutateAsync, isPending, error } = useLeadMutation();

  const onSubmit = async (data: Lead) => {
    const { success } = await mutateAsync(data);

    if (success) {
      form.reset(DEFAULT_VALUES);
      toast.success("Request sent successfully!");
    }
  };

  return { form, onSubmit, isPending, error } as const;
};
