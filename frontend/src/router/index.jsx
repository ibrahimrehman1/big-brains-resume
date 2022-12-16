import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ResumeForm from "../components/ResumeForm.tsx";
import MyDocuments from "../components/MyDocuments.tsx";
import CvForm from "../components/CvForm.tsx";
import CVResumeCarousels from "../components/Templates.tsx";
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
