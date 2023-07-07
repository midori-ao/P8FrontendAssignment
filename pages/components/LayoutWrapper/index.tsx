import { Header } from "../Header";
import { Content } from "../Content";
import styles from './style.module.css';

interface LayoutWrapperProps {
    children: JSX.Element;
  }

export const LayoutWrapper = (props: LayoutWrapperProps) => {
  return (
    <div className={styles.layoutWrapperContainer}>
      <Header/>
      <Content>
        {props.children}
      </Content>
    </div>
  );
};