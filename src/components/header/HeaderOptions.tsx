import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import styled from "styled-components";
import HeaderOptionsItem from "./HeaderOptionsItem";

const HeaderOptions = () => {
  return (
    <StyledContainer>
      <HeaderOptionsItem title="Home" Icon={HomeIcon} />
      <HeaderOptionsItem title="My Network" Icon={SupervisorAccountIcon} />
      <HeaderOptionsItem title="Jobs" Icon={BusinessCenterIcon} />
      <HeaderOptionsItem title="Messaging" Icon={ChatIcon} />
      <HeaderOptionsItem title="Notifications" Icon={NotificationsIcon} />
    </StyledContainer>
  );
};

export default HeaderOptions;

const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 640px) {
    display: none;
  }
`;
