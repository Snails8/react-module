type LogoProps = {
  logoPath?: string;
  width?: number
  height?: number
};

const Logo = (props: LogoProps) => {
  const { logoPath, height=60, width=60 } = props;

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

export default Logo;