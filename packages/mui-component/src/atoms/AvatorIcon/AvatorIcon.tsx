import { Avatar } from "@mui/material";
import { deepOrange } from '@mui/material/colors';

type AvatarIconProps = {
  src: string,
  alt: string,
  width?: number
  height?: number 
  className?: any
}

const AvatarIcon = (props: AvatarIconProps) => {
  const { src, alt, width, height, className } = props;

  const style = { 
    width: width, 
    height: height, 
    bgcolor: deepOrange[500] 
  }

  if (!src) {
    return (
      <Avatar className={className} alt={alt} sx={style}>{alt[1]}</Avatar>
    );
  };

  return (
    <Avatar className={className} alt={alt} src={src} sx={style} />
  );
};

export default AvatarIcon;