import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import cvTemplate1 from "../images/cvTemplate1.jpeg";
import cvTemplate2 from "../images/cvTemplate2.jpeg";
import cvTemplate3 from "../images/cvTemplate3.jpeg";
import resumeTemplate1 from "../images/resumeTemplate1.jpeg";
import resumeTemplate2 from "../images/resumeTemplate2.jpeg";
import resumeTemplate3 from "../images/resumeTemplate3.jpeg";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

interface Items {
  path: string,
  id: number
}

export const items: Array<Items> = [
  {
    path: cvTemplate1,
    id: 1,
  },
  {
    path: cvTemplate2,
    id: 2,
  },
  {
    path: cvTemplate3,
    id: 3,
  },
  {
    path: resumeTemplate1,
    id: 4,
  },
  {
    path: resumeTemplate2,
    id: 5,
  },
  {
    path: resumeTemplate3,
    id: 6,
  },
];

interface Props {
  handleLoginOpen: () => void,
}

const CVResumeCarousels: React.FC<Props> = ({ handleLoginOpen }) => {
  const navigate = useNavigate();

  const navigateToEditTemplate = (id) => {
    const username = localStorage.getItem("username");
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
        {items.slice(0, 3).map((item, i) => (
          <a href="#" key={i} onClick={() => navigateToEditTemplate(item.id)}>
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
        {items.slice(3, 6).map((item, i) => (
          <a href="#" key={i} onClick={() => navigateToEditTemplate(item.id)}>
            <Item img={item.path} />
          </a>
        ))}
      </Carousel>
    </main>
  );
};

CVResumeCarousels.propTypes = {
  handleLoginOpen: PropTypes.func.isRequired,
};

interface ItemProps {
  img: string
}

const Item: React.FC<ItemProps> = ({img}) => {
  return (
    <Paper style={{ textAlign: "center", boxShadow: "none" }}>
      <img src={img} width="300" height="350" />
    </Paper>
  );
}

Item.propTypes = {
  img: PropTypes.string.isRequired,
};

export default CVResumeCarousels;
