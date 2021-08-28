import styled from "styled-components";

const SidebarStats = () => {
  return (
    <StyledContainer>
      <StyledStat>
        <StyledLabel>Who viewed you</StyledLabel>
        <StyledCount className="sidebar__statNumber">4,528</StyledCount>
      </StyledStat>
      <StyledStat>
        <StyledLabel>Views on post</StyledLabel>
        <StyledCount className="sidebar__statNumber">4,528</StyledCount>
      </StyledStat>
    </StyledContainer>
  );
};

export default SidebarStats;

const StyledContainer = styled.div`
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.75rem;
  border-top: 1px solid lightgrey;
  background-color: white;
`;

const StyledStat = styled.div`
  margin-top: 0.75rem;
  display: flex;
  justify-content: space-between;

  > p {
    color: gray;
    font-size: 0.813rem;
    font-weight: 600;
  }
`;

const StyledLabel = styled.p``;

const StyledCount = styled.p`
  font-weight: bold;
  color: #0a66c2 !important;
`;
