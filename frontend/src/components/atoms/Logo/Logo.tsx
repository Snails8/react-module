import styles from './Logo.module.css';

type LogoProps = {
  logoPath: string;
};

export const Logo = (props: LogoProps) => {
  const { logoPath } = props;

  return (
    <div className={`${styles.base}`}>
      <img src={logoPath} alt="icon" />
    </div>
  );
};
