import { api } from "@/api/client";
import type { ApiResponse } from "@/types/api";
import type { Health } from "@/types/health";

export const getHealth = async () => {
  return api.get<ApiResponse<Health>>("/health");
};
