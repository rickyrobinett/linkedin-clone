import Image from "next/image";
import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const Loading = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Image
          src="/images/brand.png"
          height={70}
          width={260}
          objectFit="contain"
          alt="brand"
        />
        <ClipLoader size={70} />
      </StyledContainer>
    </StyledWrapper>
  );
};

export default Loading;

const StyledWrapper = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
