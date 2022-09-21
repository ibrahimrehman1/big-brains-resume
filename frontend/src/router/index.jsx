import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import ResumeForm from "../components/ResumeForm.jsx";
import MyDocuments from "../components/MyDocuments.jsx";
import CvForm from "../components/CvForm.jsx";
import CVResumeCarousels from "../components/Templates.jsx";
import EditTemplate from "../components/EditTemplate.jsx";

export default function index({ handleLoginOpen }) {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home handleLoginOpen={handleLoginOpen} />}
        index
      />
      <Route path="/resumeform" element={<ResumeForm />} index />
      <Route path="/cvform" element={<CvForm />} index />
      <Route
        path="/templates"
        element={<CVResumeCarousels handleLoginOpen={handleLoginOpen} />}
        index
      />
      <Route path="/mydocuments" element={<MyDocuments />} index />
      <Route path="/edittemplate/:id" element={<EditTemplate />} index />
    </Routes>
  );
}
