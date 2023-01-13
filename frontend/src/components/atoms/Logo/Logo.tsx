import logo from  '../../../assets/logo/logo_yotuba01.png';

type LogoProps = {
  logoPath?: string;
  width?: number
  height?: number
};

export const Logo = (props: LogoProps) => {
  const { logoPath = logo, height=60, width=60 } = props;

  return (
    <img 
      src={logoPath} 
      alt="icon" 
      style={{ 
        width: width,
        height: height,
      }}
      data-testid='test'
    />
  );
};