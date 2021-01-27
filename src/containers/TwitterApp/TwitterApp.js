import React, { useState } from "react";
import styled from "styled-components";
import StickyMenu from "../../components/StickyMenu/StickyMenu";
import ContentBody from "../ContentBody/ContentBody";

const MainContainer = styled.div(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
}));

const TwitterApp = () => {
  const [tweetData, setTweetData] = useState([]);
  const [isInit, setIsInit] = useState(true);
  const [activeHandle, setActiveHandle] = useState("drdisrespect");
  const [isLoading, setIsLoading] = useState(true);

  const getTweetData = async (handle, max_id) => {
    if (handle) {
      setIsLoading(true);
    }
    const fetchHandle = handle ? handle : activeHandle;
    const fetchURL = max_id
      ? "http://localhost:3000/" + fetchHandle + "?max_id=" + max_id
      : "http://localhost:3000/" + fetchHandle;

    await fetch(fetchURL)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          if (handle) {
            setIsLoading(false);
            setTweetData(result);
          } else {
            setIsLoading(false);
            const tweetArr = result.filter((item, key) =>
              key < 1 ? false : true
            );
            setTweetData([...tweetData].concat(tweetArr));
          }
        },
        (error) => {
          setIsLoading(false);
          console.log("ERROR");
          console.log(error);
        }
      );
  };

  const getDocDataInit = () => {
    setActiveHandle("drdisrespect");
    setTweetData([]);
    getTweetData("drdisrespect", null);
  };

  const getSteelersDataInit = () => {
    setActiveHandle("steelers");
    setTweetData([]);
    getTweetData("steelers", null);
  };

  if (isInit) {
    getTweetData(null);
    setIsInit(false);
  }

  return (
    <MainContainer>
      <StickyMenu
        onDocClick={getDocDataInit}
        onSteelersClick={getSteelersDataInit}
      />
      <ContentBody
        tweetData={tweetData}
        loadMore={getTweetData}
        isLoading={isLoading}
      />
    </MainContainer>
  );
};

export default TwitterApp;
