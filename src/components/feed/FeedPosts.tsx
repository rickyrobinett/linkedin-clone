import { observer } from "mobx-react-lite";
import FlipMove from "react-flip-move";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStore } from "stores/store";
import styled from "styled-components";
import FeedPostsItem from "./FeedPostsItem";

const FeedPosts = () => {
  const { posts, hasMore, loadMore } = useStore().postStore;

  return (
    <StyledContainer
      id="scrollableDiv"
      style={{
        height: 600,
        overflow: "auto",
      }}
    >
      <InfiniteScroll
        dataLength={posts.length}
        next={loadMore}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <FlipMove>
          {posts.map((post) => (
            <FeedPostsItem key={post.id} post={post} />
          ))}
        </FlipMove>
      </InfiniteScroll>
    </StyledContainer>
  );
};

export default observer(FeedPosts);

const StyledContainer = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;
