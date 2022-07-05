import "./App.css";
import axios from "axios";
import { Component, useEffect } from "react";
import { useState } from "react";
import CharacterCard from "./CharacterView";
import ComicScreen from "./Comic";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Home from "./Home";
import { Tab, Tabs } from "@mui/material";
// import "./App.css";

const hash = "c41cec366ac6c477f37e5a15e5717be2";
const styles = {
  title: {
    color: "red",
    padding: "10px",
    margin: "auto",
    textShadow: "2px 1px 3px white",
  },
  tab: {
    justifyItems: "center",
    cursor: "pointer",
  },
  tabs: {
    color: "white",
    fontWeight: "bold",
  },
};
const App = () => {
  const navigate = useNavigate();

  const homeScreen = () => {
    navigate("/characterview");
  };

  const characterScreen = () => {
    navigate("/characterview");
  };
  return (
    <div className="App">
      <header className="header">
        <h1>MARVEL</h1>
        <Tabs
          className="tab"
          aria-label="basic tabs example"
          style={styles.tab}
        >
          <Tab label="HOME" onClick={homeScreen} style={styles.tabs} />
          <Tab label="HEROES" onClick={characterScreen} style={styles.tabs} />
        </Tabs>
      </header>
    </div>
  );
};

export default App;
