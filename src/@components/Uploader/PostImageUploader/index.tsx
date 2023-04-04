import React from "react";

import FlexBox from "@/@components/Core/Flexbox";
import PreviewList from "./PreviewList";
import BaseUploader from "@/@components/Uploader/BaseUploader";
import ImageSelectButton from "./ImageSelectButton";

import { useFile } from "@/hooks/useFile";

import { validateImages } from "@/validation/rule";

import { SUPPORTED_IMAGE_FORMATS } from "@/constants/file";

const initialValues = {
  postImages: [],
};

const PostImageUploader = () => {
  const {
    files,
    errors,
    fileInputRef,
    handleMultipleFilesAdd,
    handleFileRemove,
    handleClick,
    runValidator,
  } = useFile({
    initialValues,
    validate: validateImages,
  });

  const hasError = errors;
  const errorMessage = errors?.message;

  return (
    <FlexBox flexDirection="column" gap="5px">
      <FlexBox flexDirection="row" gap="5px">
        <ImageSelectButton onClick={handleClick} />
        <PreviewList
          name="postImages"
          files={files.postImages}
          onDelete={handleFileRemove}
        />
      </FlexBox>
      {hasError && <p>{errorMessage}</p>}
      <BaseUploader
        mode="multiple"
        name="postImages"
        onFileAdd={handleMultipleFilesAdd}
        onValidate={runValidator}
        accept={SUPPORTED_IMAGE_FORMATS.join()}
        ref={fileInputRef}
      />
    </FlexBox>
  );
};

export default PostImageUploader;
