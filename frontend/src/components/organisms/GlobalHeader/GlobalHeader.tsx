import { Link } from 'react-router-dom';
import { Logo } from '../../atoms/Logo/Logo';
import styles from './GlobalHeader.module.css';
import { memo, useState } from 'react';
import { User, UserRole } from '../../../pages/Users/useUsers.hook';
import { UserMenu } from '../UserMenu/UserMenu';

type HeaderProps = {
  pageTitle?: string;
};

export const GlobalHeader = memo((props: HeaderProps) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  const user: User = {
    id: 1,
    role: UserRole.Manager,
    name: 'hoge',
    email: 'sample@sample.com',
  };

  return (
    <div className={styles.container}>
      <Link to="/">
        <div className={styles.logo_container}>
          <div style={{ color: '#fff' }}>Sample</div>

          {/* <Logo logoPath={whiteLogo} /> */}
        </div>
      </Link>

      <div className={styles.user_container} onClick={handleClick}>
        <div className={styles.user_icon}>
          {/* <UserIcon height={30} width={30} /> */}
        </div>
        <div className={styles.user_name}>テスト太郎</div>
        <div className={styles.user_menu}>
          { visible && <UserMenu user={user}/> }
        </div>
      </div>
    </div>
  );
});
