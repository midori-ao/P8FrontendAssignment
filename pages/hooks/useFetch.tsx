import { useState, useCallback } from 'react';

interface FetchResponse {
  data: any;
  loading: boolean;
  error: Error | null;
}

export default (principal: number, annualInterestRate: number, termOfLoan: number): FetchResponse & { fetchMortgageCalculation: () => Promise<void> } => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<any>(null);

  const fetchMortgageCalculation = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/mortgageCalculation?principal=${principal}&annualInterestRate=${annualInterestRate}&termOfLoan=${termOfLoan}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin'
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setData(Number(data.monthlyPayment));
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }, [principal, annualInterestRate, termOfLoan]);

  return { fetchMortgageCalculation, loading, error, data };
};