import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import BaseUploader from "./index";
import Text from "@components/Core/Text";

import { useFile } from "@/hooks/useFile";
import type { FieldError } from "@/types/form";

export default {
  title: "Uploader/BaseUploader",
  component: BaseUploader,
  argTypes: {},
} as Meta<typeof BaseUploader>;

type Story = StoryObj<typeof BaseUploader>;

const initialValues = {
  example: [] as File[],
};

export const Default: Story = {
  render: () => {
    const {
      files,
      fileInputRef,
      handleSingleFileAdd,
      handleFileRemove,
      runValidator,
      handleClick,
    } = useFile({
      initialValues,
      validate: (values, files) => {
        const errors: FieldError = {};

        /* eslint-disable */
        console.log(values, files);
        return errors;
      },
    });

    return (
      <>
        <button onClick={handleClick}>click</button>
        {files.example.length === 0 && (
          <Text variant="f1-regular" lineHeight="1.5">
            파일을 업로드해주세요.
          </Text>
        )}
        {files.example.length > 0 && (
          <>
            <Text variant="f1-regular" lineHeight="1.5">
              현재 업로드된 파일의 정보는 다음과 같습니다.
            </Text>
            {files.example.map((file, index) => (
              <React.Fragment key={index}>
                <Text variant="f3-regular" lineHeight="1.2">
                  name : {file.name}
                </Text>
                <Text variant="f3-regular" lineHeight="1.2">
                  type : {file.type}
                </Text>
                <Text variant="f3-regular" lineHeight="1.2">
                  size : {file.size.toString()}
                </Text>
                <button onClick={() => handleFileRemove("example", index)}>
                  delete
                </button>
              </React.Fragment>
            ))}
          </>
        )}
        <BaseUploader
          ref={fileInputRef}
          mode="single"
          name="example"
          onFileAdd={handleSingleFileAdd}
          onValidate={runValidator}
        />
      </>
    );
  },
};
