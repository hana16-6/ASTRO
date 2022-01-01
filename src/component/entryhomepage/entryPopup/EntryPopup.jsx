import { useState } from "react";
import { Link } from "react-router-dom";
const EntryPopup = (props) => {
  const [inputVal, setInputVal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // props.Submit(e.target[0].value);
    const z = e.target[0].value;
    localStorage.setItem("bla", z);
    setInputVal("");
    props.setTrigger(false);
    props.setpopupClose(false);
  };
  return props.trigger ? (
    <div className="entry-pop-up shadow p-4">
      <div className="entry-popup-inner">{props.children}</div>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mt-4"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        ></input>

        <button type="submit" className="btn btn-primary mt-4">
          Add
        </button>
      </form>
    </div>
  ) : (
    ""
  );
};

export default EntryPopup;
