import { Button } from "@material-ui/core";
import styled from "styled-components";

const FormButton: React.FC = ({ children }) => {
  return <StyledButton type="submit">{children}</StyledButton>;
};

export default FormButton;

const StyledButton = styled(Button)`
  &&& {
    width: 20rem;
    height: 3.25rem;
    margin: 1rem;
    border-radius: 0.25rem;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    text-transform: capitalize;
  }
`;
