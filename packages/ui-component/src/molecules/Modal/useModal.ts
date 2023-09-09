import { useState } from "react";

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return {
    showModal,
    handleOpen,
    handleClose,
  };
};

export default useModal;