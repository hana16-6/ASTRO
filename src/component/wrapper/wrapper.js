import React, { useEffect, useLayoutEffect, useState } from "react";
import { Dashmain } from "../dashboardmain/dash";
import SideBar from "../entryhomepage/sidebar/SideBar";
import { Navigition } from "../navigition/navigition";
import './wrapper.css'

function Wrapper() {
  var list=localStorage.getItem("list")  
  const [backgroundImage, setbackgroundIamge] = useState(localStorage.getItem("img"));
  const [showCom, setshowCom] = useState(false);
  useLayoutEffect(() => {
    localStorage.setItem("img", backgroundImage);
  }, [backgroundImage])
  const close = () => {
    setshowCom(!showCom)
  }
  const [color, setcolor] = useState("");
  const fontColor = () => {
    localStorage.getItem("img") ===
      "https://image.freepik.com/free-vector/winter-park-2d-game-landscape_1284-12866.jpg" ||
    localStorage.getItem("img") ===
      "https://image.freepik.com/free-vector/colorful-galaxy-watercolor-doodle-pastel-background_53876-97609.jpg" ||
    localStorage.getItem("img") ===
      "https://image.freepik.com/free-vector/colorful-galaxy-watercolor-doodle-with-ufo_53876-118473.jpg" ||
    localStorage.getItem("img") ===
      "https://image.freepik.com/free-vector/colorful-galaxy-watercolor-doodle-with-rocket_53876-118472.jpg" ||
    localStorage.getItem("img") ===
      "https://image.freepik.com/free-vector/spirit-guides-nature_1196-883.jpg"
      ? setcolor("black")
      : setcolor("white");
  };
  useEffect(() => {
    setcolor(fontColor);
    return () => {
      setcolor("");
    };
  }, [color]);

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: backgroundImage,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

      <Navigition setbackgroundIamge={setbackgroundIamge} />
    <button className="sidebar-btn" onClick={close}
    ><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill={color} class="bi bi-list" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
      </svg></button>
      <div className="d-flex x">
        <div className={showCom ? 'hidden' : ''}> <SideBar /></div>
          <Dashmain />
      </div>

    </div >
  );
}

export { Wrapper };
