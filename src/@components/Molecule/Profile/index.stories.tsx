import React from "react";

import Profile from "./index";
import Text from "@/@components/Atoms/Text";

import type { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Molecule/Profile",
  component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = args => (
  <Profile {...args}>
    <Profile.Avartar src="./profile-anonymous.png" />
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.Keywords tags={["피카츄", "야도란"]} />
    </Profile.LeftDetails>
    <Profile.RightDetails>
      {/* <Profile.Name text="anonymous" /> */}
      <Profile.Address text="익선동" />
    </Profile.RightDetails>
  </Profile>
);

export const Default = Template.bind({});
Default.args = { format: "profile" };

export const ProfileView = () => (
  <Profile format="profile">
    <Profile.Avartar src="./profile-anonymous.png" />
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.Address text="서울 역삼 1동" />
    </Profile.LeftDetails>
  </Profile>
);

export const AuthorView = () => (
  <Profile format="author">
    <Profile.Avartar src="./profile-anonymous.png" />
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
  <Profile format="comment">
    <Profile.Avartar src="./profile-anonymous.png" />
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.SubInfo location="수색동" createdAt="4시간 전" />
    </Profile.LeftDetails>
  </Profile>
);

export const FlatView = () => (
  <Profile format="comment">
    <Profile.LeftDetails>
      <Profile.Name text="username" />
      <Profile.SubInfo createdAt="4시간 전" />
    </Profile.LeftDetails>
    <Profile.RightDetails>
      <Profile.SubInfo location="수색동" />
    </Profile.RightDetails>
  </Profile>
);
