import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div(() => ({
  width: "40rem",
  display: "flex",
  flexDirection: "column",
  color: "white",
  borderTop: "0.025rem solid #585858",
  borderLeft: "0.025rem solid #585858",
  borderRight: "0.025rem solid #585858",
}));

const TitleContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
}));

const SpacerDiv = styled.div(() => ({
  width: "5rem",
  display: "flex",
  flexDirection: "row",
  paddingRight: "0.875rem",
}));

const TitleDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
}));

const TopTitleDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  fontSize: "1.25rem",
  fontWeight: "500",
}));

const BottomTitleDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingTop: "0.25rem",
  fontSize: "0.875rem",
  color: "#585858",
}));

const BackgroundImageDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
}));

const ProfileImageDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  marginTop: "-4.5rem",
  paddingBottom: "0.75rem",
  paddingLeft: "1rem",
}));

const TextContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "column",
  paddingTop: "0.75rem",
  paddingBottom: "0.75rem",
  paddingLeft: "1rem",
}));

const UserNameDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingBottom: "0.25rem",
  fontSize: "1.5rem",
  fontWeight: "500",
}));

const HandleDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingBottom: "0.25rem",
  fontSize: "1.25rem",
  color: "#585858",
}));

const DescDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  paddingBottom: "0.25rem",
  paddingTop: "0.5rem",
}));

const DetailsContainer = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: "0.25rem",
  paddingTop: "0.5rem",
}));

const CountDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  color: "white",
  fontWeight: "500",
  paddingRight: "0.5rem",
}));

const CountTextDiv = styled.div(() => ({
  display: "flex",
  flexDirection: "row",
  fontSize: "0.875rem",
  color: "#585858",
  paddingRight: "0.5rem",
}));

const AccountHeader = ({ tweetData }) => {
  const tweet = tweetData[0];
  const userName =
    tweet && tweet.user && tweet.user.name ? tweet.user.name : null;
  const handle =
    tweet && tweet.user && tweet.user.screen_name
      ? tweet.user.screen_name
      : null;
  const desc =
    tweet && tweet.user && tweet.user.description
      ? tweet.user.description
      : null;
  const profileImageURL =
    tweet && tweet.user.profile_image_url_https
      ? tweet.user.profile_image_url_https
      : null;
  const tweetCount =
    tweet && tweet.user && tweet.user.statuses_count
      ? tweet.user.statuses_count
      : null;
  const backgroundImageURL =
    tweet && tweet.user && tweet.user.profile_banner_url
      ? tweet.user.profile_banner_url
      : null;
  const followersCount =
    tweet && tweet.user && tweet.user.followers_count
      ? tweet.user.followers_count
      : null;
  const friendsCount =
    tweet && tweet.user && tweet.user.friends_count
      ? tweet.user.friends_count
      : null;

  return (
    <HeaderContainer>
      <TitleContainer>
        <SpacerDiv />
        <TitleDiv>
          <TopTitleDiv>{userName}</TopTitleDiv>
          <BottomTitleDiv>{tweetCount} Tweets</BottomTitleDiv>
        </TitleDiv>
      </TitleContainer>
      <BackgroundImageDiv>
        <img
          src={backgroundImageURL}
          alt={"backgroundImg"}
          height={"220"}
          width={"640"}
        />
      </BackgroundImageDiv>
      <ProfileImageDiv>
        <img
          src={profileImageURL}
          alt={"twitterProfilePic"}
          height={"125"}
          width={"125"}
          style={{ borderRadius: "50%", border: "0.25rem solid #243447" }}
        />
      </ProfileImageDiv>
      <TextContainer>
        <UserNameDiv>{userName}</UserNameDiv>
        <HandleDiv>@{handle}</HandleDiv>
        <DescDiv>{desc}</DescDiv>
        <DetailsContainer>
          <CountDiv>{friendsCount}</CountDiv>
          <CountTextDiv>Following</CountTextDiv>
          <CountDiv>{followersCount}</CountDiv>
          <CountTextDiv>Followers</CountTextDiv>
        </DetailsContainer>
      </TextContainer>
    </HeaderContainer>
  );
};

export default AccountHeader;
