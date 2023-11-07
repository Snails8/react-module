import React, { ReactNode } from "react";
import { Box } from "@mui/system"
import { grey, blueGrey, red } from '@mui/material/colors';
import { Grid } from "@mui/material";
import Head from "next/head";
import { Sidebar } from "./parts/Sidebar/Sidebar";
import { SidebarContent } from "./parts/Sidebar/SidebarContent";
import { GlobalHeader } from "./parts/Header/GlobalHeader";
import { useSidebar } from "./parts/Sidebar/useSidebar";

type LayoutProps = {
  themeBgColor?: "white" | "grey" | "blueGrey" | "black",
  showHeader?: boolean,
  bottom?: string | number
  children: ReactNode 
}

export const Layout = (props: LayoutProps) => {
  const {themeBgColor="white" ,children, showHeader=true, bottom="70px"} = props;
  const {open, handleOpen, handleClose} = useSidebar();
  
  const headerBaseColor = "white";


  return (
    <>
      { showHeader && <GlobalHeader handleOpen={handleOpen} themeColor={headerBaseColor}/> }
      <Sidebar anchor='left' open={open} handleClose={handleClose}>
        <SidebarContent handleClose={() => handleClose()} />
      </Sidebar>
      <Grid sx={{ backgroundColor: "white", paddingBottom: bottom, }}>
        {children}
      </Grid>
    </>
  )
}