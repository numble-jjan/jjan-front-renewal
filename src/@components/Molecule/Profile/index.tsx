import Main from "./Main";
import Avartar from "./Avatar";
import Name from "./Name";
import Info from "./Info";
import Sub from "./Sub";

const Profile = Object.assign(Main, {
  Name,
  Avartar,
  Sub,
  Info,
});

export default Profile;
