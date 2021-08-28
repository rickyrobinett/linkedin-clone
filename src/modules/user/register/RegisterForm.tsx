import FormButton from "components/form/FormButton";
import TextInput from "components/form/TextInput";
import { Form, Formik } from "formik";
import { useStore } from "stores/store";
import styled from "styled-components";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required").max(100, "Name is too long"),
  email: Yup.string()
    .required("Email is required")
    .email("Email is not in the correct format")
    .max(100, "Email is too long"),
  password: Yup.string()
    .required("Password is required")
    .max(100, "Password is too long"),
});

const RegisterForm = () => {
  const { signUpEmail } = useStore().userStore;

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ name: "", email: "", password: "" }}
      onSubmit={({ name, email, password }) => {
        signUpEmail(name, email, password);
      }}
    >
      {({ handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit} autoComplete="off">
          <TextInput name="name" placeholder="Name" />
          <TextInput name="email" placeholder="Email" />
          <TextInput name="password" placeholder="Password" type="password" />
          <FormButton>Sign Up</FormButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;

const StyledForm = styled(Form)`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
