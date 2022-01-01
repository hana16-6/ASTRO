import { useState } from "react";
const ChildCard = (props) => {
  const [childInput, setchildInput] = useState("");
  const handleCardSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ id: Math.random().toString(16).slice(2), text: childInput, isComplete : false },props.todoID);
    setchildInput("");
    props.setTrigger(false);
  };
  return props.trigger && props.tdId === props.todoID ? (
    <div className="childCard shadow p-4">
      <div className="checkListCard-inner">
        <div className="d-flex justify-content-between">
          <h5>Add Item</h5>
          <span className="clear-icon" onClick={() => props.setTrigger(false)}>
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

        <form onSubmit={handleCardSubmit}>
          <input
            type="text"
            placeholder="add item"
            className="form-control"
            value={childInput}
            onChange={(e) => setchildInput(e.target.value)}
          ></input>
          <button type="submit" className="btn btn-primary mt-5">
            Add
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ChildCard;
