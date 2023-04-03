import React, { forwardRef } from "react";

import { InputBase } from "@/@components/Core/Input";

import type { Ref, ChangeEventHandler } from "react";

type UploaderType = "single" | "multiple";

interface BaseUploaderProps {
  mode: UploaderType;
  name: string;
  accept?: string;
  onFileAdd: (name: string, uploadFiles: File[]) => void;
  onValidate: (uploadFiles: File[]) => boolean;
}

const BaseUploader = forwardRef(
  (props: BaseUploaderProps, ref: Ref<HTMLInputElement>) => {
    const { mode, name, accept, onFileAdd, onValidate } = props;

    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
      if (target.files) {
        const { name, files } = target;
        const filesArray = Array.from(files);
        const hasError = onValidate(filesArray);
        if (!hasError) {
          onFileAdd(name, filesArray);
        }
      }
    };

    return (
      <InputBase
        type="file"
        name={name}
        ref={ref}
        onChange={handleChange}
        accept={accept ? accept : undefined}
        multiple={mode === "multiple"}
        style={{ display: "none" }}
      />
    );
  },
);

BaseUploader.displayName = "BaseUploader";

export default BaseUploader;
