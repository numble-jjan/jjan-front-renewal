import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import PlaceHoder from "./index";

export default {
  title: "Molecule/PlaceHoder",
  component: PlaceHoder,
} as ComponentMeta<typeof PlaceHoder>;

const TEMPLATE_MESSAGE = {
  primary: [
    "현재 위치를 받아오지 못했습니다.",
    "지역 검색을 통해 활동지역을 설정해보세요.",
  ],
  secondary: [
    "아직 등록된 게시물이 없습니다.",
    "자유롭게 게시물을 등록해보세요.",
  ],
  third: ["등록된 커뮤니티 활동글이 없습니다.", "글을 작성해보세요."],
};

const Template: ComponentStory<typeof PlaceHoder> = ({ children, ...args }) => (
  <PlaceHoder {...args}>{children}</PlaceHoder>
);

const PrimaryChildren = (
  <>
    {TEMPLATE_MESSAGE.primary.map((message, index) => {
      return <PlaceHoder.Message key={index}>{message}</PlaceHoder.Message>;
    })}
  </>
);

const SecondaryChildren = (
  <>
    <PlaceHoder.Icon></PlaceHoder.Icon>{" "}
    {TEMPLATE_MESSAGE.secondary.map((message, index) => {
      return <PlaceHoder.Message key={index}>{message}</PlaceHoder.Message>;
    })}
  </>
);

const ThirdChildren = (
  <>
    <PlaceHoder.Icon></PlaceHoder.Icon>
    {TEMPLATE_MESSAGE.secondary.map((message, index) => {
      return <PlaceHoder.Message key={index}>{message}</PlaceHoder.Message>;
    })}
    <PlaceHoder.Button text="커뮤니티 글쓰기" />
  </>
);

export const Default = Template.bind({});
Default.args = {
  hasBorder: false,
  children: PrimaryChildren,
};

export const InProfile = Template.bind({});
InProfile.args = {
  hasBorder: true,
  hasPadding: true,
  children: SecondaryChildren,
};

export const InCategory = Template.bind({});
InCategory.args = {
  hasBorder: false,
  children: ThirdChildren,
};
