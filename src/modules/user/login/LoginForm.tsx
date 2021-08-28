import FormButton from "components/form/FormButton";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { useStore } from "stores/store";
import styled from "styled-components";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Email is not in the correct format")
    .max(100, "Email is too long"),
  password: Yup.string()
    .required("Password is required")
    .max(100, "Password is too long"),
});

const LoginForm = () => {
  const { signInEmail } = useStore().userStore;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ email: "", password: "" }}
      onSubmit={({ email, password }) => signInEmail(email, password)}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <TextInput name="email" placeholder="Email" />
          <TextInput name="password" placeholder="Password" type="password" />
          <FormButton>Sign In</FormButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;

const StyledForm = styled(Form)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
