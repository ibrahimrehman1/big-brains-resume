import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Router from "./router";

function App() {
  // Signup Modal
  const [openSignup, setSignupOpen] = useState<boolean>(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  // Login Modal
  const [openLogin, setLoginOpen] = useState<boolean>(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  // Transition to Login or Signup
  const handleTransition = (transitionTo: string) => {
    if (transitionTo === "Login") {
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
      <Router handleLoginOpen={handleLoginOpen} />
    </>
  );
}

export default App;
