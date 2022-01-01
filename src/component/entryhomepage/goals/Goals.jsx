import { Drawer, InputBase } from "@mui/material";
import { useState } from "react";
import SideBar from "../sidebar/SideBar";
import "./goals.css";
import GoalsCard from "./goalsCard";
import GoalsPopup from "./goalsPopup";

const Goals = () => {
  const [newtitle, setNewtitle] = useState("");
  const [textArea, setTextArea] = useState("");
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [goals, setGoals] = useState(
    JSON.parse(localStorage.getItem("goals")) || []
  );
  const handleOpenPopUP = () => {
    setbuttonPopup(true);
    setpopupClose(true);
  };
  const handleClosePopUP = () => {
    setbuttonPopup(false);
    setpopupClose(false);
  };
  const handleOnChanges = (e) => {
    setNewtitle(e.target.value);
    localStorage.setItem("input", e.target.value);
  };
  const handleBlur = () => {
    setNewtitle(newtitle);
  };
  const handleOnChangesTextarea = (e) => {
    setTextArea(e.target.value);
    localStorage.setItem("textarea", e.target.value);
  };
  const handleBlurTextarea = (e) => {
    setTextArea(textArea);
  };
  const addGoals = (goal) => {
    if (!goal.text || /^\s*$/.test(goal.text)) {
      return;
    }
    const newGoals = [goal, ...goals];
    setGoals(newGoals);
    localStorage.setItem("goals", JSON.stringify(newGoals));
  };
  const removeGoal = (id) => {
    const removedArr = [...goals].filter((goal) => goal.id !== id);

    setGoals(removedArr);
    localStorage.setItem("goals", JSON.stringify(removedArr));
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row justify-content-start ps-0 align-items-baseline p-3">
              <div className="col-5 me-4">
                <h1 className="home-head">Goals</h1>
              </div>
            </div>
            <div className="row my-5">
              <div className="">
                <div>
                  <InputBase
                    onChange={handleOnChanges}
                    value={localStorage.getItem("input")}
                    autoFocus
                    onBlur={handleBlur}
                    placeholder="Mission"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                    }}
                  />
                </div>

                <InputBase
                  onChange={handleOnChangesTextarea}
                  value={localStorage.getItem("textarea")}
                  autoFocus
                  onBlur={handleBlurTextarea}
                  style={{
                    padding: "0.1em",
                    width: "80%",
                  }}
                  placeholder="Inspire your colleagues with your company mission, vision or philosophy"
                />
              </div>
            </div>

            {goals.length === 0 ? (
              <div className="row mt-5">
                <div className="col-lg-6">
                  <h3 className="my-3 text-color">
                    Set and achieve strategic goals
                  </h3>
                  <p className="w-75 text-secondary ">
                    Add your top level company goals to help teams prioritize
                    and connect work to your organization’s objectives
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={handleOpenPopUP}
                  >
                    Add company goal
                  </button>
                </div>

                <div className="col-lg-6">
                  <img
                    className="w-100"
                    src="../../assets/people_on_podium_with_flag.svg"
                    alt=""
                  />
                </div>
              </div>
            ) : (
              <>
                <div className="d-flex mt-5 align-items-center">
                  <h3 className="mb-0">Goals</h3>
                  <p className="add-icon mb-0 ms-3" onClick={handleOpenPopUP}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-plus-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </p>
                </div>

                <GoalsCard goals={goals} removeGoal={removeGoal} />
              </>
            )}
          </div>
        </div>
        <Drawer
          anchor="top"
          open={popupClose}
          onClose={() => setpopupClose(false)}
        >
          <GoalsPopup
            trigger={buttonPopup}
            setTrigger={setbuttonPopup}
            setpopupClose={setpopupClose}
            onSubmit={addGoals}
          >
            <div className="d-flex justify-content-between">
              <h3>Add Goal</h3>
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
          </GoalsPopup>
        </Drawer>
      </div>
    </>
  );
};

export default Goals;
