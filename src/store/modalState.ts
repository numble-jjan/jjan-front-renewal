import { atom, useRecoilState, useRecoilValue } from "recoil";
import { ModalKeys, ModalProps } from "@/@components/Molecule/Modal/modalMap";

type ModalState = {
  openModal: ModalKeys | null;
  openModalProps: ModalProps | null;
};

const modalState = atom<ModalState>({
  key: "modalState",
  default: {
    openModal: null,
    openModalProps: null,
  },
});

export const useModalState = () => useRecoilState(modalState);
export const useModalValue = () => useRecoilValue(modalState);
