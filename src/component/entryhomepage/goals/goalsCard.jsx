import React from "react";

const GoalsCard = ({ goals, removeGoal }) => {
  return goals.map((goal, index) => (
    <>
      <div key={index}>
        <div className="goal-card my-3 p-3 d-flex justify-content-between shadow-sm border">
          <div key={goal.id}>{goal.text}</div>
          <span className="clear-icon" onClick={() => removeGoal(goal.id)}>
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
      </div>
    </>
  ));
};

export default GoalsCard;
