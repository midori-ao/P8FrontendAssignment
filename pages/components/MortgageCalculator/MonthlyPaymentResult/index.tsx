import styles from './style.module.css';

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
    // TODO: add loading, error cases here
    if (loading){
      return 'loading!';
    }
    if (error){
      return 'error!';
    }
    if (data) {
      console.log(data);
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