import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TemplateImage from "../images/CV Sample.png";
import { Link } from "react-router-dom";

const CVResumeCarousels = () => {
  var items = [
    {
      path: TemplateImage,
    },
    {
      path: TemplateImage,
    },
    {
      path: TemplateImage,
    },
    {
      path: TemplateImage,
    },
  ];

  return (
    <main className="templates">
      <h2>CV Templates</h2>
      <Carousel
        NextIcon={<ChevronRightIcon />}
        PrevIcon={<ChevronLeftIcon />}
        stopAutoPlayOnHover={true}
        swipe={true}
      >
        {items.map((item, i) => (
          <Link to="/edittemplate" key={i}>
            <Item img={item.path} />
          </Link>
        ))}
      </Carousel>

      <h2>Resume Templates</h2>
      <Carousel
        NextIcon={<ChevronRightIcon />}
        PrevIcon={<ChevronLeftIcon />}
        stopAutoPlayOnHover={true}
        swipe={true}
      >
        {items.map((item, i) => (
          <Link to="/edittemplate" key={i}>
            <Item img={item.path} />
          </Link>
        ))}
      </Carousel>
    </main>
  );
};

function Item(props) {
  return (
    <Paper style={{ textAlign: "center", boxShadow: "none" }}>
      <img src={props.img} width="300" height="350" />
    </Paper>
  );
}

export default CVResumeCarousels;
