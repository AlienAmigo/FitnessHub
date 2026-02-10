import { ITariff } from '@/types';

const API_BASE_URL = 'https://t-core.fit-hub.pro/Test';

export const getTariffs = async (): Promise<ITariff[]> => {
  const response = await fetch(`${API_BASE_URL}/GetTariffs`);

  if (!response.ok) {
    throw new Error('Failed to fetch tariffs');
  }

  return response.json();
};
