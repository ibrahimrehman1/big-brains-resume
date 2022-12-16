import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import ResumeForm from "../components/ResumeForm";
import MyDocuments from "../components/MyDocuments";
import CvForm from "../components/CvForm";
import CVResumeCarousels from "../components/Templates";
import EditTemplate from "../components/EditTemplate";

interface Props {
  handleLoginOpen: () => void,
}

const Router: React.FC<Props> = ({ handleLoginOpen }) => {
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

export default Router;