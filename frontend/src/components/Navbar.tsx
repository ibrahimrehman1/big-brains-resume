import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "./Button";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import "../app.css";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SignupModal from "./SignupModal";
import LoginModal from "./LoginModal";
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

interface Page {
  key: string,
  name: string
}

const pages: Array<Page> = [
  { key: "CV Templates", name: "templates" },
  { key: "Resume Templates", name: "templates" },
];

interface Props {
  handleTransition: (a: string) => void,
  handleLoginClose: () => void,
  handleLoginOpen: () => void,
  handleSignupClose: () => void,
  handleSignupOpen: () => void,
  openLogin: boolean,
  openSignup: boolean,
}


const Navbar: React.FC<Props> = ({
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
                clickHandler={() => navbarLinksNavigation(page.name)}
                styles={{
                  backgroundColor: "transparent",
                  color: "white",
                  margin: ".3em",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
                text={page.key}
              />
              
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
                  clickHandler={handleSignupOpen}
                  styles={{
                    backgroundColor: "#FCA311",
                    color: "black",
                    margin: ".3em",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                  text="Sign Up"
                />
                
                <Button
                  variant="contained"
                  size="medium"
                  clickHandler={handleLoginOpen}
                  styles={{
                    backgroundColor: "#FCA311",
                    color: "black",
                    margin: ".3em",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    textTransform: "none",
                  }}
                  text="Login"
                />
                
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
  openLogin: PropTypes.bool.isRequired,
  openSignup: PropTypes.bool.isRequired,
}

export default Navbar;
