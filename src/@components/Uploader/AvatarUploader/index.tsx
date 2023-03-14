import React from "react";

import Base from "@/@components/Core/Base";
import Avartar from "@components/Core/Avartar";
import ImageUploader from "@components/Core/ImageUploader";

import { useFile } from "@/hooks/useFile";

const ACCEPTABLE_TYPE = ["image/*"];

const AvatarUploader = () => {
  const { files, fileInputRef, handleAdd, handleClick } = useFile({
    mode: "single",
  });

  return (
    <div onClick={handleClick} style={{ display: "inline-block" }}>
      <Avartar
        src={files.length === 0 ? "" : URL.createObjectURL(files[0])}
        variant="profile"
      />
      <ImageUploader
        mode="single"
        setImage={handleAdd}
        accept={ACCEPTABLE_TYPE}
        fileInputRef={fileInputRef}
      />
    </div>
  );
};

export default AvatarUploader;
