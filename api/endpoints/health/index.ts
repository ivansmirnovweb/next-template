import { api } from '@/api/client';
import type { Health } from '@/types/health';

export const getHealth = async () => {
  return api.get<Health>('/health');
};
