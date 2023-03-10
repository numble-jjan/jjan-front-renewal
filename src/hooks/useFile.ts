import { useState, useRef } from "react";

type FileValidationRule = {
  maxLength: number;
};

type FileOption = {
  mode: "single" | "multiple";
  rule?: FileValidationRule;
};

export const useFile = ({ mode, rule }: FileOption) => {
  const [files, setFiles] = useState<File[]>([]);
  /*
   * 에러의 유무를 단순이 boolean으로 표시하고 있는데 객체 형태로 개별적으로 에러가 존재하는지 확인하면 좋겠음
   */
  const [isError, setIsError] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleAdd = (uploadFiles: File[]) => {
    if (rule) {
      if (!validate(rule, uploadFiles)) {
        return;
      }
    }

    if (mode === "multiple") {
      setFiles(prevFiles => [...prevFiles, ...uploadFiles]);
    } else {
      setFiles(uploadFiles);
    }
    setIsError(false);
  };

  const handleRemove = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  /**
   * 현재 validate 함수를 내부에서 정의해서 사용 중 이를 외부로부터 주입받아 사용하는 방식으로 바꿀 예정
   */
  const validate = (rule: FileValidationRule, uploadFiles: File[]) => {
    if (files.length + uploadFiles.length > rule.maxLength) {
      setIsError(true);
      return false;
    }
    return true;
  };

  return { files, isError, fileInputRef, handleAdd, handleRemove, handleClick };
};
