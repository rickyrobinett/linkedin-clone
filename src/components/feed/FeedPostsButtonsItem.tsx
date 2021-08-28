import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface FeedPostsButtonsItemProps {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  color: string;
}

const FeedPostsButtonsItem: React.FC<FeedPostsButtonsItemProps> = ({
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

export default FeedPostsButtonsItem;

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
    :nth-child(3) {
      display: none;
    }
  }
`;

const StyledTitle = styled.h4`
  margin-left: 0.25rem;
`;
