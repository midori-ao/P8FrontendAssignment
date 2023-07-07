import Image from "next/image";
import styles from './style.module.css'
import MenuIcon from "@mui/icons-material/Menu";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={`centered ${styles.headerContent}`}>
        <Image
          src="/p8Wordmark_sm.svg"
          alt="Produce8 logo"
          width={123}
          height={24}
        />
        <div className={styles.menuIcon} onClick={()=> {
          console.log('menu clicked');
        }}>
          <MenuIcon fontSize="large" />
        </div>
      </div>
    </header>
  );
};