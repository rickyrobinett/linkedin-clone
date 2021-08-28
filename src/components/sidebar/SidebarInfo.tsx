import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styled from "styled-components";

const SidebarInfo = () => {
  const { user } = useStore().userStore;

  return (
    <>
      <StyledAvatar src={user?.photoURL}>{user?.email[0]}</StyledAvatar>
      <StyledName>{user?.displayName}</StyledName>
      <StyledEmail>{user?.email}</StyledEmail>
    </>
  );
};

export default observer(SidebarInfo);

const StyledAvatar = styled(Avatar)`
  margin-bottom: 0.75rem;
`;

const StyledName = styled.h2`
  font-size: 1.125rem;
`;

const StyledEmail = styled.h4`
  font-size: 0.75rem;
  color: gray;
`;
