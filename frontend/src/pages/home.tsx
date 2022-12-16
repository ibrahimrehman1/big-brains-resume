import React from "react";
import CVSample from "../images/CV Sample.png";
import CVIcon from "../images/CV Icon.png";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import Button from "../components/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  textAlign: "center",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Props {
  handleLoginOpen: () => void;
}

const buttonStyles = {
  backgroundColor: "#FCA311",
  color: "black",
  position: "relative",
  top: "130px",
  right: "50px",
  fontWeight: "bold",
  borderRadius: "20px",
  height: "40px",
  textTransform: "none",
}
export const Home: React.FC<Props> = ({ handleLoginOpen }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const navigateToCVForm = () => {
    const username = localStorage.getItem("username");
    if (username) {
      navigate("/cvform");
    } else {
      handleLoginOpen();
    }
  };

  const navigateToResumeForm = () => {
    const username = localStorage.getItem("username");
    if (username) {
      navigate("/resumeform");
    } else {
      handleLoginOpen();
    }
  };
  return (
    <div>
      <main className="p-8">
        <h4 className="font-montserrat text-xl font-bold">
          The online resume builder is getting folks hired by BBC, Google,
          Apple, Tesla, and Airbnb.
          <br />
          <br />
          Build your brand-new resume in as little as 5 minutes. Try it for
          free!
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="flex-col">
            <div className="flex">
              <img src={CVIcon} height="300px" />
              <Button
                variant="contained"
                size="medium"
                styles={buttonStyles}
                clickHandler={handleOpen}
                text="Build my resume/CV"
              ></Button>

              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    className="font-montserrat"
                  >
                    Select any one of the following options:
                  </Typography>
                  <div className="mt-5">
                    <Button
                      variant="contained"
                      size="medium"
                      styles={buttonStyles}
                      clickHandler={navigateToCVForm}
                      text="Resume Form"
                    ></Button>
                    <Button
                      variant="contained"
                      size="medium"
                      styles={buttonStyles}
                      clickHandler={navigateToResumeForm}
                      text="Resume Form"
                    ></Button>
                    <Button
                      variant="contained"
                      size="medium"
                      styles={buttonStyles}
                      clickHandler={() => navigate("/templates")}
                      text="Templates"
                    ></Button>
                  </div>
                </Box>
              </Modal>
            </div>
            <div className="p-8 font-cursive items-center text-center">
              <h3 className="font-montserrat font-bold mt-12 text-white text-3xl">
                Build your resume fast and easy.
              </h3>
              <p className="text-2xl text-white font-montserrat">
                BigBrainResume is lightning fast. There&apos;s no software to
                download. No long-winded tutorials. Just a straightforward
                process.
              </p>
            </div>
          </div>
          <img src={CVSample} width="400px" className="rounded-2xl" />
        </div>
      </main>
      <div className="w-11/12 left-0 right-0 absolute bg-[#14213D] -z-50 -bottom-60 rounded-t-full h-2/3"></div>
    </div>
  );
};

Home.propTypes = {
  handleLoginOpen: PropTypes.func.isRequired,
};

export default Home;
