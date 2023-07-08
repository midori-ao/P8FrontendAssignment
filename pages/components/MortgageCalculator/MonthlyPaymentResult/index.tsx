import styles from './style.module.css';

export interface MonthlyPaymentResultProps {
  value: number;
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

export const MonthlyPaymentResult = ({ value }: MonthlyPaymentResultProps) => {
  
  const renderContent = () => {
    // TODO: add loading, error cases here
    if (true) {
      return (
        <>
          <div className={styles.header}>Your total monthly payment will be</div>
          <div className={styles.paymentContainer}>
            <span className={styles.currency}>$</span>
            <div className={styles.value}>{extractDollars(value)}</div>
            <span className={styles.currency}>{extractCents(value)}</span>
          </div>
          <div className={styles.month}>/month</div>
          <button className={styles.applyButton}>
            Apply Today
          </button>
        </>
      );
    } else {
      return null;
    }
  };
  
  return (
    <div className={styles.container}>
      {renderContent()}
    </div>
  );
};