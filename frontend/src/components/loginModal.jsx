import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { style } from "./Navbar.jsx";
import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const LoginModal = ({
  openLogin,
  handleLoginClose,
  handleLoginOpen,
  handleTransition,
}) => {
    
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  

  const handleLogin = async () => {
    let jsonData = await fetch("http://localhost:5000/login", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({
        emailAddress: loginEmail,
        password: loginPassword,
      }),
    });
    let data = await jsonData.json();
    console.log(data);
    if (data.error) {
      alert(data.error);
    } else if (data.status == "Success!") {
      localStorage.setItem("username", data.userName);
      window.location.assign("/");
    }
  };
  return <Modal
  open={openLogin}
  onClose={handleLoginClose}
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
      <FontAwesomeIcon
        icon={faUserAstronaut}
        style={{ fontSize: "1.5rem" }}
      />
    </Avatar>
    <Typography variant="h4" component="div" gutterBottom>
      Login
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
        label="Email Address"
        variant="standard"
        type="email"
        value={loginEmail}
        onChange={(e) => setLoginEmail(e.target.value)}
        required
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        type="password"
        value={loginPassword}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
      />
      <Button
        variant="contained"
        color="success"
        style={{ marginTop: "20px" , textTransform: "none", fontWeight:"bold"}}
        onClick={handleLogin}
      >
        Login
      </Button>
      {/* <Button variant="contained" color="warning" type="reset" style={{textTransform: "none", fontWeight: "bold"}}>
        Reset
      </Button> */}
      <Button
        variant="contained"
        color="info"
        type="button"
        style={{textTransform: "none", fontWeight: "bold"}}
        onClick={() => handleTransition("Signup")}
      >
        Don't have an account? Sign Up
      </Button>
    </Box>
  </Box>
</Modal>;
};

export default LoginModal;