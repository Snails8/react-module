import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { memo } from "react";
import { blue } from "@mui/material/colors";

export const BackButton = memo(() => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  const blueColor = blue[900];

  return (
    <Button variant="text" onClick={handleBack} size="large">
      <ArrowBackIosIcon sx={{ color: blueColor }} />
      <Typography variant="h6" color={blueColor}>戻る</Typography>
    </Button>
  );
});