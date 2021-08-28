import styled from "styled-components";
import CreateIcon from "@material-ui/icons/Create";
import { useRef } from "react";
import { useStore } from "stores/store";
import { toast } from "react-toastify";

const FeedInput = () => {
  const { createPost } = useStore().postStore;
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current?.value || inputRef.current.value === "") {
      return;
    }

    if (inputRef.current.value.length > 500) {
      toast.error("Message is too long. Max 500 characters.");
      return;
    }

    const success = await createPost(inputRef.current.value);

    if (success) {
      inputRef.current.value = "";
    }
  };

  return (
    <StyledContainer>
      <CreateIcon />
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput ref={inputRef} type="text" />
        <button hidden type="submit" />
      </StyledForm>
    </StyledContainer>
  );
};

export default FeedInput;

const StyledContainer = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid lightgray;
  border-radius: 2rem;
  padding: 0.75rem;
  color: gray;
  padding-left: 1rem;
`;

const StyledForm = styled.form`
  flex: 1;
  display: flex;
`;

const StyledInput = styled.input`
  border: none;
  flex: 1;
  margin-left: 0.75rem;
  outline-width: 0;
  font-weight: 600;
`;
