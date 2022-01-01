import React, { useState } from 'react'

const GoalsPopup = (props) => {
    const [inputVal, setInputVal] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit({ id: Math.floor(Math.random() * 1000), text: inputVal });
        props.setTrigger(false);
        props.setpopupClose(false);

    };
    return props.trigger ? (
        <div className="goal-pop-up shadow p-4">
            <div className="popup-inner">
                {props.children}
                <div className="">
                    <form onSubmit={handleSubmit}>
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            value={inputVal}
                            onChange={(e) => setInputVal(e.target.value)}
                        ></input>
                        <button type="submit" className="btn btn-primary mt-5">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </div>
    ) : ("")
}

export default GoalsPopup;

