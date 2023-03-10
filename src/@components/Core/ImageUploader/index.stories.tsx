import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import ImageUploader from "./index";
import Text from "@components/Core/Text";

import { useFile } from "@/hooks/useFile";

export default {
  title: "Core/ImageUploader",
  component: ImageUploader,
  argTypes: {},
} as ComponentMeta<typeof ImageUploader>;

const Template: ComponentStory<typeof ImageUploader> = args => {
  const { files, fileInputRef, handleAdd, handleRemove, handleClick } = useFile(
    {
      mode: "single",
    },
  );

  return (
    <>
      <button onClick={handleClick}>click</button>
      {files.length === 0 && (
        <Text variant="f1-regular" lineHeight="1.5">
          파일을 업로드해주세요.
        </Text>
      )}
      {files.length > 0 && (
        <>
          <Text variant="f1-regular" lineHeight="1.5">
            현재 업로드된 파일의 정보는 다음과 같습니다.
          </Text>
          {files.map((file, index) => (
            <>
              <Text variant="f3-regular" lineHeight="1.2">
                name : {file.name}
              </Text>
              <Text variant="f3-regular" lineHeight="1.2">
                type : {file.type}
              </Text>
              <Text variant="f3-regular" lineHeight="1.2">
                size : {file.size}
              </Text>
              <button onClick={() => handleRemove(index)}>delete</button>
            </>
          ))}
        </>
      )}
      <ImageUploader
        {...args}
        fileInputRef={fileInputRef}
        setImage={handleAdd}
      />
    </>
  );
};

export const Default = Template.bind({});
