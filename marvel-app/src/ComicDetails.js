import axios from "axios";
import { useState, useEffect, StyleSheet } from "react";
// import styles from "./Component.module.css";
const styles = {
  title: {
    fontSize: "18px",
    color: "blue",
    textAlign: "left",
  },
  body: {
    fontSize: "18px",
    color: "white",
    textAlign: "left",
    border: "1px solid",
    borderColor: "blue",
    padding: "5px",
  },
  bodycontent: {
    border: "1px solid",
    borderColor: "red",
  },
  img: {
    height: "500px",
    margin: "10px",
  },
};
const ComicDetails = ({ comicName, comicURL }) => {
  const [comicDetail, setComicDetail] = useState("");
  useEffect(() => {
    {
      const url =
        comicURL +
        "?ts=100&apikey=57c07708bb14e463126483f2889b35eb&hash=c41cec366ac6c477f37e5a15e5717be2";

      axios
        .get(url)
        .then((response) => {
          console.log("res: ", response);
          setComicDetail(response.data.data.results[0]);
        })
        .catch((error) => {
          console.log("Error marvel: ", error);
        });
    }
  }, []);

  return <ComicCard comicDetail={comicDetail} />;
};

const ComicCard = ({ comicDetail }) => {
  //   console.log("test 2: ", comicDetail);
  let comicCreator = comicDetail.creators.items;
  let comicSeriesName = comicDetail.series.name;
  let comicTitle = comicDetail.title;

  let comicImage = comicDetail.thumbnail.path + ".jpg";
  console.log(comicImage);
  return (
    <div style={{ margin: "20px" }}>
      <h1>Comic Details</h1>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={comicImage} alt="Logo" style={styles.img} />
        <div style={styles.title}>
          <div style={styles.body}>
            <h2>{comicTitle}</h2>
            <h5>Series: {comicSeriesName}</h5>
            {comicCreator.map((comicCreator, keycomicCreator) => (
              <div style={styles.bodycontent}>
                <h5>Creator: {comicCreator.name}</h5>
                <h5>Role: {comicCreator.role}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ComicDetailScreen = ({ comicURL }) => {
  return (
    <div>
      <ComicDetails comicURL={comicURL} />;
    </div>
  );
};

export default ComicDetailScreen;
