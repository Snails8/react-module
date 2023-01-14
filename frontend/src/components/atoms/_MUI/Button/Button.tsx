import { Button } from "@mui/material";
import { FC } from "react";

type ButtonProps = {
  handleClick: (() => void) |  ((e: React.MouseEvent<any>) => any),
  label: string,
  color?: "primary" | "secondary" | "success" | "error",
  disabled?: boolean,
};

// primaryのcolorが上書きされているので使うときは注意する
export const MUIButton: FC<ButtonProps> = ({
  handleClick, 
  label, 
  color = "primary", 
  disabled=false 
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      onClick={handleClick}
      disabled={disabled}
      data-testid={'test'}
    >
      {label}
    </Button>
  );
};
