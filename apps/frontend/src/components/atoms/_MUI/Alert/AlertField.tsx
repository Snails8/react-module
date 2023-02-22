import { Alert, AlertTitle } from "@mui/material"
import { ReactNode } from "react";

type AlertProps = {
  severity: "error" | "warning" | "info" | "success"
  body: string,
  title?: ReactNode,
}

export const AlertField = (props: AlertProps) => {
  const { severity, body, title } = props;
  
  if (title) {
    return (
      <Alert severity="info">
        <AlertTitle>{title}</AlertTitle>
        {body}
      </Alert>
    )
  }
  
  return (
    <Alert security={severity}>{body}</Alert>
  )
}

/**
 * usage

  return (
    <AlertField severity="error">body text</AlertField>
  )
 */
