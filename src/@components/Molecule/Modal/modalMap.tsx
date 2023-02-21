import ConfirmModal from "./ConfirmModal";
import OptionModal from "./OptionModal";

export const ModalMap = {
  confirm: ConfirmModal,
  option: OptionModal,
};

export type ModalKeys = keyof typeof ModalMap;
export type ModalValues = typeof ModalMap;
export type ModalProps = React.ComponentProps<ModalValues[ModalKeys]>;
