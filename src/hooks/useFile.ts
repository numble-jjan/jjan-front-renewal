import { useState, useRef } from "react";
import { isEmptyObj } from "@/utils/empty";

import type { FieldError, FieldValues } from "@/types/form";

type useFileArgs<T extends FieldValues> = {
  initialValues: T;
  validate: (values?: T, files?: File[]) => FieldError;
};

export const useFile = <TFieldValues extends FieldValues>({
  initialValues,
  validate,
}: useFileArgs<TFieldValues>) => {
  const [files, setFiles] = useState<TFieldValues>(initialValues);
  const [errors, setErrors] = useState<FieldError>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleSingleFileAdd = (name: string, uploadFiles: File[]) => {
    setFiles({ ...files, [name]: uploadFiles });
  };

  const handleMultipleFilesAdd = async (name: string, uploadFiles: File[]) => {
    setFiles(prevFiles => {
      return { ...files, [name]: [...prevFiles[name], ...uploadFiles] };
    });
  };

  const handleFileRemove = (name: string, index: number) => {
    const newFiles = [...files[name]];
    newFiles.splice(index, 1);
    setFiles({ ...files, [name]: newFiles });
    setErrors({});
  };

  const runValidator = (uploadFiles: File[]) => {
    const error = validate(files, uploadFiles);
    if (!isEmptyObj(error)) {
      setErrors(error);
      return true;
    }
    setErrors({});
    return false;
  };

  return {
    files,
    errors,
    fileInputRef,
    handleSingleFileAdd,
    handleMultipleFilesAdd,
    handleFileRemove,
    handleClick,
    runValidator,
  };
};
