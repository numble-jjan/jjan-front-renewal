import React from "react";

import Preview from "../Preview";
import FlexBox from "@/@components/Core/Flexbox";

interface PreviewListProps {
  name: string;
  files: File[];
  onDelete: (name: string, index: number) => void;
}

const PreviewList = ({ name, files, onDelete }: PreviewListProps) => {
  return (
    <FlexBox gap="5px">
      {files.map((file, index) => (
        <React.Fragment key={index}>
          <Preview
            src={URL.createObjectURL(file)}
            onDelete={() => onDelete(name, index)}
          />
        </React.Fragment>
      ))}
    </FlexBox>
  );
};

export default PreviewList;
