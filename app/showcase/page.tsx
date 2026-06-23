import { getHealth } from '@/api/endpoints/health';

export default async function ShowcasePage() {
  const response = await getHealth();
  return <div>{response.status}</div>;
}
