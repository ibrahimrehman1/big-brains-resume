import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FeedbackModal from "./feedbackModal.jsx";

const MyDocuments = () => {
  // Feedback Form
  const [openFeedback, setFeedbackOpen] = useState(false);
  const handleFeedbackOpen = () => setFeedbackOpen(true);
  const handleFeedbackClose = () => setFeedbackOpen(false);
  const [cvForms, setCVForms] = useState([]);
  const [resumeForms, setResumeForms] = useState([]);
  const [resumeTemplates, setResumeTemplates] = useState([]);
  const [cvTemplates, setCVTemplates] = useState([]);

  useEffect(async ()=>{
    let userID = localStorage.getItem("userID");
    let jsonData = await fetch("http://localhost:5000/mydocuments", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({userID})})
    let userData = await jsonData.json();

    console.log(userData);
    setCVForms(userData['userData']['userFormCV'])
    setResumeForms(userData['userData']['userFormResume'])
    setResumeTemplates(userData['userData']['userTemplateResume'])
    setCVTemplates(userData['userData']['userTemplateCV'])
  }, [])
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
