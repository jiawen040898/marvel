import axios from "axios";
import { useEffect } from "react";
import ComicDetailScreen from "./ComicDetails";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setHeroComicData, clearComicsData, setComicsData } from "./reducers";

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

function ComicScreen() {
  const heroComic = useSelector((state) => state.marvel.heroComicData);
  const comicsDetailsData = useSelector((state) => state.marvel.comicsData);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const homeScreen = () => {
    navigate("/home");
  };

  const characterScreen = () => {
    navigate("/characterview");
  };
  useEffect(() => {
    HeroComic();
  }, []);

  const HeroComic = () => {
    dispatch(clearComicsData());

    const url =
      "https://gateway.marvel.com/v1/public/characters/1011334?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";
    axios
      .get(url)
      .then((response) => {
        dispatch(setHeroComicData(response.data.data.results[0].comics.items));
        getComisData();
      })
      .catch((error) => {
        console.log("Error marvel: ", error);
      });
  };

  const getComisData = () => {
    heroComic.map((item, index) => {
      let url =
        item.resourceURI +
        "?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";

      console.log("index " + index + " ", url);
      axios
        .get(url)
        .then((response) => {
          dispatch(setComicsData(response.data.data.results[0]));
        })
        .catch((error) => {
          console.log("Error marvel: ", error);
        });
    });
  };

  return (
    <div>
      <div>
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
      </div>
      {comicsDetailsData &&
        comicsDetailsData.map((comicsDetailsData, keyHeroComic) => (
          <ComicDetailScreen comicURL={comicsDetailsData} />
        ))}
    </div>
  );
}

export default ComicScreen;
