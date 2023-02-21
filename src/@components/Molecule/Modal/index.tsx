import React from "react-dom";

import { ModalMap } from "./modalMap";
import { useModalValue } from "@/store/modalState";

const ModalRoot = () => {
  const { openModal, openModalProps } = useModalValue();

  const renderModal = () => {
    if (!openModal) {
      return null;
    }

    if (!openModalProps) {
      return null;
    }

    /**
     * @todo replace any
     */
    const Modal = ModalMap[openModal] as any;

    return <Modal {...openModalProps} />;
  };

  return <>{renderModal()}</>;
};

export default ModalRoot;
