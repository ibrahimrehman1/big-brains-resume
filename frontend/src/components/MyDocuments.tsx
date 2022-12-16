import React, { useEffect, useState } from "react";
import Button from "./Button";
import FeedbackModal from "./feedbackModal";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import cvTemplate3 from "../images/cvTemplate3.jpeg";
import CardMedia from '@mui/material/CardMedia';


const MyDocuments: React.FC = () => {
  // Feedback Form
  const [openFeedback, setFeedbackOpen] = useState<boolean>(false);
  const handleFeedbackOpen = () => setFeedbackOpen(true);
  const handleFeedbackClose = () => setFeedbackOpen(false);
  const [cvForms, setCVForms] = useState([]);
  // const [resumeForms, setResumeForms] = useState([]);
  // const [resumeTemplates, setResumeTemplates] = useState([]);
  // const [cvTemplates, setCVTemplates] = useState([]);

  useEffect(() => {
    (async () => {
      const userID = localStorage.getItem("userID");
      const jsonData = await fetch("http://localhost:5000/mydocuments", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ userID }) })
      const userData = await jsonData.json();
  
      // console.log(userData);
      setCVForms(userData['userData']['userFormCV'])
      // setResumeForms(userData['userData']['userFormResume'])
      // setResumeTemplates(userData['userData']['userTemplateResume'])
      // setCVTemplates(userData['userData']['userTemplateCV'])
    })()
  }, [])
  return (
    <>
    {cvForms.map((cvForm, index)=>{
      return(
      <Card sx={{ maxWidth: 275, margin: "2em", textAlign: "center", padding: "1em" }} key={index}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            CV Form
          </Typography>
          
        </CardContent>
        <CardMedia
        component="img"
        height="194"
        width="100px"
        image={cvTemplate3}
        alt="Paella dish"
        style={{border: "1px solid black"}}
      />
        <CardActions style={{justifyContent: "center"}}>
          <Button size="small" text="Download PDF" />
        </CardActions>
      </Card>)

    })}
      <Button
        variant="contained"
        size="large"
        styles={{
          backgroundColor: "#FCA311", color: "black",
          margin: ".3em",
          fontWeight: "bold",
          borderRadius: "20px",
          position: "fixed",
          right: 20,
          bottom: 30
        }}
        clickHandler={handleFeedbackOpen}
        text="Feedback"
      />
      
      <FeedbackModal
        openFeedback={openFeedback}
        handleFeedbackClose={handleFeedbackClose}
      />
    </>
  );
};

export default MyDocuments;
