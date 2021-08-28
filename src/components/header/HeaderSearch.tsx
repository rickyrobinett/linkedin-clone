import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";

const HeaderSearch = () => {
  return (
    <StyledContainer>
      <SearchIcon />
      <StyledInput placeholder="Search" type="text" />
    </StyledContainer>
  );
};

export default HeaderSearch;

const StyledContainer = styled.div`
  padding: 0.75rem;
  display: flex;
  align-items: center;
  border-radius: 0.25rem;
  height: 2.5rem;
  color: gray;
  background-color: #eef3f8;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background: none;
`;
