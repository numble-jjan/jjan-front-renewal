import Main from "./Main";
import LocationHeader from "./LocationHeader";
import CommunityHeader from "./CommunityHeader";
import Body from "./Body";
import Icon from "./Icon";
import Date from "./Date";
import Bottom from "./Bottom";

const PostBox = Object.assign(Main, {
  Body,
  LocationHeader,
  CommunityHeader,
  Icon,
  Date,
  Bottom,
});

export default PostBox;
