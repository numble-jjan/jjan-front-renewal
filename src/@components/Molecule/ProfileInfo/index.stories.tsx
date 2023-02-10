import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import ProfileInfo from "./index";
import Avartar from "../Profile/Avatar";
import Text from "@/@components/Atoms/Text";

import { color, font } from "@/styles/theme";

export default {
  title: "Molecule/ProfileInfo",
  component: ProfileInfo,
} as ComponentMeta<typeof ProfileInfo>;

const Template: ComponentStory<typeof ProfileInfo> = args => (
  <ProfileInfo {...args} />
);

const ProfilePageAvatar = (
  <Avartar src="./profile-anonymous.png" size={"profile"} />
);

const ProfilePageMain = (
  <Text
    color={color.white}
    fontWeight={font.weight.bold}
    fontSize={font.size.title}
  >
    혼술최고야
  </Text>
);

const ProfilePageSub = (
  <Text
    color={color.white}
    fontWeight={font.weight.regular}
    fontSize={font.size.m}
  >
    서울 역삼1동
  </Text>
);

export const Default = Template.bind({});
Default.args = {
  img: ProfilePageAvatar,
  main: ProfilePageMain,
  sub: ProfilePageSub,
};

const PostPageAvatar = (
  <Avartar src="./profile-anonymous.png" size={"author"} />
);

const PostPageMain = (
  <Text
    color={color.black}
    fontWeight={font.weight.bold}
    fontSize={font.size.m}
  >
    혼술최고야
  </Text>
);

const PostPageSub = (
  <Text
    color={color.black}
    fontWeight={font.weight.regular}
    fontSize={font.size.s}
  >
    # 감성적인 # 조용한
  </Text>
);

export const Secondary = Template.bind({});
Secondary.args = {
  img: PostPageAvatar,
  main: PostPageMain,
  sub: PostPageSub,
};
