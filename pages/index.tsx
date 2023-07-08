import type { NextPage } from 'next';
import styles from './styles.module.css';
import { MortgageCalculator } from './components/MortgageCalculator';


const Home: NextPage = () => {
  return (
    <section id="home" className={styles.home}>
      <h2 className={styles.header}>Get started with Digital Credit Experience</h2>
      <h3 className={styles.subheader}>Qualify or apply your mortgage in minutes</h3>
      <div className={styles.mortgageContainer}>
        <MortgageCalculator/>
      </div>
    </section>
  )
}

export default Home
