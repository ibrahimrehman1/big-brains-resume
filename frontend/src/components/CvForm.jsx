import React, {useState} from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CvForm = () => {

  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProjects] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [languages, setLanguages] = useState("");
  const [interests, setInterests] = useState("");
  const [certifications, setCertifications] = useState("");
  const [workExperience, setWorkExperience] = useState("");

  const saveCV = async () => {
    let jsonData = await fetch("http://localhost:5000/resumeform", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({fullName, designation, aboutMe, skills, education, projects, contactDetails, languages, interests, certifications, workExperience})
    })

    let data = await jsonData.json();
    console.log(data);
  }
  
  return (
    <>
      <main style={{ padding: "2em", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem" }}>CV Form</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "60ch" },
          }}
          className="cv-form"
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Ibrahim Rehman"
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={(e)=>setFullName(e.target.value)}

            value={fullName}
            required
            spellCheck={false}
          />

          <TextField
            placeholder="Student"
            id="outlined-basic"
            label="Designation"
            value={designation}
            variant="outlined"
            onChange={(e)=>setDesignation(e.target.value)}


            required
            spellCheck={false}
          />
          <TextField
            placeholder="I am a Undergrad Student..."
            id="outlined-multiline-flexible"
            label="About me"
            onChange={(e)=>setAboutMe(e.target.value)}
            value={aboutMe}
            multiline
            minRows={1}
            required
          />

          <TextField
            placeholder="Python, Java, ..."
            id="outlined-basic"
            label="Skills"
            value={skills}
            variant="outlined"
            onChange={(e)=>setSkills(e.target.value)}
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="Matric, Inter, ..."
            label="Education"
            value={education}
            variant="outlined"
            onChange={(e)=>setEducation(e.target.value)}
           

            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Projects"
            placeholder="Big Brains Resume, Hangman, ..."
            onChange={(e)=>setProjects(e.target.value)}

            variant="outlined"
            value={projects}
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Contact Details"
            placeholder="abc@gmail.com, 123456"
            variant="outlined"
            value={contactDetails}
            onChange={(e)=>setContactDetails(e.target.value)}

            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="English, Urdu, ..."
            label="Languages"
            value={languages}
            variant="outlined"
            onChange={(e)=>setLanguages(e.target.value)}

            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="Reading, Painting, ..."
            label="Interests"
            variant="outlined"
            required
            value={interests}
            onChange={(e)=>setInterests(e.target.value)}
            spellCheck={false}
          />

          <TextField
            id="outlined-basic"
            label="Certifications"
            value={certifications}
            onChange={(e)=>setCertifications(e.target.value)}

            placeholder="Python for Everybody, Cloud Computing 101, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Work Experience"
            value={workExperience}
            onChange={(e)=>setWorkExperience(e.target.value)}

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
              onClick={saveCV}
            >
              Submit
            </Button>
      </main>
    </>
  );
};

export default CvForm;
