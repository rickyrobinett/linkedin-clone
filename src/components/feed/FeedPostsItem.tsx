import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import styled from "styled-components";
import { Post } from "types/post";
import FeedPostsButtons from "./FeedPostsButtons";

interface FeedPostsItemProps {
  post: Post;
}

const FeedPostsItem: React.FC<FeedPostsItemProps> = forwardRef(
  ({ post }, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { photoURL, email, displayName, message } = post;

    return (
      <StyledContainer ref={ref}>
        <StyledHeader>
          <StyledAvatar src={photoURL || undefined}>{email[0]}</StyledAvatar>
          <StyledInfo>
            <StyledName>{displayName}</StyledName>
            <StyledEmail>{email}</StyledEmail>
          </StyledInfo>
        </StyledHeader>
        <StyledBody>
          <StyledMessage>{message}</StyledMessage>
        </StyledBody>
        <FeedPostsButtons />
      </StyledContainer>
    );
  }
);

export default FeedPostsItem;

const StyledContainer = styled.div`
  background-color: white;
  padding: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 0.75rem;
`;

const StyledHeader = styled.div`
  display: flex;
  margin-bottom: 0.75rem;
`;

const StyledAvatar = styled(Avatar)`
  text-transform: capitalize;
`;

const StyledInfo = styled.div`
  margin-left: 0.75rem;
`;

const StyledName = styled.h2`
  font-size: 1rem;
`;

const StyledEmail = styled.p`
  font-size: 0.75rem;
  color: gray;
`;

const StyledBody = styled.body`
  overflow-wrap: anywhere;
  background-color: white;
`;

const StyledMessage = styled.p``;
