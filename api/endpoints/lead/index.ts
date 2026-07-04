import { api } from "@/api/client";
import type { ApiResponse } from "@/types/api";
import type { Lead } from "@/types/lead";

export const postLead = async (body: Lead) =>
  api.post<ApiResponse<null>>("/lead", body);
