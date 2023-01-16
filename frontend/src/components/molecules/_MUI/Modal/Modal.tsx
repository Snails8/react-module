import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"

type ModalProps = {
  open: boolean,
  handleClose: () => void,
  children: ReactNode,
  width?: number,
}

export const ModalMUI = (props: ModalProps) => {
  const { open, handleClose, children, width=200} = props;

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: width,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        {children}
      </Box>
    </Modal>
  )
}

/**
usage: 
  const {open, handleOpen, handleClose} = useModal();

  return (
    <Button handleClick={handleOpen} label={modal} />
    <ModalMUI handleClose={handleClose} open={open} width={1000}>
      <p>aaa</p>
    </ModalMUI>
  )

 */