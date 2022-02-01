import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import Tooltip from "@mui/material/Tooltip";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const style = {
  position: "absolute",
  height: "60ch",
  overflow: "scroll",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FeedbackModal = ({ openFeedback, handleFeedbackClose }) => {
  const [selectedEmoji, selectOneEmoji] = useState(0);
  const EmojisNames = ["Happy", "Angry"];
  const [comments, setComments] = useState("");
  const saveFeedback = async () => {
    let userID = localStorage.getItem("userID");
    let jsonRes = await fetch("http://localhost:5000/feedback", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify({ emojis: EmojisNames[selectedEmoji], comments, userID }),
    });
    let data = await jsonRes.json();
    console.log(data);
    if (data.error){
      alert(data.error)
    }else{
      window.location.assign("/")
    }
  };

  return (
    <Modal
      open={openFeedback}
      onClose={handleFeedbackClose}
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
          <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: "1.5rem" }} />
        </Avatar>
        <Typography variant="h4" component="div" gutterBottom>
          Feedback
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <h5 style={{ textAlign: "center" }}>Happy with our Service?</h5>
          <Tooltip title="Happy">
            <EmojiEmotionsIcon
              fontSize="large"
              color="warning"
              className="emojis"
              onClick={() => selectOneEmoji(0)}
            />
          </Tooltip>
          <Tooltip title="Angry">
            <SentimentDissatisfiedIcon
              fontSize="large"
              color="warning"
              className="emojis"
              onClick={() => selectOneEmoji(1)}
            />
          </Tooltip>
          <br />

          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="How can we make our application better?"
            style={{ width: "100%" }}
          />

          <Button
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#FCA311",
              color: "black",
              margin: ".3em",
              fontWeight: "bold",
              borderRadius: "20px",
            }}
            onClick={saveFeedback}
          >
            Submit Feedback
          </Button>

        </Box>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;
