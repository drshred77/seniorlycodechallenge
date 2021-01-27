import React from "react";
import styled from "styled-components";
import Tweet from "../../components/Tweet/Tweet";
import AccountHeader from "../../components/AccountHeader/AccountHeader";
import { CircularProgress } from "@material-ui/core";

const ContentContainer = styled.div(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#243447",
  marginTop: "3.5rem",
  paddingTop: "1.5rem",
  overflow: "auto",
}));

const ContentBody = ({ tweetData, loadMore, isLoading }) => {
  const lastTweetId =
    tweetData[tweetData.length - 1] && tweetData[tweetData.length - 1].id
      ? tweetData[tweetData.length - 1].id
      : null;

  const handleScroll = (evt) =>
    evt.target.scrollHeight - evt.target.scrollTop === evt.target.clientHeight
      ? loadMore(null, lastTweetId)
      : null;

  return (
    <ContentContainer onScroll={handleScroll}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <div>
          <AccountHeader tweetData={tweetData} />
          {tweetData.map((item, key) => (
            <Tweet key={key} tweet={item} idx={key} />
          ))}
        </div>
      )}
    </ContentContainer>
  );
};

export default ContentBody;
