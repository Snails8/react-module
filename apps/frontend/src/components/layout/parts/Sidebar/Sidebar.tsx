import { Drawer, Grid } from "@mui/material";
import { ReactNode } from "react";
import { Anchor } from "./useSidebar";

type SidebarProps = {
  anchor: Anchor,
  open: boolean,
  handleClose: () => void,
  children: ReactNode,
  width?: number
}

//TODO:: closeボタンの作成
export const Sidebar = (props: SidebarProps) => {
  const { anchor, open, handleClose, children, width=200 } = props;

  const style = {
    minWidth: width,
  }

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={handleClose as unknown as (event: {}, reason: "backdropClick" | "escapeKeyDown") => void}
      sx={style}
    >  
      <Grid sx={style}>
        {children}
      </Grid>
    </Drawer>
  )
}