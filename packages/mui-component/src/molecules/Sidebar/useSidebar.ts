import { useState } from "react";

export type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const useSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return {
    open,
    handleOpen,
    handleClose,
  };
};