import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { style } from "./Navbar.jsx";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const SignupModal = ({
  handleSignupClose,
  openSignup,
  handleTransition,
}) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const createAccount = async () => {
    if (password === confirmPassword) {
      let jsonData = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName,
          firstName,
          lastName,
          emailAddress,
          password,
        }),
      });

      let data = await jsonData.json();
      if (data.error) {
        alert(data.error);
      } else if (data.status == "Success!") {
        localStorage.setItem("username", data.userName);
        localStorage.setItem("userID", data.userID);
        window.location.assign("/");
      }
    } else {
      alert("Password does not Match!");
    }
  };
  return (
    <Modal
      open={openSignup}
      onClose={handleSignupClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar
          sx={{
            bgcolor: deepOrange[500],
            width: "60px",
            height: "60px",
            margin: "auto",
          }}
        >
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.5rem" }} />
        </Avatar>
        <Typography variant="h4" component="div" gutterBottom>
          Sign Up
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "40ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="First Name"
            variant="standard"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="standard"
            required
          />
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <TextField
            id="standard-basic"
            label="Email Address"
            variant="standard"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
            required
          />
          <TextField
            id="standard-basic"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="standard"
            type="password"
            required
          />
          <TextField
            id="standard-basic"
            label="Confirm Password"
            variant="standard"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="success"
            style={{ marginTop: "20px", textTransform: "none" , fontWeight: "bold"}}
            onClick={createAccount}
          >
            Create my Account
          </Button>
          {/* <Button variant="contained" color="warning" type="reset" style={{textTransform: "none", fontWeight: "bold"}}>
            Reset
          </Button> */}
          <Button
            variant="contained"
            color="info"
            type="button"
            style={{ textTransform: "none", fontWeight: "bold"}}
            onClick={() => handleTransition("Login")}
          >
            Already have an account? Login
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignupModal;
