import { Link } from 'react-router-dom'
import { Logo } from '../../atoms/Logo/Logo'
import styles from './GlobalHeader.module.css'

import whiteLogo from "../../../assets/images/logo-white.svg";
import UserIcon from '../../../assets/logo.svg';
import { Icon } from '../../atoms/Icon/Icon';

type HeaderProps = {
  pageTitle?: string
}

export const GlobalHeader = (
  props: HeaderProps 
) => {

  return (
    <div className={`${styles.headerContainer}` }>
      <Link to="/">
        <div className={`${styles.logoContainer}`}>
          <Logo logoPath={whiteLogo} />
        </div>
      </Link>

      <div className={`${styles.userContainer}`}>
        <div className={`${styles.userIconContainer}`}>
          <Icon height={30} width={30}>{UserIcon}</Icon>
        </div>
        <div className={`${styles.userNameContainer}`}>
          テスト太郎
        </div>
      </div> 
    </div>
  )
}