import styled from "styled-components";

interface SidebarRecentsItemProps {
  topic: string;
}

const SidebarRecentsItem: React.FC<SidebarRecentsItemProps> = ({ topic }) => {
  return (
    <StyledContainer>
      <StyledHash>#</StyledHash>
      <StyledTopic>{topic}</StyledTopic>
    </StyledContainer>
  );
};

export default SidebarRecentsItem;

const StyledContainer = styled.div`
  display: flex;
  font-size: 0.813rem;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 0.25rem;
  padding: 0.25rem;

  :hover {
    background-color: whitesmoke;
    border-radius: 0.75rem;
    cursor: pointer;
    color: black;
  }
`;

const StyledHash = styled.span`
  margin-right: 0.75rem;
  margin-left: 0.25rem;
`;

const StyledTopic = styled.p``;
