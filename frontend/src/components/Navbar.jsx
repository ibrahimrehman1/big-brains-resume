import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/logo.PNG";
import { useNavigate } from "react-router-dom";
import "../app.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupModal from "./SignupModal.jsx";
import LoginModal from "./LoginModal.jsx";
import User from "../services/user.js";
import PropTypes from "prop-types";

export const style = {
  position: "absolute",
  height: "70ch",
  overflow: "scroll",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const pages = [
  { key: "CV Templates", name: "templates" },
  { key: "Resume Templates", name: "templates" },
];

const Navbar = ({
  handleTransition,
  handleLoginClose,
  handleLoginOpen,
  handleSignupClose,
  handleSignupOpen,
  openLogin,
  openSignup,
}) => {
  const username = localStorage.getItem("username");
  console.log(username);
  const [anchorElNav, setAnchorElNav] = useState(null);
  // const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const navigate = useNavigate();

  const logout = async () => {
    await User.logout();
  };

  const navbarLinksNavigation = (link) => {
    if (link === "templates") {
      navigate("/templates");
    }
  };

  return (
    <AppBar
      position="static"
      style={{ background: "#000000" }}
      className="navbar"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Big Brains Resume Logo"
            width="200px"
            height="auto"
            onClick={() => navigate("/")}
            className="navbar-logo"
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.key} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.key}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="flex-end"
          >
            {pages.map((page) => (
              <Button
                variant="contained"
                size="medium"
                key={page.key}
                onClick={() => navbarLinksNavigation(page.name)}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  margin: ".3em",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                {page.key}
              </Button>
            ))}
            {username ? (
              <>
                {/* <h3 style={{color: "#FCA311"}}>{username}</h3> */}
                <Dropdown>
                  <Dropdown.Toggle variant="warning" id="dropdown-basic">
                    {username}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" onClick={logout}>
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={handleSignupOpen}
                  style={{
                    backgroundColor: "#FCA311",
                    color: "black",
                    margin: ".3em",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  Sign Up
                </Button>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={handleLoginOpen}
                  style={{
                    backgroundColor: "#FCA311",
                    color: "black",
                    margin: ".3em",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                >
                  Login
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>

      <SignupModal
        handleTransition={handleTransition}
        handleSignupClose={handleSignupClose}
        openSignup={openSignup}
      />
      <LoginModal
        handleTransition={handleTransition}
        handleLoginClose={handleLoginClose}
        openLogin={openLogin}
      />
    </AppBar>
  );
};



Navbar.propTypes = {
  handleTransition: PropTypes.func.isRequired,
  handleLoginClose: PropTypes.func.isRequired,
  handleLoginOpen: PropTypes.func.isRequired,
  handleSignupClose: PropTypes.func.isRequired,
  handleSignupOpen: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
  openSignup: PropTypes.func.isRequired,
}

export default Navbar;
