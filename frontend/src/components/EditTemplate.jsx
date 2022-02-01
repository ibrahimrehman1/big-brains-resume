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
import Tooltip from "@mui/material/Tooltip";

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

  const boldText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    let boldStatus = selectedDialog.style.fontWeight;
    if (boldStatus == "bold") {
      selectedDialog.style.fontWeight = "100";
    } else {
      selectedDialog.style.fontWeight = "bold";
    }
  };

  const underlineText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    let underlineStatus = selectedDialog.style.textDecoration;
    if (underlineStatus.length && underlineStatus == "underline") {
      selectedDialog.style.textDecoration = "none";
    } else {
      selectedDialog.style.textDecoration = "underline";
    }
  };

  const leftAlignText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    selectedDialog.style.textAlign = "left";
    
  };

  const centerAlignText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    selectedDialog.style.textAlign = "center";
    
  };
  const rightAlignText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    selectedDialog.style.textAlign = "right";
    
  };

  const italicizeText = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    let italicizeStatus = selectedDialog.style.fontStyle;

    if (italicizeStatus.length && italicizeStatus == "italic") {
      selectedDialog.style.fontStyle = "normal";
    } else {
      selectedDialog.style.fontStyle = "italic";
    }
  };

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
        
          <Tooltip title="bold">
            <img src={bold} alt="" onClick={boldText} />
          </Tooltip>
          <Tooltip title="italic">
            <img src={italics} alt="" onClick={italicizeText} />
          </Tooltip>
          <Tooltip title="underline">
            <img src={underline} alt="" onClick={underlineText} />
          </Tooltip>
          <Tooltip title="left align">
            <img src={leftAlign} alt="" onClick={leftAlignText}/>
          </Tooltip>
          <Tooltip title="center align">
            <img src={alignCenter} alt="" onClick={centerAlignText}/>
          </Tooltip>
          <Tooltip title="right align">
            <img src={rightAlign} alt="" onClick={rightAlignText}/>
          </Tooltip>
         
         
        </div>
        <Link to="/mydocuments" className="my-doc-btn-link">
          <button className="my-doc-btn">My Documents</button>
        </Link>
        <div className="cv-templates">
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "fullName1"
                : params.id == 2
                ? "fullName2"
                : "fullName3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "aboutMe1"
                : params.id == 2
                ? "aboutMe2"
                : "aboutMe3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "workExperience1"
                : params.id == 2
                ? "workExperience2"
                : "workExperience3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "personalInfo1"
                : params.id == 2
                ? "personalInfo2"
                : "personalInfo3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "certification-projects1"
                : params.id == 2
                ? "certification-projects2"
                : "certification-projects3"
            }
            spellCheck="false"
          ></dialog>
          {params.id == 2 || params.id == 3 ? (
            <dialog
              open
              contentEditable
              className={
                params.id == 2
                  ? "extra-certification-projects2"
                  : "extra-certification-projects3"
              }
            ></dialog>
          ) : (
            ""
          )}
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "skills1"
                : params.id == 2
                ? "skills2"
                : "skills3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "interests1"
                : params.id == 2
                ? "interests2"
                : "interests3"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            className={
              params.id == 1
                ? "education1"
                : params.id == 2
                ? "education2"
                : "education3"
            }
            spellCheck="false"
          ></dialog>
          <img src={imagePath} width="80%" style={{ marginTop: "50px" }} />
        </div>
      </div>
    </>
  );
};
export default EditTemplate;
