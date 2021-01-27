import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Menu = styled.div(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  marginBottom: "0.5rem",
  top: "0",
  height: "3.5rem",
  position: "fixed",
  backgroundColor: "#243447",
}));

const ButtonWrapper = styled.div(({ left }) => ({
  paddingTop: "0.5rem",
  paddingRight: left ? "0.5rem" : "0",
}));

const StickyMenu = ({ onDocClick, onSteelersClick }) => (
  <Menu>
    <ButtonWrapper left={true}>
      <Button variant="contained" color="primary" onClick={onDocClick}>
        DrDisrespect
      </Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button variant="contained" color="primary" onClick={onSteelersClick}>
        Steelers
      </Button>
    </ButtonWrapper>
  </Menu>
);

export default StickyMenu;
