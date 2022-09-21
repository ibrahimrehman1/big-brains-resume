import React from 'react'
import { Route, Routes } from "react-router-dom";
import {Homepage} from '../App';
import ResumeForm from "../components/ResumeForm.jsx";
import MyDocuments from "../components/MyDocuments.jsx";
import CvForm from "../components/CvForm.jsx";
import CVResumeCarousels from "../components/Templates.jsx";
import EditTemplate from "../components/EditTemplate.jsx";

export default function index({openLogin, openSignup, handleLoginClose, handleLoginOpen, handleSignupClose, handleTransition, handleSignupOpen}) {
  return (
    <Routes>
        <Route
          path="/"
          element={
            <Homepage
              handleTransition={handleTransition}
              handleSignupClose={handleSignupClose}
              handleLoginClose={handleLoginClose}
              handleSignupOpen={handleSignupOpen}
              handleLoginOpen={handleLoginOpen}
              openSignup={openSignup}
              openLogin={openLogin}
            />
          }
          index
        />
        <Route path="/resumeform" element={<ResumeForm />} index />
        <Route path="/cvform" element={<CvForm />} index />
        <Route path="/templates" element={<CVResumeCarousels handleLoginOpen={handleLoginOpen}/>} index />
        <Route path="/mydocuments" element={<MyDocuments />} index />
        <Route path="/edittemplate/:id" element={<EditTemplate />} index />
      </Routes>
  )
}
