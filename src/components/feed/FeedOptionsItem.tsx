import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface FeedOptionsItemProps {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  color: string;
}

const FeedOptionsItem: React.FC<FeedOptionsItemProps> = ({
  title,
  Icon,
  color,
}) => {
  return (
    <StyledContainer>
      <Icon style={{ color: color }} />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default FeedOptionsItem;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: gray;
  padding: 0.75rem;
  cursor: pointer;

  :hover {
    background-color: whitesmoke;
    border-radius: 0.75rem;
  }

  @media (max-width: 640px) {
    :nth-child(4) {
      display: none;
    }
  }
`;

const StyledTitle = styled.h4`
  margin-left: 0.25rem;
`;
