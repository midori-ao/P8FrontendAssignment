import styles from './style.module.css';
import { CircularProgress } from '@mui/material';

export interface MonthlyPaymentResultProps {
  data: number;
  loading: any;
  error: Error | null;
}

const extractCents = (number: number) => {
  const priceArray = number.toFixed(2).toString().split(".");
  return priceArray[1] || "00";
}

const extractDollars = (number: number) => {
  const priceString = number.toString();
  const decimalIndex = priceString.indexOf(".");

  if (decimalIndex === -1) {
    return number;
  }

  return Number(priceString.substring(0, decimalIndex)).toLocaleString('en-US');
};

export const MonthlyPaymentResult = ({ data, loading, error }: MonthlyPaymentResultProps) => {
  
  const renderContent = () => {
    if (loading){
      return (
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      );
    }
    if (error){
      return (
        <div className={styles.loading}>
          There was an error! Try again.
        </div>
      );
    }
    if (data) {
      return (
        <>
          <div className={styles.header}>Your total monthly payment will be</div>
          <div className={styles.paymentContainer}>
            <span className={styles.currency}>$</span>
            <div className={styles.value}>{extractDollars(data)}</div>
            <span className={styles.currency}>{extractCents(data)}</span>
          </div>
          <div className={styles.month}>/month</div>
          <button className={styles.applyButton}>
            Apply Today
          </button>
        </>
      );
    }
    return null;
  };
  
  return (
    <div className={styles.container}>
      {renderContent()}
    </div>
  );
};