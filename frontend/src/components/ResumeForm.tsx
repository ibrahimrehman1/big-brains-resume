import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "./Button";


const ResumeForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [designation, setDesignation] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [projects, setProjects] = useState("");
  const [contactDetails, setContactDetails] = useState("");
  const [languages, setLanguages] = useState("");
  const [interests, setInterests] = useState("");
  const [certifications, setCertifications] = useState("");
  const [saveStatus, setSaveStatus] = useState(false);

  const saveResume = async () => {
    const userID = localStorage.getItem("userID");

    const jsonData = await fetch("http://localhost:5000/resumeform", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID,
        fullName,
        designation,
        summary,
        skills,
        education,
        projects,
        contactDetails,
        languages,
        interests,
        certifications,
      }),
    });

    const data = await jsonData.json();
    // console.log(data);
    if (data.error) {
      alert(data.error);
    } else {
      alert("Resume Form Saved Successfully!");
      setSaveStatus(true);
    }
  };
  return (
    <>
      <main className="p-8 text-center">
        <h1 className="text-5xl font-montserrat">Resume Form</h1>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "60ch" },
          }}
          noValidate
          className="flex-col items-center"
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
            value={designation}
            label="Designation"
            variant="outlined"
            onChange={(e) => setDesignation(e.target.value)}
            required
            spellCheck={false}
          />
          <TextField
            placeholder="I am a Undergrad Student..."
            id="outlined-multiline-flexible"
            label="Summary"
            onChange={(e) => setSummary(e.target.value)}
            value={summary}
            multiline
            minRows={1}
            required
          />

          <TextField
            placeholder="Python, Java, ..."
            id="outlined-basic"
            value={skills}
            label="Skills"
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
          clickHandler={saveResume}
          text="Submit"
        ></Button>
        <div className="flex justify-center">
          {saveStatus ? (
            <div className="mt-24 bg-[#e5e5e5] rounded-2xl w-1/2 flex-col p-9 font-montserrat">
              <label htmlFor="" className="self-start">Full Name</label>
              <input type="text" value={fullName} readOnly className="m-4 ml-0" />
              <label htmlFor="" className="self-start">Designation</label>
              <input type="text" value={designation} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Summary</label>
              <input type="text" value={summary} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Education</label>
              <input type="text" value={education} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Certifications</label>
              <input type="text" value={certifications} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Interests</label>
              <input type="text" value={interests} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Projects</label>
              <input type="text" value={projects} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Contact Details</label>
              <input type="text" value={contactDetails} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Skills</label>
              <input type="text" value={skills} readOnly className="m-4 ml-0"/>
              <label htmlFor="" className="self-start">Languages</label>
              <input type="text" value={languages} readOnly className="m-4 ml-0" />
            </div>
          ) : (
            <h2 className="my-12 mx-0 font-montserrat">No CV/Resume generated</h2>
          )}
        </div>
      </main>
    </>
  );
};

ResumeForm.propTypes = {};

export default ResumeForm;
