import styled from "styled-components";
import HeaderAvatar from "./HeaderAvatar";
import HeaderLogo from "./HeaderLogo";
import HeaderOptions from "./HeaderOptions";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
  return (
    <StyledContainer>
      <StyledLeft>
        <HeaderLogo />
        <HeaderSearch />
      </StyledLeft>
      <StyledRight>
        <HeaderOptions />
        <HeaderAvatar />
      </StyledRight>
    </StyledContainer>
  );
};

export default Header;

const StyledContainer = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  background-color: white;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding: 0.75rem 0;
  width: 100%;
  z-index: 999;
`;

const StyledLeft = styled.div`
  display: flex;
`;

const StyledRight = styled.div`
  display: flex;
`;
