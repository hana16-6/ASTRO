import { AppBar, Toolbar } from "@mui/material";
import Button from "@restart/ui/esm/Button";
import React, { useEffect, useState } from "react";

function Topbar({ setOpensidemenu }) {
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
localStorage.setItem("list",color)
  return (
    <>

      <AppBar
        position="static"
        style={{ background: "None", padding: "0.5rem" }}
      >
        
        <Toolbar>

          <h3
            style={{
              flexGrow: 1,
              color: `${color}`,
              paddingLeft:"3rem",
            }}
            onChange={fontColor}
          >
            {localStorage.getItem("bla")}
          </h3>

          <Button
            style={{
              background: "None",
              border: "transparent",
              color: "#fff",
              backgroundColor: "#ff7d85",
              padding: "0.5em",
              borderRadius: "0.5em",
            }}
            onClick={() => setOpensidemenu(true)}
          >
            change background
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export { Topbar };
