import axios from "axios";
import { useState, useEffect } from "react";
import ComicDetailScreen from "./ComicDetails";
import Button from "@mui/material/Button";

function ComicScreen() {
  const [heroComic, setHeroComic] = useState("");
  const [comicDetails, setComicDetails] = useState("");
  const [urls, setUrls] = useState("");
  // let imagePath = characters[0].thumbnail.path + ".jpg";
  console.log("setHeroComic: ", heroComic);
  useEffect(() => {
    HeroComic();
  }, []);

  const HeroComic = () => {
    const url =
      "https://gateway.marvel.com/v1/public/characters/1011334?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";
    axios
      .get(url)
      .then((response) => {
        console.log("detail response: ", response);
        // console.log("hero: ", response.data.data.results[0].comics.items[2]);
        setHeroComic(response.data.data.results[0].comics.items);
      })
      .catch((error) => {
        console.log("Error marvel: ", error);
      });
  };

  return (
    <div>
      {/* <ComicDetailScreen resourceURI={url} comicName={heroComic} /> */}
      <h1>hdh</h1>
      {heroComic.map((heroComic, keyHeroComic) => (
        <ComicDetailScreen comicURL={heroComic.resourceURI} />
      ))}
    </div>
  );
}

export default ComicScreen;
