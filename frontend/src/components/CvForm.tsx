import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "./Button";

const CvForm: React.FC = () => {

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
  const [saveStatus, setSaveStatus] = useState(false)

  const saveCV = async () => {
    const userID = localStorage.getItem("userID");
    const jsonData = await fetch("http://localhost:5000/cvform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userID, fullName, designation, aboutMe, skills, education, projects, contactDetails, languages, interests, certifications, workExperience })
    })

    const data = await jsonData.json();
    // console.log(data);
    if (data.error) {
      alert(data.error)
    } else {
      alert("CV Form Saved Successfully!")
      setSaveStatus(true);
    }
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
            onChange={(e) => setFullName(e.target.value)}

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
            onChange={(e) => setDesignation(e.target.value)}


            required
            spellCheck={false}
          />
          <TextField
            placeholder="I am a Undergrad Student..."
            id="outlined-multiline-flexible"
            label="About me"
            onChange={(e) => setAboutMe(e.target.value)}
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
            onChange={(e) => setSkills(e.target.value)}
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="Matric, Inter, ..."
            label="Education"
            value={education}
            variant="outlined"
            onChange={(e) => setEducation(e.target.value)}


            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Projects"
            placeholder="Big Brains Resume, Hangman, ..."
            onChange={(e) => setProjects(e.target.value)}

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
            onChange={(e) => setContactDetails(e.target.value)}

            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            placeholder="English, Urdu, ..."
            label="Languages"
            value={languages}
            variant="outlined"
            onChange={(e) => setLanguages(e.target.value)}

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
            onChange={(e) => setInterests(e.target.value)}
            spellCheck={false}
          />

          <TextField
            id="outlined-basic"
            label="Certifications"
            value={certifications}
            onChange={(e) => setCertifications(e.target.value)}

            placeholder="Python for Everybody, Cloud Computing 101, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
          <TextField
            id="outlined-basic"
            label="Work Experience"
            value={workExperience}
            onChange={(e) => setWorkExperience(e.target.value)}

            placeholder="Python for Everybody, Cloud Computing 101, ..."
            variant="outlined"
            required
            spellCheck={false}
          />
        </Box>
        <Button
          variant="contained"
          size="large"
          styles={{
            backgroundColor: "#FCA311",
            color: "black",
            margin: ".3em",
            fontWeight: "bold",
            borderRadius: "20px",
          }}
          clickHandler={saveCV}
          text="Submit"
        />
        
        <div style={{ display: "flex", justifyContent: "center" }}>

          {saveStatus ? <div className="view-doc">
            <label htmlFor="">Full Name
            </label>
            <input type="text" value={fullName} readOnly/>
            <label htmlFor="">Designation</label>
            <input type="text" value={designation} readOnly/>
            <label htmlFor="">About Me</label>
            <input type="text" value={aboutMe} readOnly/>
            <label htmlFor="">Education</label>
            <input type="text" value={education} readOnly/>
            <label htmlFor="">Certifications</label>
            <input type="text" value={certifications} readOnly/>
            <label htmlFor="">Interests</label>
            <input type="text" value={interests} readOnly/>
            <label htmlFor="">Projects</label>
            <input type="text" value={projects} readOnly/>
            <label htmlFor="">Contact Details</label>
            <input type="text" value={contactDetails} readOnly />
            <label htmlFor="">Skills</label>
            <input type="text" value={skills} readOnly />
            <label htmlFor="">Work Experience</label>
            <input type="text" value={workExperience} readOnly/>
            <label htmlFor="">Languages</label>
            <input type="text" value={languages} readOnly/>
          </div> : <h2 className="heading">No CV/Resume generated</h2>}
        </div>

      </main>
    </>
  );
};

export default CvForm;
