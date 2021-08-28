import styled from "styled-components";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

interface WidgetsArticlesItemProps {
  title: string;
  subtitle: string;
}

const WidgetsArticlesItem: React.FC<WidgetsArticlesItemProps> = ({
  title,
  subtitle,
}) => {
  return (
    <StyledContainer>
      <StyledLeft>
        <StyledIcon />
      </StyledLeft>
      <StyledRight>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubTitle>{subtitle}</StyledSubTitle>
      </StyledRight>
    </StyledContainer>
  );
};

export default WidgetsArticlesItem;

const StyledContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
  }
`;

const StyledLeft = styled.div`
  color: #0177b7;
  margin-right: 0.5rem;
`;

const StyledIcon = styled(FiberManualRecordIcon)`
  &&& {
    font-size: 0.938rem;
  }
`;

const StyledRight = styled.div`
  flex: 1;
`;

const StyledTitle = styled.h4`
  font-size: 0.875rem;
`;

const StyledSubTitle = styled.p`
  font-size: 0.75rem;
  color: gray;
`;
