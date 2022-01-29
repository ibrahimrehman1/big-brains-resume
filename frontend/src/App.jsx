import React from "react";
import Navbar from "./components/Navbar.jsx";
import CVSample from "./images/CV Sample.png";
import CVIcon from "./images/CV Icon.png";
import Button from "@mui/material/Button";
import { Route, Routes, useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import ResumeForm from "./components/ResumeForm.jsx";
import MyDocuments from "./components/MyDocuments.jsx";
import CvForm from "./components/CvForm.jsx";
import CVResumeCarousels from "./components/Templates.jsx";
import EditTemplate from "./components/EditTemplate.jsx";

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

function Homepage({
  handleTransition,
  handleLoginClose,
  handleLoginOpen,
  handleSignupClose,
  handleSignupOpen,
  openLogin,
  openSignup,
}) {
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
        <h4 style={{ fontSize: "1.3rem", fontFamily: "cursive" }}>
          The online resume builder getting folks hired by BBC, Google, Apple,
          Tesla, and Airbnb.
          <br />
          <br />
          Build your brand-new resume in as little as 5 minutes. Try it for
          free.
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
                }}
                onClick={handleOpen}
              >
                Build My Resume/CV
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
                    Select any one of the following options
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
                style={{ fontSize: "2rem", color: "white", marginTop: "50px" }}
              >
                Build Your Resume Fast and Easy.
              </h3>
              <p style={{ fontSize: "1.3rem", color: "white" }}>
                BigBrainResume is lightning fast. There's no software to
                download. No multi-part sign-up form. No long-winded tutorials.
                Just a straightforward process.
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

function App() {
  // Signup Modal
  const [openSignup, setSignupOpen] = React.useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  // Login Modal
  const [openLogin, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleTransition = (transitionTo) => {
    if (transitionTo == "Login") {
      handleSignupClose();
      handleLoginOpen();
    } else {
      handleLoginClose();
      handleSignupOpen();
    }
  };
  return (
    <>
      <Navbar
        handleTransition={handleTransition}
        handleSignupClose={handleSignupClose}
        handleLoginClose={handleLoginClose}
        handleSignupOpen={handleSignupOpen}
        handleLoginOpen={handleLoginOpen}
        openSignup={openSignup}
        openLogin={openLogin}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
              handleTransition={handleTransition}
              handleSignupClose={handleSignupClose}
              handleLoginClose={handleLoginClose}
              handleSignupOpen={handleSignupOpen}
              handleLoginOpen={handleLoginOpen}
              openSignup={openSignup}
              openLogin={openLogin}
            />
          }
          index
        />
        <Route path="/resumeform" element={<ResumeForm />} index />
        <Route path="/cvform" element={<CvForm />} index />
        <Route path="/templates" element={<CVResumeCarousels handleLoginOpen={handleLoginOpen}/>} index />
        <Route path="/mydocuments" element={<MyDocuments />} index />
        <Route path="/edittemplate" element={<EditTemplate />} index />
      </Routes>
    </>
  );
}

export default App;
