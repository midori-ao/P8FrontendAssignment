import { useState } from "react";
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

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <PurchasePriceSlider value={price} onChange={setPrice}/>
        <InterestRateSlider value={rate} onChange={setRate}/>
        <PeriodSelect value={period} onChange={setPeriod}/>
      </div>
      <div className={styles.rightColumn}>
        <MonthlyPaymentResult value={0.23}/>
      </div>
    </div>
  );
};

