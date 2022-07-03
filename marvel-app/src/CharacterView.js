import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "@mui/material";
import { Link, Router } from "react-router-dom";
import ComicScreen from "./Comic";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TestScreen from "./Test";

function CharacterCard() {
  const navigate = useNavigate();

  const [characters, setCharactersList] = useState({});
  console.log("cha:", characters[0]);
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    const url =
      "http://gateway.marvel.com/v1/public/characters?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";

    axios
      .get(url)
      .then((response) => {
        console.log("haha response", response);
        console.log("characters", response.data.data.results);
        if (response != null) {
          setCharactersList(response.data.data.results);
        }
      })
      .catch((error) => {
        console.log("Error marvel: ", error);
      });
  };

  const handleHeroDetails = () => {
    navigate("/comic");
  };

  return (
    <div>
      <h1
        style={{
          color: "red",
          padding: "10px",
          margin: "auto",
          textShadow: "2px 1px 3px white",
        }}
      >
        MARVEL HEROES
      </h1>
      {characters.map((characters, keyCharacters) => {
        let imagePath = characters.thumbnail.path + ".jpg";
        console.log("imagePath: ", imagePath);
        return (
          <div
            style={{
              justifyContent: "center",
              display: "inline-block",
            }}
          >
            <Card
              sx={{ maxWidth: 345 }}
              variant="outlined"
              style={{
                border: "1px solid",
                boxShadow: "0px 0px 6px 3px  grey",
                margin: "10px",
                width: "300px",
                height: "315px",
              }}
            >
              <CardMedia
                component="img"
                height="210"
                image={imagePath}
                alt="heroes image"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h7"
                  component="div"
                  style={{ fontWeight: "bold" }}
                >
                  {characters.name}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: "right" }}>
                <Button
                  onClick={handleHeroDetails}
                  size="small"
                  style={{ fontWeight: "bold" }}
                >
                  DETAILS
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

export default CharacterCard;
