import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CvForm = () => {
  return (
    <>
      {" "}
      <main style={{ padding: "2em", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>CV Form</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "80ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Fakhra Aftab"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            required
            spellCheck={false}
          />

          <TextField
            placeholder="Student"
            id="outlined-basic"
            label="Designation"
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            placeholder="I am a Undergrad Student..."
            id="outlined-multiline-flexible"
            label="About me"
            multiline
            minRows={1}
            required
          />

          <TextField
            placeholder="Python, Java, ..."
            id="outlined-basic"
            label="Skills"
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="Matric, Inter, ..."
            label="Detailed Education"
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Projects"
            placeholder="Big Brains Resume, Hangman, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Contact Details"
            placeholder="abc@gmail.com, 123456"
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="English, Urdu, ..."
            label="Languages"
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="Reading, Painting, ..."
            label="Interests"
            variant="outlined"
            required
            spellCheck={false}
          />

          <TextField
            id="outlined-basic"
            label="Certifications"
            placeholder="Python for Everybody, Cloud Computing 101, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Work Experience"
            placeholder="Python for Everybody, Cloud Computing 101, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
        </Box>
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
            >
              Submit
            </Button>
      </main>
    </>
  );
};

export default CvForm;
