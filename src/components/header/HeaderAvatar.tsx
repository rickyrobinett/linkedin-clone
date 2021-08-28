import { Avatar } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { useStore } from "stores/store";
import styled from "styled-components";

const HeaderOptionsItem = () => {
  const { user, signOut } = useStore().userStore;

  return (
    <StyledContainer onClick={signOut}>
      <StyledAvatar src={user?.photoURL || undefined} alt="avatar">
        {user?.email[0]}
      </StyledAvatar>
      <StyledTitle>Me</StyledTitle>
    </StyledContainer>
  );
};

export default observer(HeaderOptionsItem);

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.25rem;
  color: gray;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const StyledAvatar = styled(Avatar)`
  &&& {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const StyledTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 400;
`;
