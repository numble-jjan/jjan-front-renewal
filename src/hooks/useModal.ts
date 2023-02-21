import { useModalState } from "@/store/modalState";

import { ModalKeys, ModalProps } from "@/@components/Molecule/Modal/modalMap";

export const useModal = () => {
  const [store, setStore] = useModalState();

  const showModal = (openModal: ModalKeys, openModalProps: ModalProps) => {
    setStore({
      ...store,
      openModal,
      openModalProps,
    });
  };

  const hideModal = () => {
    setStore({
      ...store,
      openModal: null,
      openModalProps: null,
    });
  };

  return { showModal, hideModal };
};
