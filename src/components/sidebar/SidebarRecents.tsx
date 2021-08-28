import styled from "styled-components";
import SidebarRecentsItem from "./SidebarRecentsItem";

const SidebarRecents = () => {
  return (
    <>
      <StyledTitle>Recent</StyledTitle>
      <SidebarRecentsItem topic="reactjs" />
      <SidebarRecentsItem topic="programming" />
      <SidebarRecentsItem topic="softwareengineering" />
      <SidebarRecentsItem topic="developer" />
    </>
  );
};

export default SidebarRecents;

const StyledTitle = styled.p`
  font-size: 0.813rem;
  padding-bottom: 0.75rem;
`;
