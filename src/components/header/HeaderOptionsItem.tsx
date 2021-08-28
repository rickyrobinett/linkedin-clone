import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import styled from "styled-components";

interface HeaderOptionsItemProps {
  title: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

const HeaderOptionsItem: React.FC<HeaderOptionsItemProps> = ({
  title,
  Icon,
}) => {
  return (
    <StyledContainer>
      <Icon />
      <StyledTitle>{title}</StyledTitle>
    </StyledContainer>
  );
};

export default HeaderOptionsItem;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 1.25rem;
  color: gray;
  cursor: pointer;

  :hover {
    color: black;
  }
`;

const StyledTitle = styled.h3`
  font-size: 0.75rem;
  font-weight: 400;
`;
