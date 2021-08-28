import Image from "next/image";
import styled from "styled-components";
import SidebarInfo from "./SidebarInfo";
import SidebarRecents from "./SidebarRecents";
import SidebarStats from "./SidebarStats";

const Sidebar = () => {
  return (
    <StyledContainer>
      <StyledTop>
        <StyledImageContainer>
          <StyledImage
            src="/images/cover.jpg"
            layout="fill"
            objectFit="cover"
            alt="cover"
          />
        </StyledImageContainer>
        <SidebarInfo />
        <SidebarStats />
      </StyledTop>
      <StyledBottom>
        <SidebarRecents />
      </StyledBottom>
    </StyledContainer>
  );
};

export default Sidebar;

const StyledContainer = styled.div`
  position: sticky;
  top: 5rem;
  width: 15rem;
  text-align: center;
  height: fit-content;
  margin-right: 1.25rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-top-right-radius: 0.75rem;
  border-top-left-radius: 0.75rem;
`;

const StyledImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 3.75rem;
  margin-bottom: -1.25rem;
`;

const StyledImage = styled(Image)`
  &&& {
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }
`;

const StyledBottom = styled.div`
  text-align: left;
  padding: 0.75rem;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 0.75rem;
  margin-top: 0.75rem;
`;
