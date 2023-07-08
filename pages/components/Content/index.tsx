import styles from './style.module.css';

interface ContentProps {
    children: JSX.Element;
  }

export const Content = (props: ContentProps) => {
  return (
    <div className={styles.container}>
      <div className={'centered'}>
        {props.children}
      </div>
    </div>
  );
};