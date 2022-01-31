import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import cvTemplate1 from "../images/cvTemplate1.jpeg";
import cvTemplate2 from "../images/cvTemplate2.jpeg";
import cvTemplate3 from "../images/cvTemplate3.jpeg";
import { useNavigate } from "react-router-dom";

export var items = [
  {
    path: cvTemplate1,
    id: 1
  },
  {
    path: cvTemplate2,
    id: 2
  },
  {
    path: cvTemplate3,
    id: 3
  },
];


const CVResumeCarousels = ({handleLoginOpen}) => {

  const navigate = useNavigate();

  const navigateToEditTemplate = (id) => {
    let username = localStorage.getItem("username");
    if (username) {
      navigate(`/edittemplate/${id}`);
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
          <a href="#" key={i} onClick={()=>navigateToEditTemplate(item.id)}>
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
