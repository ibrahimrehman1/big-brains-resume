import React from "react";
import CVSample from "../images/CV Sample.png";
import CVIcon from "../images/CV Icon.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

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

export default function Home({ handleLoginOpen }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const navigateToCVForm = () => {
    let username = localStorage.getItem("username");
    if (username) {
      navigate("/cvform");
    } else {
      handleLoginOpen();
    }
  };

  const navigateToResumeForm = () => {
    let username = localStorage.getItem("username");
    if (username) {
      navigate("/resumeform");
    } else {
      handleLoginOpen();
    }
  };
  return (
    <div>
      <main style={{ padding: "2em" }}>
        <h4
          style={{
            fontSize: "1.3rem",
            fontFamily: "Montserrat",
            fontWeight: "bold",
          }}
        >
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
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={CVIcon} height="300px" />
              <Button
                variant="contained"
                size="medium"
                style={{
                  backgroundColor: "#FCA311",
                  color: "black",
                  position: "relative",
                  top: "130px",
                  right: "50px",
                  fontWeight: "bold",
                  borderRadius: "20px",
                  height: "40px",
                  textTransform: "none",
                }}
                onClick={handleOpen}
              >
                Build my resume/CV
              </Button>

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
                  >
                    Select any one of the following options:
                  </Typography>
                  <div style={{ marginTop: "20px" }}>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{
                        backgroundColor: "#FCA311",
                        color: "black",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        height: "40px",
                        margin: "10px",
                        textTransform: "none",
                      }}
                      onClick={navigateToCVForm}
                    >
                      CV Form
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{
                        backgroundColor: "#FCA311",
                        color: "black",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        height: "40px",
                        margin: "10px",
                        textTransform: "none",
                      }}
                      onClick={navigateToResumeForm}
                    >
                      Resume Form
                    </Button>
                    <Button
                      variant="contained"
                      size="medium"
                      style={{
                        backgroundColor: "#FCA311",
                        color: "black",
                        fontWeight: "bold",
                        borderRadius: "20px",
                        height: "40px",
                        margin: "10px",
                        textTransform: "none",
                      }}
                      onClick={() => navigate("/templates")}
                    >
                      Templates
                    </Button>
                  </div>
                </Box>
              </Modal>
            </div>
            <div
              style={{
                textAlign: "center",
                alignItems: "center",
                fontFamily: "cursive",
                padding: "2em",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  color: "white",
                  marginTop: "50px",
                  fontFamily: "Montserrat",
                  fontWeight: "bold",
                }}
              >
                Build your resume fast and easy.
              </h3>
              <p
                style={{
                  fontSize: "1.3rem",
                  color: "white",
                  fontFamily: "Montserrat",
                }}
              >
                BigBrainResume is lightning fast. There&apos;s no software to
                download. No long-winded tutorials. Just a straightforward
                process.
              </p>
            </div>
          </div>
          <img src={CVSample} width="400px" style={{ borderRadius: "20px" }} />
        </div>
      </main>
      <div
        style={{
          width: "98.3vw",
          height: "60vh",
          backgroundColor: "#14213D",
          position: "absolute",
          zIndex: "-1000",
          bottom: "-240px",
          left: "0px",
          right: "0px",
          borderTopLeftRadius: "200px",
        }}
      ></div>
    </div>
  );
}

Home.propTypes = {
  handleLoginOpen: PropTypes.func.isRequired,
}
