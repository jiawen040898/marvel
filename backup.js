import axios from "axios";
import { useState, useEffect, StyleSheet } from "react";
import Card from "@mui/material/Card";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ScrollView } from "@cantonjs/react-scroll-view";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Tab from "@material/react-tab";
import MaterialIcon from "@material/react-material-icon";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Tab, Tabs, TabPanel } from "@mui/material";
import "./App.css";
import MarvelImg from "./marvel.jpg";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const styles = {
  title: {
    color: "red",
    padding: "10px",
    margin: "auto",
    textShadow: "2px 1px 3px white",
  },
  body: {
    fontSize: "18px",
    color: "white",
    textAlign: "left",
    padding: "5px",
  },
  bodycontent: {
    border: "1px solid",
    borderColor: "red",
  },
  img: {
    height: "800px",
    margin: "auto",
    justifyContent: "center",
    textAlign: "center",
    display: "flex",
    margin: "10px",
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

function Home() {
  const navigate = useNavigate();

  const homeScreen = () => {
    navigate("/home");
  };

  const characterScreen = () => {
    navigate("/characterview");
  };
  return (
    <div className="main">
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
      <div style={styles.img}>
        <img src={MarvelImg} alt="Marvel Image" style={{ height: "100%" }} />
      </div>
    </div>
  );
}

export default Home;
