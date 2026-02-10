import { useState, useEffect, useCallback } from 'react';
import { ITariff } from '@/types';

export const useGetTariffs = () => {
  const [tariffsData, setTariffsData] = useState<ITariff[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const API_BASE_URL = 'https://t-core.fit-hub.pro/Test';

  const getTariffs = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/GetTariffs`);

      if (!response.ok) {
        throw new Error(`Failed to fetch tariffs: ${response.status}`);
      }

      const data = await response.json();
      setTariffsData(data);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Unknown error'));
    } finally {
      setIsLoading(false);
    }
  }, [API_BASE_URL]);

  useEffect(() => {
    getTariffs();
  }, [getTariffs]);

  return { tariffsData, isLoading, error, refetch: getTariffs };
};
