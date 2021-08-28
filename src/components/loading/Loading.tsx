import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <ClipLoader size={70} />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Loading;

const StyledWrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
