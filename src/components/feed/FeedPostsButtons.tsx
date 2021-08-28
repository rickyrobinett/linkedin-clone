import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import styled from "styled-components";
import FeedPostsButtonsItem from "./FeedPostsButtonsItem";

const FeedPostsButtons = () => {
  return (
    <StyledContainer>
      <FeedPostsButtonsItem
        title="Like"
        Icon={ThumbUpAltOutlinedIcon}
        color="gray"
      />
      <FeedPostsButtonsItem
        title="Comment"
        Icon={ChatOutlinedIcon}
        color="gray"
      />
      <FeedPostsButtonsItem
        title="Share"
        Icon={ShareOutlinedIcon}
        color="gray"
      />
      <FeedPostsButtonsItem title="Send" Icon={SendOutlinedIcon} color="gray" />
    </StyledContainer>
  );
};

export default FeedPostsButtons;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
