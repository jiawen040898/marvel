import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs } from "@mui/material";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./reducers";

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
  card: {
    border: "1px solid",
    boxShadow: "0px 0px 6px 3px  grey",
    margin: "10px",
    width: "300px",
    height: "315px",
    backgroundColor: "black",
  },
  typography: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
};

function CharacterCard() {
  const characters = useSelector((state) => state.marvel.data);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const homeScreen = () => {
    navigate("/home");
  };

  const handleHeroDetails = () => {
    navigate("/comic");
  };
  const characterScreen = () => {
    navigate("/characterview");
  };
  useEffect(() => {
    getCharacters();
  }, []);

  const getCharacters = () => {
    const url =
      "http://gateway.marvel.com/v1/public/characters?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";

    axios
      .get(url)
      .then((response) => {
        if (response != null) {
          dispatch(setData(response.data.data.results));
        }
      })
      .catch((error) => {
        console.log("Error marvel: ", error);
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
      {characters &&
        characters.map((characters, keyCharacters) => {
          let imagePath = characters.thumbnail.path + ".jpg";
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
                style={styles.card}
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
                    style={styles.typography}
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
