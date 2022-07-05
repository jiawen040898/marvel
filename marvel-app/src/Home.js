import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import "./App.css";
import MarvelImg from "./marvel.jpg";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    height: "700px",
    margin: "auto",
    justifyContent: "center",
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
        <Tabs
          className="tab"
          aria-label="basic tabs example"
          style={styles.tab}
        >
          <h1>MARVEL</h1>

          <Tab label="HOME" onClick={homeScreen} style={styles.tabs} />
          <Tab label="HEROES" onClick={characterScreen} style={styles.tabs} />
        </Tabs>
      </header>
      <div style={styles.img}>
        <LazyLoadImage
          alt="Marvel Image"
          src={MarvelImg}
          style={{ boxShadow: "0px 0px 6px 3px  grey" }}
        />
      </div>
    </div>
  );
}

export default Home;
