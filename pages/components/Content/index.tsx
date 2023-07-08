import styles from './style.module.css';

interface ContentProps {
    children: JSX.Element;
  }

export const Content = (props: ContentProps) => {
  return (
    <div className={styles.contentContainer}>
      <div className={'centered'}>
        {props.children}
      </div>
    </div>
  );
};