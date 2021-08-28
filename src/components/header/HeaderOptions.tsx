import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOptionsItem from "./HeaderOptionsItem";

const HeaderOptions = () => {
  return (
    <>
      <HeaderOptionsItem title="Home" Icon={HomeIcon} />
      <HeaderOptionsItem title="My Network" Icon={SupervisorAccountIcon} />
      <HeaderOptionsItem title="Jobs" Icon={BusinessCenterIcon} />
      <HeaderOptionsItem title="Messaging" Icon={ChatIcon} />
      <HeaderOptionsItem title="Notifications" Icon={NotificationsIcon} />
    </>
  );
};

export default HeaderOptions;
