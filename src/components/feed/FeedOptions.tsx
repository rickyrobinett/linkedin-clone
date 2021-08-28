import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import styled from "styled-components";
import FeedOptionsItem from "./FeedOptionsItem";

const FeedOptions = () => {
  return (
    <StyledContainer>
      <FeedOptionsItem title="Photo" Icon={ImageIcon} color="#70b5f9" />
      <FeedOptionsItem title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
      <FeedOptionsItem title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
      <FeedOptionsItem
        title="Write article"
        Icon={CalendarViewDayIcon}
        color="#7FC15E"
      />
    </StyledContainer>
  );
};

export default FeedOptions;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
