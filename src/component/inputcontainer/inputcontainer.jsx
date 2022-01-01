import React, { useState } from "react";
import { Paper, Typography, Collapse } from "@mui/material";
import { Inputcard } from "./inputcard";
import "./inputcontiner.css";

function Inputcontainer({ listId, type }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Collapse in={open}>
        <Inputcard setOpen={setOpen} listId={listId} type={type} />
      </Collapse>
      {/*  */}
      <Collapse in={!open}>
        <Paper
          style={{
            margin: "auto",
            backgroundColor: "lightblue",
            border: "1px solid #EBECF0",
            width: "15rem",
            marginBottom: "1em",
            marginTop: "1em",
          }}
          className="add"
          onClick={() => setOpen(!open)}
        >
          <Typography
            className="add"
            style={{
              cursor: "pointer",
              textAlign: "center",
            }}
          >
            {type === "card" ? "+ Add a Card" : "Add another list"}
          </Typography>
        </Paper>
      </Collapse>
    </>
  );
}
export { Inputcontainer };
