import { Button } from "@mui/material";
import { FC } from "react";

type ButtonProps = {
  label: string,
  handleClick: (() => void) |  ((e: React.MouseEvent<any>) => any),
  variant?: "text" | "contained" | "outlined"
  color?: "primary" | "secondary" | "success" | "error",
  disabled?: boolean,
};

export const MUIButton: FC<ButtonProps> = ({
  handleClick, 
  label, 
  variant = "contained",
  color = "primary", 
  disabled=false 
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      onClick={handleClick}
      disabled={disabled}
      data-testid={'test'}
    >
      {label}
    </Button>
  );
};
