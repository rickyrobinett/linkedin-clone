import { TextField } from "@material-ui/core";
import { useField } from "formik";
import styled from "styled-components";

interface TextInputProps {
  name: string;
  placeholder: string;
  type?: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, ...props }) => {
  const [field, { error, touched }] = useField(name);

  return (
    <StyledTextField
      {...field}
      {...props}
      name={name}
      error={!!error && touched}
      helperText={!!error && touched && error}
      variant="outlined"
    />
  );
};

export default TextInput;

const StyledTextField = styled(TextField)`
  &&& {
    width: 20rem;
    height: 3.25rem;
    font-size: 1.25rem;
    margin: 1rem;
    border-radius: 0.25rem;
  }
`;
