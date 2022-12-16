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
import Button from "./Button";
import User from "../services/user.js";
import PropTypes from "prop-types";

interface Props {
  handleSignupClose: () => void,
  openSignup: boolean,
  handleTransition: (a: string) => void
}


const SignupModal: React.FC<Props> = ({ handleSignupClose, openSignup, handleTransition }) => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const createAccount = async () => {
    if (password === confirmPassword) {
      await User.signup(userName, firstName, lastName, emailAddress, password);
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
            styles={{
              marginTop: "20px",
              textTransform: "none",
              fontWeight: "bold",
            }}
            clickHandler={createAccount}
            text="Create my Account"
          />
            
          {/* <Button variant="contained" color="warning" type="reset" style={{textTransform: "none", fontWeight: "bold"}}>
            Reset
          </Button> */}
          <Button
        
            variant="contained"
            color="info"
            styles={{ textTransform: "none", fontWeight: "bold" }}
            clickHandler={() => handleTransition("Login")}
            text="Already have an account? Login"
          />
            
        </Box>
      </Box>
    </Modal>
  );
};

SignupModal.propTypes = {
  handleSignupClose: PropTypes.func.isRequired,
  openSignup: PropTypes.bool.isRequired,
  handleTransition: PropTypes.func.isRequired,
};

export default SignupModal;
