import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import TemplateImage from "../images/CV Sample.png";
import { useNavigate } from "react-router-dom";

const CVResumeCarousels = ({handleLoginOpen}) => {
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

  const navigate = useNavigate();

  const navigateToEditTemplate = () => {
    let username = localStorage.getItem("username");
    if (username) {
      navigate("/edittemplate");
    } else {
      handleLoginOpen();
    }
  };

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
          <a href="#" key={i} onClick={navigateToEditTemplate}>
            <Item img={item.path} />
          </a>
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
          <a href="#" key={i} onClick={navigateToEditTemplate} >
            <Item img={item.path} />
          </a>
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
