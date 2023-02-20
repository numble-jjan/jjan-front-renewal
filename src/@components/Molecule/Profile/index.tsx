import Main from "./Main";
import Avartar from "./Avatar";
import RightDetails from "./RightDetails";
import LeftDetails from "./LeftDetails";

import Name from "./Name";
import Address from "./Address";
import Keywords from "./Keywords";
import SubInfo from "./SubInfo";

const Profile = Object.assign(Main, {
  Avartar,
  Name,
  Address,
  Keywords,
  RightDetails,
  LeftDetails,
  SubInfo,
});

export default Profile;
