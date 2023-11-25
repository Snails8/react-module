import { Modal } from "@mui/material"
import { Box } from "@mui/system"
import { ReactNode } from "react"

type ModalProps = {
  open: boolean,
  handleClose: () => void,
  children: ReactNode,
  width?: number | string,
  height?: number | string,
}

export const ModalMUI = (props: ModalProps) => {
  const { open, handleClose, children, width="99.9%", height=500} = props;

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    border: '0.3px solid #000',
    boxShadow: `5px 5px 14px rgba(0, 0, 0, 0.2)`,
    paddingTop: "30px",
    paddingBottom: "30px",
    width: width,
    height: height,
    borderRadius: "15px"
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
export default ModalMUI;

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