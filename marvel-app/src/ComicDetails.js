import Card from "@mui/material/Card";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

const styles = {
  title: {
    textAlign: "left",
    color: "white",
  },
  body: {
    fontSize: "18px",
    color: "white",
    textAlign: "left",
    padding: "5px",
  },
  img: {
    height: "500px",
    margin: "10px",
    boxShadow: "0px 3px 10px 3px  red",
  },
  creator: {
    overflowX: "scroll",
    maxheight: "300px",
    position: "relative",
    height: "200px",
    display: "flex",
    flexDirection: "column",
  },
  accordianDetail: {
    overflowY: "scroll",
    position: "relative",
    height: "150px",
    display: "flex",
    flexDirection: "column",
  },
  card: {
    boxShadow: "0px 0px 6px 3px  blue",
    margin: "10px",
    padding: "10px",
    display: "inline-block",
    backgroundColor: "black",
    width: "400px",
  },
};
const ComicDetails = ({ comicURL }) => {
  return <ComicCard comicDetail={{ comicDetail: comicURL }} />;
};

const ComicCard = ({ comicDetail }) => {
  let comicSeriesName = comicDetail.comicDetail.series.name;
  let comicCreator = comicDetail.comicDetail.creators.items;
  let comicSaleDate = comicDetail.comicDetail.dates[0].date.split("T")[0];
  let comicTitle = comicDetail.comicDetail.title;
  let comicImage = comicDetail.comicDetail.thumbnail.path + ".jpg";
  let comicDescription = comicDetail.comicDetail.description;

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={comicImage} alt="Logo" style={styles.img} />
        <Card
          variant="outlined"
          sx={{ maxWidth: "500px", maxHeight: "500px" }}
          style={styles.card}
        >
          <CardActions disableSpacing>
            <div style={styles.title}>
              <Typography style={{ color: "white" }}>
                <h2>{comicTitle}</h2>
                <h5>Series: {comicSeriesName}</h5>
                <h5>On Sale Date: {comicSaleDate}</h5>
                <h5>Description: </h5>
                <h5>{comicDescription}</h5>
              </Typography>
              <Accordion style={{ marginBottom: "10px" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                >
                  <Typography>More Info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div style={styles.accordianDetail}>
                    <h3>Creator: </h3>
                    {comicCreator &&
                      comicCreator.map((comicCreator, keycomicCreator) => {
                        let creatorRole =
                          comicCreator.role.charAt(0).toUpperCase() +
                          comicCreator.role.slice(1);
                        return (
                          <div>
                            {creatorRole}: {comicCreator.name}
                          </div>
                        );
                      })}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </CardActions>
        </Card>
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
