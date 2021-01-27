import React from "react";
import styled from "styled-components";

const MainContainer = styled.div(() => ({
  width: "40rem",
  display: "flex",
  flexDirection: "row",
  color: "white",
  borderLeft: "0.025rem solid #585858",
  borderRight: "0.025rem solid #585858",
}));

const TweetDiv = styled.div(({ idx }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  borderTop: idx < 1 ? "0.025rem solid #585858" : null,
  borderBottom: "0.025rem solid #585858",
  paddingTop: "1rem",
  paddingBottom: "1rem",
}));

const ImageDiv = styled.div(() => ({
  width: "5rem",
  display: "flex",
  flexDirection: "row",
  paddingLeft: "0.875rem",
  paddingRight: "0.875rem",
}));

const TweetTextDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const TopTextDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  alignItems: "center",
}));

const TopTextDivLeft = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingRight: "0.5rem",
  fontWeight: "500",
}));

const TopTextDivRight = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  fontSize: "0.875rem",
  color: "#585858",
}));

const TweetBodyTextDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.25rem",
}));

const TweetThumbnailDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingTop: "0.75rem",
}));

const formatDate = (date) =>
  date.length > 0 ? date.substring(3, date.length - 20) : date;

const createMarkup = (text) => {
  return { __html: text };
};

const Tweet = ({ tweet, idx }) => {
  const id = tweet && tweet.id ? tweet.id : "no id available";
  const text = tweet && tweet.full_text ? tweet.full_text : "no text available";
  const date = tweet && tweet.created_at ? tweet.created_at : "";
  const userName =
    tweet && tweet.user && tweet.user.name
      ? tweet.user.name
      : "no user name available";
  const handle =
    tweet && tweet.user && tweet.user.screen_name
      ? tweet.user.screen_name
      : "no handle available";
  const profileImageURL =
    tweet && tweet.user.profile_image_url_https
      ? tweet.user.profile_image_url_https
      : null;

  // handle the retweet presentation?
  // handle the homepage header content like it looks when you go to Doc's twitter page?

  const mediaURL =
    tweet &&
    tweet.entities &&
    tweet.entities.media &&
    tweet.entities.media.length > 0
      ? tweet.entities.media[0].media_url_https
      : null;

  const mediaHeight = mediaURL
    ? tweet.entities.media[0].sizes.small.h / 1.5
    : null;
  const mediaWidth = mediaURL
    ? tweet.entities.media[0].sizes.small.w / 1.5
    : null;

  return (
    <MainContainer>
      <TweetDiv idx={idx}>
        <ImageDiv>
          <img
            src={profileImageURL}
            alt={"twitterProfilePic"}
            height={"50"}
            width={"50"}
            style={{ borderRadius: "50%" }}
          />
        </ImageDiv>
        <TweetTextDiv>
          <TopTextDiv>
            <TopTextDivLeft>{userName}</TopTextDivLeft>
            <TopTextDivRight>
              @{handle} - {formatDate(date)}
            </TopTextDivRight>
          </TopTextDiv>
          <TweetBodyTextDiv>
            <div dangerouslySetInnerHTML={createMarkup(text)} />
            {mediaURL ? (
              <TweetThumbnailDiv>
                <img
                  src={mediaURL}
                  alt={"contentPic"}
                  style={{ borderRadius: "12px" }}
                  height={mediaHeight}
                  width={mediaWidth}
                />
              </TweetThumbnailDiv>
            ) : null}
          </TweetBodyTextDiv>
        </TweetTextDiv>
      </TweetDiv>
    </MainContainer>
  );
};
export default Tweet;
