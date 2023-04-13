import React from "react";
import Profile from "./index";
import Text from "@/@components/Core/Text";
import type { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Profile/Profile",
  component: Profile,
} as Meta<typeof Profile>;

type Story = StoryObj<typeof Profile>;

const imgSrc = "./img-chracter.png";
export const Default: Story = {
  args: {
    variant: "profile",
  },
  render: args => (
    <Profile {...args}>
      <Profile.Avartar src={imgSrc} />
      <Profile.LeftDetails>
        <Profile.Name text="username" />
        <Profile.Keywords tags={["피카츄", "야도란"]} />
      </Profile.LeftDetails>
      <Profile.RightDetails>
        <Profile.Name text="anonymous" />
        <Profile.Address text="익선동" />
      </Profile.RightDetails>
    </Profile>
  ),
};

export const ProfileView: Story = {
  render: () => (
    <Profile variant="profile">
      <Profile.Avartar src={imgSrc} />
      <Profile.LeftDetails>
        <Profile.Name text="username" />
        <Profile.Address text="서울 역삼 1동" />
      </Profile.LeftDetails>
    </Profile>
  ),
};

export const AuthorView: Story = {
  render: () => (
    <Profile variant="author">
      <Profile.Avartar src={imgSrc} />
      <Profile.LeftDetails>
        <Profile.Name text="username" />
        <Profile.Keywords tags={["감성적인", "조용한"]} />
      </Profile.LeftDetails>
      <Profile.RightDetails>
        <Text variant="f4-regular">4시간 전</Text>
      </Profile.RightDetails>
    </Profile>
  ),
};

export const CommentView: Story = {
  render: () => (
    <Profile variant="comment">
      <Profile.Avartar src={imgSrc} />
      <Profile.LeftDetails>
        <Profile.Name text="username" />
        <Profile.SubInfo location="수색동" createdAt="4시간 전" />
      </Profile.LeftDetails>
    </Profile>
  ),
};

export const FlatView: Story = {
  render: () => (
    <Profile variant="comment">
      <Profile.LeftDetails>
        <Profile.Name text="username" />
        <Profile.SubInfo createdAt="4시간 전" />
      </Profile.LeftDetails>
      <Profile.RightDetails>
        <Profile.SubInfo location="수색동" />
      </Profile.RightDetails>
    </Profile>
  ),
};
