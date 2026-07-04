import { postLead } from "@/api/endpoints/lead";
import { Lead } from "@/types/lead";
import { useMutation } from "@tanstack/react-query";

export const useLeadMutation = () =>
  useMutation({
    mutationKey: ["lead"],
    mutationFn: (body: Lead) => postLead(body),
  });
