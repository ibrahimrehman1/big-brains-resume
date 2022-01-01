import React from "react";
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
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faUser, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'


const style = {
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

const pages = ["CV Templates", "Resume Templates"];

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  // Signup Modal
  const [openSignup, setSignupOpen] = React.useState(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  // Login Modal
  const [openLogin, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  const handleTransition = (transitionTo) =>{
    if (transitionTo == "Login"){
      handleSignupClose();
      handleLoginOpen();
    }else{
      handleLoginClose();
      handleSignupOpen();
    }
  }

  return (
    <AppBar position="static" style={{ background: "#000000" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img
            src={Logo}
            alt="Big Brains Resume Logo"
            width="200px"
            height="auto"
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
                key={page}
                onClick={handleCloseNavMenu}
                style={{
                  backgroundColor: "transparent",
                  color: "white",
                  margin: ".3em",
                  fontWeight: "bold",
                  borderRadius: "20px",
                }}
              >
                {page}
              </Button>
            ))}
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
              }}
            >
              Signup
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
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
      <Modal
        open={openSignup}
        onClose={handleSignupClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Avatar sx={{ bgcolor: deepOrange[500], width: "60px", height: "60px", margin: "auto" }}>
          <FontAwesomeIcon icon={faUser} style={{fontSize: "1.5rem"}}/>
          </Avatar>
          <Typography variant="h4" component="div" gutterBottom>
            Signup
          </Typography>
          <Box
            component="form"
            sx={{
              
              "& > :not(style)": { m: 1, width: "40ch"},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="standard-basic"
              label="First Name"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Last Name"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              required
            />
            <TextField
              id="standard-basic"
              label="Email Address"
              variant="standard"
              type="email"
              required
            />
            <TextField
              id="standard-basic"
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
              required
            />
            <Button
              variant="contained"
              color="success"
              style={{ marginTop: "20px" }}
            >
              Create my Account
            </Button>
            <Button variant="contained" color="warning" type="reset">
              Reset
            </Button>
            <Button variant="contained" color="info" type="button" onClick={()=>handleTransition("Login")}>
              Already have an account? Login
            </Button>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={openLogin}
        onClose={handleLoginClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Avatar sx={{ bgcolor: deepOrange[500], width: "60px", height: "60px", margin: "auto"}}>
          <FontAwesomeIcon icon={faUserAstronaut} style={{fontSize: "1.5rem"}}/>
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
              required
            />
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
              type="password"
              required
            />
            <Button
              variant="contained"
              color="success"
              style={{ marginTop: "20px" }}
            >
              Login
            </Button>
            <Button variant="contained" color="warning" type="reset">
              Reset
            </Button>
            <Button variant="contained" color="info" type="button" onClick={()=>handleTransition("Signup")}>
              Don't have an account? Signup
            </Button>
          </Box>
        </Box>
      </Modal>
    </AppBar>
  );
};

export default Navbar;
