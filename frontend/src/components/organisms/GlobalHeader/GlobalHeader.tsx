import { Link } from 'react-router-dom';
import { Logo } from '../../atoms/Logo/Logo';
import styles from './GlobalHeader.module.css';
import { memo } from 'react';

type HeaderProps = {
  pageTitle?: string;
};

export const GlobalHeader = memo((props: HeaderProps) => {
  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo_container}>
          <div style={{ color: '#fff' }}>Sample</div>

          {/* <Logo logoPath={whiteLogo} /> */}
        </div>
      </Link>

      <div className={styles.user_container}>
        <div className={styles.user_icon}>
          {/* <UserIcon height={30} width={30} /> */}
        </div>
        <div className={styles.user_name}>テスト太郎</div>
      </div>
    </div>
  );
});
