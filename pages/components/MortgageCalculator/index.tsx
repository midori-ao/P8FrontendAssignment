import { useState, useEffect } from "react";
import useDebouncedCallback from "../../hooks/useDebouncedCallback";
import useFetch from "../../hooks/useFetch";
import styles from './style.module.css';
import { InterestRateSlider } from "./InterestRateSlider";
import { MonthlyPaymentResult } from "./MonthlyPaymentResult";
import { PeriodSelect } from "./PeriodSelect";
import { PurchasePriceSlider } from "./PurchasePriceSlider";

export interface SelectorProps {
  value: number;
  onChange: (arg0: number) => void;
}

export const MortgageCalculator = () => {
  const [price, setPrice] = useState<number>(250000);
  const [rate, setRate] = useState<number>(1.5);
  const [period, setPeriod] = useState<number>(25);

  const { fetchMortgageCalculation, loading, error, data } = useFetch(price, rate, period);

  const debouncedFetchMortgageCalculation = useDebouncedCallback(fetchMortgageCalculation, 500);

  useEffect(() => {
    debouncedFetchMortgageCalculation();
  }, [price, rate, period, debouncedFetchMortgageCalculation]);

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <PurchasePriceSlider value={price} onChange={setPrice}/>
        <InterestRateSlider value={rate} onChange={setRate}/>
        <PeriodSelect value={period} onChange={setPeriod}/>
      </div>
      <div className={styles.rightColumn}>
        <MonthlyPaymentResult data={data} loading={loading} error={error}/>
      </div>
    </div>
  );
};

