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
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg,  } from 'html-to-image';


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

  const handleUpperLower = () => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    let textTranformStatus = selectedDialog.style.textTransform;
    console.log(textTranformStatus);
    if (textTranformStatus.length && textTranformStatus == "uppercase") {
      selectedDialog.style.textTransform = "lowercase";
    } else {
      selectedDialog.style.textTransform = "uppercase";
    }
  };

  const setFontSize = (fontSize) => {
    let selectedDialog = window.getSelection().focusNode.parentNode;
    let textSize = fontSize.selectedIndex + 9;
    selectedDialog.style.fontSize = `${textSize}px`;
  };

  const fontFamilies = {
    0: "Roboto",
    1: "Times New Roman",
    2: "Calibri",
  };
  const setFontFamily = (fontFamily) => {
    let selectedDialog = window.getSelection().focusNode.parentNode;

    selectedDialog.style.fontFamily = fontFamilies[fontFamily.selectedIndex];
  };

  const saveCVDoc = async () => {
    let fullName = document.querySelector("#fullName").textContent;
    let aboutMe = document.querySelector("#aboutMe").textContent;
    let skills = document.querySelector("#skills").textContent;
    let education = document.querySelector("#education").textContent;
    let contactDetails = document.querySelector("#contactDetails").textContent;
    let interests = document.querySelector("#interests").textContent;
    let certifications = document.querySelector("#certifications").textContent;
    let workExperience = document.querySelector("#workExperience").textContent;
    let projects;
    if (params.id == 1) {
      projects = certifications;
    } else {
      projects = document.querySelector("#projects").textContent;
    }

    let userID = localStorage.getItem("userID");


    let jsonData = await fetch("http://localhost:5000/savecv", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userID,
        fullName,
        aboutMe,
        skills,
        education,
        projects,
        contactDetails,
        interests,
        certifications,
        workExperience,
        imageID: params.id,
      }),
    });
    console.log(await jsonData.json());
  };

  const generateImage = () => {
    var node = document.getElementById('templates');
    console.log(node)
htmlToImage.toPng(node)
  .then(function (dataUrl) {
    // console.log(dataUrl)
    // var img = new Image();
    // img.src = dataUrl;
    // document.body.appendChild(img);
    var link = document.createElement('a');
link.href = dataUrl;
link.download = 'Download.png';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
  })
  .catch(function (error) {
    console.error('oops, something went wrong!', error);
  });
  }

  return (
    <>
      <div className="edit-template">
        <div className="toolbar">
          <Tooltip title="uppercase/lowercase">
            <img src={textFont} alt="" onClick={handleUpperLower} />
          </Tooltip>
          <select
            name="fontFamily"
            id="fontFamily"
            onChange={(e) => setFontFamily(e.target)}
            style={{ width: "100px" }}
          >
            <option value="Roboto">Roboto</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Calibri">Calibri</option>
          </select>
          <select
            name="fontSize"
            id="fontsizes"
            onChange={(e) => setFontSize(e.target)}
            style={{ width: "100px" }}
          >
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
          </select>
          {/* <img
            src={redo}
            alt=""
            style={{ transform: "rotate(-180deg)", marginTop: "8px" }}
          />
          <label>Undo</label>
          <img src={redo} alt="" />
          <label>Redo</label> */}
            <img src={printer} alt="" onClick={()=>window.print()}/>
          <label>Print</label>
          <Tooltip title="download">
            <img src={download} alt=""onClick={generateImage}/>
          </Tooltip>
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
            <img src={leftAlign} alt="" onClick={leftAlignText} />
          </Tooltip>
          <Tooltip title="center align">
            <img src={alignCenter} alt="" onClick={centerAlignText} />
          </Tooltip>
          <Tooltip title="right align">
            <img src={rightAlign} alt="" onClick={rightAlignText} />
          </Tooltip>
        </div>
        <Link to="/mydocuments" className="my-doc-btn-link">
          <button className="my-doc-btn">My Documents</button>
        </Link>
        <div className="cv-templates" id="templates">
          <dialog
            open
            contentEditable
            id="fullName"
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
            id="aboutMe"
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
            id="workExperience"
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
            id="contactDetails"
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
            id="certifications"
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
              id="projects"
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
            id="skills"
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
            id="interests"
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
            id="education"
            className={
              params.id == 1
                ? "education1"
                : params.id == 2
                ? "education2"
                : "education3"
            }
            spellCheck="false"
          ></dialog>
          <img src={imagePath} width="80%" style={{ marginTop: "50px" }} className="template-img"/>
          <button
            className="my-doc-btn"
            style={{ marginBottom: "50px" }}
            onClick={saveCVDoc}
          >
            Save Document
          </button>
        </div>
      </div>
    </>
  );
};
export default EditTemplate;
