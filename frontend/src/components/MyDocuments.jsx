import React, { useState } from "react";
import Button from "@mui/material/Button";
import FeedbackModal from "./feedbackModal.jsx";

const MyDocuments = () => {
  // Feedback Form
  const [openFeedback, setFeedbackOpen] = useState(false);
  const handleFeedbackOpen = () => setFeedbackOpen(true);
  const handleFeedbackClose = () => setFeedbackOpen(false);
  return (
    <>
      <Button
        variant="contained"
        size="large"
        style={{
        backgroundColor: "#FCA311", color: "black",
        margin: ".3em",
        fontWeight: "bold",
        borderRadius: "20px",
        position: "fixed",
        right: 20,
        bottom: 30}}
        onClick={handleFeedbackOpen}
      >
        Feedback
      </Button>
      <FeedbackModal
        openFeedback={openFeedback}
        handleFeedbackClose={handleFeedbackClose}
      />
    </>
  );
};

export default MyDocuments;
