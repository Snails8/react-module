import { useState } from "react";

export const useModal = () => {
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