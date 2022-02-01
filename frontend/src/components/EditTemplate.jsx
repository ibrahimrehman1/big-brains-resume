import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./Templates.jsx";
import alignCenter from "../images/align-center.png";
import bold from "../images/bold.png";
import change from "../images/change.png";
import download from "../images/download.png";
import italics from "../images/italics.png";
import justification from "../images/justification.png";
import leftAlign from "../images/left-align.png";
import printer from "../images/printer.png";
import redo from "../images/redo.png";
import rightAlign from "../images/right-align.png";
import textFont from "../images/text-font.png";
import underline from "../images/underline.png";

const EditTemplate = () => {
  const params = useParams();
  const [imagePath, setImagePath] = useState("");
  useEffect(() => {
    items.forEach((val, index) => {
      if (val["id"] == params.id) {
        setImagePath(val.path);
      }
    });
  }, []);

  return (
    <>
      <div className="edit-template">
        <div className="toolbar">
          <img src={textFont} alt="" />
          <label>Fonts</label>
          <img
            src={redo}
            alt=""
            style={{ transform: "rotate(-180deg)", marginTop: "8px" }}
          />
          <label>Undo</label>
          <img src={redo} alt="" />
          <label>Redo</label>
          <img src={printer} alt="" />
          <label>Print</label>
          <img src={download} alt="" />
          <label>Download</label>
        </div>
        <div className="small-toolbar">
          <img src={bold} alt="" />
          <img src={italics} alt="" />
          <img src={underline} alt="" />
          <img src={rightAlign} alt="" />
          <img src={alignCenter} alt="" />
          <img src={leftAlign} alt="" />
        </div>
        <Link to="/mydocuments" className="my-doc-btn-link">
          <button className="my-doc-btn">My Documents</button>
        </Link>
        <div className="cv-templates">
          <dialog open contentEditable className={params.id == 1 ? "fullName1" : params.id == 2 ? "fullName2" : "fullName3"} spellCheck="false"></dialog>
          <dialog open contentEditable className={params.id == 1 ? "aboutMe1" : params.id == 2 ? "aboutMe2" : "aboutMe3"} spellCheck="false"></dialog>
          <dialog open contentEditable className={params.id == 1 ? "workExperience1" : params.id == 2 ? "workExperience2" : "workExperience3"} spellCheck="false"></dialog>
          <dialog open contentEditable className={params.id == 1 ? "personalInfo1" : params.id == 2 ? "personalInfo2" : "personalInfo3"} spellCheck="false"></dialog>
          <dialog
            open
            contentEditable
            className={params.id == 1 ? "certification-projects1" : params.id == 2 ? "certification-projects2" : "certification-projects3"} spellCheck="false"
          ></dialog>
          {params.id == 2 ? <dialog open
            contentEditable
            className="extra-certification-projects2"></dialog> : ""}
          <dialog open contentEditable className={params.id == 1 ? "skills1" : params.id == 2 ? "skills2" : "skills3"} spellCheck="false"></dialog>
          <dialog open contentEditable className={params.id == 1 ? "interests1" : params.id == 2 ? "interests2" : "interests3"} spellCheck="false"></dialog>
          <dialog open contentEditable className={params.id == 1 ? "education1" : params.id == 2 ? "education2" : "education3"} spellCheck="false"></dialog>
          <img src={imagePath} width="80%" style={{ marginTop: "50px" }} />
        </div>
      </div>
    </>
  );
};
export default EditTemplate;
