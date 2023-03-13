import React from "react";

import Preview from "../Preview";
import { FlexBox } from "@/@components/Core/Flexbox";

interface PreviewListProps {
  files: File[];
  onDelete: (index: number) => void;
}

const PreviewList = ({ files, onDelete }: PreviewListProps) => {
  return (
    <FlexBox gap="5px">
      {files.map((file, index) => (
        <React.Fragment key={index}>
          <Preview
            src={URL.createObjectURL(file)}
            onDelete={() => onDelete(index)}
          />
        </React.Fragment>
      ))}
    </FlexBox>
  );
};

export default PreviewList;
