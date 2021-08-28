import Header from "components/header/Header";
import styled from "styled-components";

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <Header />
      <StyledBody>{children}</StyledBody>
    </StyledContainer>
  );
};

export default DefaultLayout;

const StyledContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledBody = styled.div`
  flex: 1;
  margin-top: 2.25rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  width: 100%;
  max-width: 75rem;
`;
