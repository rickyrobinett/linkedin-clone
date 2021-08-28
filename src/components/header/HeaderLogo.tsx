import Image from "next/image";
import styled from "styled-components";

const HeaderLogo = () => {
  return (
    <StyledContainer>
      <Image
        src="/images/logo.svg"
        height={40}
        width={40}
        objectFit="contain"
        alt="logo"
      />
    </StyledContainer>
  );
};

export default HeaderLogo;

const StyledContainer = styled.div`
  margin-right: 0.75rem;
`;
