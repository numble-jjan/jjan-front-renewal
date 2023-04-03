import React from "react";

import Avartar from "@components/Core/Avartar";
import BaseUploader from "@/@components/Uploader/BaseUploader";

import { useFile } from "@/hooks/useFile";

import { validateImages } from "@/validation/rule";

import { SUPPORTED_IMAGE_FORMATS } from "@/constants/file";

const initialValues = {
  avatar: [],
};

const AvatarUploader = () => {
  const {
    files,
    fileInputRef,
    handleSingleFileAdd,
    handleClick,
    runValidator,
  } = useFile({
    initialValues,
    validate: validateImages,
  });

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      <Avartar
        src={
          files.avatar.length === 0 ? "" : URL.createObjectURL(files.avatar[0])
        }
        variant="profile"
      />
      <BaseUploader
        ref={fileInputRef}
        mode="single"
        name="avatar"
        onFileAdd={handleSingleFileAdd}
        onValidate={runValidator}
        accept={SUPPORTED_IMAGE_FORMATS.join()}
      />
    </div>
  );
};

export default AvatarUploader;
