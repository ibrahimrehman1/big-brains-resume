import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { items } from "./Templates";
import alignCenter from "../images/align-center.png";
import bold from "../images/bold.png";
// import change from "../images/change.png";
import download from "../images/download.png";
import italics from "../images/italics.png";
// import justification from "../images/justification.png";
import leftAlign from "../images/left-align.png";
import printer from "../images/printer.png";
// import redo from "../images/redo.png";
import rightAlign from "../images/right-align.png";
import textFont from "../images/text-font.png";
import underline from "../images/underline.png";
import Tooltip from "@mui/material/Tooltip";
import * as htmlToImage from "html-to-image";
// import { toPng, toJpeg, toBlob, toPixelData, toSvg, } from 'html-to-image';

const EditTemplate = () => {
  const params: { id?: number } = useParams();
  const [imagePath, setImagePath] = useState<string>("");
  useEffect(() => {
    items.forEach((val) => {
      if (val["id"] == params.id) {
        setImagePath(val.path);
      }
    });
  }, []);

  const boldText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    const boldStatus = selectedDialog.style.fontWeight;
    if (boldStatus == "bold") {
      selectedDialog.style.fontWeight = "100";
    } else {
      selectedDialog.style.fontWeight = "bold";
    }
  };

  const underlineText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    const underlineStatus = selectedDialog.style.textDecoration;
    if (underlineStatus.length && underlineStatus == "underline") {
      selectedDialog.style.textDecoration = "none";
    } else {
      selectedDialog.style.textDecoration = "underline";
    }
  };

  const leftAlignText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    selectedDialog.style.textAlign = "left";
  };

  const centerAlignText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    selectedDialog.style.textAlign = "center";
  };
  const rightAlignText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    selectedDialog.style.textAlign = "right";
  };

  const italicizeText = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    const italicizeStatus = selectedDialog.style.fontStyle;

    if (italicizeStatus.length && italicizeStatus == "italic") {
      selectedDialog.style.fontStyle = "normal";
    } else {
      selectedDialog.style.fontStyle = "italic";
    }
  };

  const handleUpperLower = () => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    const textTranformStatus = selectedDialog.style.textTransform;
    console.log(textTranformStatus);
    if (textTranformStatus.length && textTranformStatus == "uppercase") {
      selectedDialog.style.textTransform = "lowercase";
    } else {
      selectedDialog.style.textTransform = "uppercase";
    }
  };

  const setFontSize = (fontSize) => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;
    const textSize = fontSize.selectedIndex + 9;
    selectedDialog.style.fontSize = `${textSize}px`;
  };

  const fontFamilies = {
    0: "Roboto",
    1: "Times New Roman",
    2: "Calibri",
  };
  const setFontFamily = (fontFamily) => {
    const selectedDialog = window?.getSelection()?.focusNode
      ?.parentNode as HTMLElement;

    selectedDialog.style.fontFamily = fontFamilies[fontFamily.selectedIndex];
  };

  const saveCVDoc = async () => {
    const fullName = document.querySelector("#fullName")?.textContent;
    const aboutMe = document.querySelector("#aboutMe")?.textContent;
    const skills = document.querySelector("#skills")?.textContent;
    const education = document.querySelector("#education")?.textContent;
    const contactDetails =
      document.querySelector("#contactDetails")?.textContent;
    const interests = document.querySelector("#interests")?.textContent;
    const certifications =
      document.querySelector("#certifications")?.textContent;
    const workExperience =
      document.querySelector("#workExperience")?.textContent;
    let projects;
    if (params.id == 1) {
      projects = certifications;
    } else {
      projects = document.querySelector("#projects")?.textContent;
    }

    const userID = localStorage.getItem("userID");

    const jsonData = await fetch("http://localhost:5000/savecv", {
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
    const node = document.getElementById("templates") as HTMLElement;
    // console.log(node)
    htmlToImage
      .toJpeg(node, { backgroundColor: "white", quality: 1 })
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "Download.jpeg";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  };

  return (
    <>
      <div className="my-12 mx-5 flex-col items-center">
        <div className="rounded-3xl font-rambla w-4/5 bg-[#e5e5e5] flex p-2.5 justify-evenly">
          <Tooltip title="uppercase/lowercase">
            <img src={textFont} alt="" onClick={handleUpperLower} />
          </Tooltip>
          <select
            name="fontFamily"
            id="fontFamily"
            onChange={(e) => setFontFamily(e.target)}
            className="w-24"
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
          <img src={printer} alt="" onClick={() => window.print()} className="mt-1.5 w-8 h-8 cursor-pointer" />
          <label className="relative right-5 self-center">Print</label>
          <Tooltip title="download">
            <img src={download} alt="" onClick={generateImage} />
          </Tooltip>
          <label>Download</label>
        </div>
        <div className="top-48 p-2.5 w-4/5 z-50 rounded-3xl absolute justify-evenly flex bg-[#e5e5e5]">
          <Tooltip title="bold">
            <img src={bold} alt="" onClick={boldText} className="mt-1.5 cursor-pointer w-8 h-8" />
          </Tooltip>
          <Tooltip title="italic">
            <img src={italics} alt="" onClick={italicizeText} className="mt-1.5 cursor-pointer w-8 h-8"/>
          </Tooltip>
          <Tooltip title="underline">
            <img src={underline} alt="" onClick={underlineText} className="mt-1.5 cursor-pointer w-8 h-8"/>
          </Tooltip>
          <Tooltip title="left align">
            <img src={leftAlign} alt="" onClick={leftAlignText} className="mt-1.5 cursor-pointer w-8 h-8"/>
          </Tooltip>
          <Tooltip title="center align">
            <img src={alignCenter} alt="" onClick={centerAlignText} className="mt-1.5 cursor-pointer w-8 h-8"/>
          </Tooltip>
          <Tooltip title="right align">
            <img src={rightAlign} alt="" onClick={rightAlignText} className="mt-1.5 cursor-pointer w-8 h-8"/>
          </Tooltip>
        </div>
        <Link to="/mydocuments" className="absolute top-56 z-50">
          <button className="my-doc-btn">My Documents</button>
        </Link>
        <div className="w-4/5 h-auto mt-36 flex-col absolute items-center" id="templates">
          <dialog
            open
            contentEditable
            id="fullName"
            className={
              (params.id == 1
                ? "fullName1"
                : params.id == 2
                ? "fullName2"
                : "fullName3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            id="aboutMe"
            className={
              (params.id == 1
                ? "aboutMe1"
                : params.id == 2
                ? "aboutMe2"
                : "aboutMe3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            id="workExperience"
            className={
              (params.id == 1
                ? "workExperience1"
                : params.id == 2
                ? "workExperience2"
                : "workExperience3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            id="contactDetails"
            className={
              (params.id == 1
                ? "personalInfo1"
                : params.id == 2
                ? "personalInfo2"
                : "personalInfo3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            id="certifications"
            contentEditable
            className={
              (params.id == 1
                ? "certification-projects1"
                : params.id == 2
                ? "certification-projects2"
                : "certification-projects3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          {params.id == 2 || params.id == 3 ? (
            <dialog
              open
              id="projects"
              contentEditable
              className={
                (params.id == 2
                  ? "extra-certification-projects2"
                  : "extra-certification-projects3") + " border-solid border-2 border-black"
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
              (params.id == 1
                ? "skills1"
                : params.id == 2
                ? "skills2"
                : "skills3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            id="interests"
            className={
              (params.id == 1
                ? "interests1"
                : params.id == 2
                ? "interests2"
                : "interests3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <dialog
            open
            contentEditable
            id="education"
            className={
              (params.id == 1
                ? "education1"
                : params.id == 2
                ? "education2"
                : "education3") + " border-solid border-2 border-black"
            }
            spellCheck="false"
          ></dialog>
          <img src={imagePath} width="80%" className="mt-12 h-auto" />
          <button
            className="my-12 h-10 w-60 rounded-3xl font-rambla z-50"
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
