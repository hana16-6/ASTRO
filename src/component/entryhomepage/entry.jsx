import "./entry.css";
import EntryPopup from "./entryPopup/EntryPopup";
import { useState } from "react";
import { Drawer } from "@mui/material";
import SideBar from "./sidebar/SideBar";

function Entrypage() {
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [inputVal, setInputVal] = useState("");
  // const data =useContext(storeApi);
  // console.log(data,"dataaaaaa from entrypage")
  const handleOpenPopUP = () => {
    setbuttonPopup(true);
    setpopupClose(true);
  };
  const handleClosePopUP = () => {
    setbuttonPopup(false);
    setpopupClose(false);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row justify-content-end align-items-baseline p-3">
              <div className="col me-4 text-left">
                <h1 className="home-head">Home</h1>
              </div>

              <div className="row ">
                <div className="col-11  mt-5 border-bottom">
                  <span className="fs-1 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                  <span className="home-task-content">Tasks Due Soon</span>
                </div>
              </div>
              <div className="row">
                <div className="col-11">
                  <p className="text-center text-secondary p-5 ">
                    No tasks due in the next 5 days
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-11 mt-3 border-bottom">
                  <span className="fs-1 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-caret-down-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </span>
                  <span className="home-task-content">Recent Projects</span>
                </div>
              </div>

              <div className="row ">
                <div className="col-11 mt-2">
                  <div className="project-content w-25 text-center">
                    <div
                      className="w-75 p-5 m-3 project-bar"
                      onClick={handleOpenPopUP}
                    >
                      +
                    </div>
                    new project
                  </div>

                  {/*  */}
                  <div className="project-content w-25  text-center">
                    <div className="w-75 p-5 m-3 project-bar ">+</div>
                    new project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Drawer
          anchor="top"
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <EntryPopup
            trigger={buttonPopup}
            setTrigger={setbuttonPopup}
            setpopupClose={setpopupClose}
            Submit={setInputVal}
          >
            <div className="d-flex justify-content-between">
              <h3>project name </h3>
              <p>{inputVal}</p>

              <span className="clear-icon" onClick={handleClosePopUP}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"
                  />
                </svg>
              </span>
            </div>
          </EntryPopup>
        </Drawer>
      </div>
    </>
  );
}
export { Entrypage };
