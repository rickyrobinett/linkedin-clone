import InfoIcon from "@material-ui/icons/Info";
import styled from "styled-components";
import WidgetsArticles from "./WidgetsArticles";

const Widgets = () => {
  return (
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>LinkedIn News</StyledTitle>
        <InfoIcon />
      </StyledHeader>
      <WidgetsArticles />
    </StyledContainer>
  );
};

export default Widgets;

const StyledContainer = styled.div`
  position: sticky;
  top: 5rem;
  width: 15rem;
  background-color: white;
  border-radius: 0.75rem;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 0.75rem;
  margin-left: 1.25rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`;
