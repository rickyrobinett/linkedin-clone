import styled from "styled-components";
import FeedInput from "./FeedInput";
import FeedOptions from "./FeedOptions";
import FeedPosts from "./FeedPosts";

const Feed = () => {
  return (
    <StyledContainer>
      <StyledTop>
        <FeedInput />
        <FeedOptions />
      </StyledTop>
      <FeedPosts />
    </StyledContainer>
  );
};

export default Feed;

const StyledContainer = styled.div`
  flex: 1;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

const StyledTop = styled.div`
  background-color: white;
  padding: 0.75rem;
  padding-bottom: 1.25rem;
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: column;
`;
