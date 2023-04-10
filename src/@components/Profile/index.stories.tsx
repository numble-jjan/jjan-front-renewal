import React from "react";

import Profile from "./index";
import Text from "@/@components/Core/Text";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Profile/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const imgSrc = "./img-chracter.png";

const Template: ComponentStory<typeof Profile> = args => (
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
);

export const Default = Template.bind({});
Default.args = { variant: "profile" };

export const ProfileView = () => (
  <Profile variant="profile">
    <Profile.Avartar src={imgSrc} />
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.Address text="서울 역삼 1동" />
    </Profile.LeftDetails>
  </Profile>
);

export const AuthorView = () => (
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
);

export const CommentView = () => (
  <Profile variant="comment">
    <Profile.Avartar src={imgSrc} />
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.SubInfo location="수색동" createdAt="4시간 전" />
    </Profile.LeftDetails>
  </Profile>
);

export const FlatView = () => (
  <Profile variant="comment">
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.SubInfo createdAt="4시간 전" />
    </Profile.LeftDetails>
    <Profile.RightDetails>
      <Profile.SubInfo location="수색동" />
    </Profile.RightDetails>
  </Profile>
);
