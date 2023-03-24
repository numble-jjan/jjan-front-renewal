import React from "react";

import ImageUploader from "@components/Core/ImageUploader";
import PreviewList from "./PreviewList";
import Select from "./Select";
import FlexBox from "@/@components/Core/Flexbox";

import { useFile } from "@/hooks/useFile";

const ACCEPTABLE_TYPE = ["image/*"];

const PostImageUploader = () => {
  const { files, isError, fileInputRef, handleAdd, handleRemove, handleClick } =
    useFile({ mode: "multiple", rule: { maxLength: 3 } });

  return (
    <FlexBox flexDirection="column" gap="5px">
      <FlexBox flexDirection="row" gap="5px">
        <Select onClick={handleClick} />
        <PreviewList files={files} onDelete={handleRemove} />
      </FlexBox>
      {isError && <p>파일 업로드 중 에러가 발생하였습니다.</p>}
      <ImageUploader
        mode="multiple"
        setImage={handleAdd}
        accept={ACCEPTABLE_TYPE}
        fileInputRef={fileInputRef}
      />
    </FlexBox>
  );
};

export default PostImageUploader;
