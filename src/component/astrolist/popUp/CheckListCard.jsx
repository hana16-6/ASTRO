import React, { useState } from 'react';
import './popup.css';
const CheckListCard = props => {
  const [inputVal, setInputVal] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (props.cardId === e.target.id) {
      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: inputVal,
        todolistCheckerboxs: [],
      });
      setInputVal('');
      props.setTrigger(false);
    }
  };
  return props.trigger ? (
    <div className='checkListCard shadow p-4'>
      <div className='checkListCard-inner'>
        {props.children}
        <div className='d-flex justify-content-between'>
          <h5>Add checklist</h5>
          <span className='clear-icon' onClick={() => props.setTrigger(false)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-x-lg'
              viewBox='0 0 16 16'
            >
              <path
                fillRule='evenodd'
                d='M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z'
              />
              <path
                fillRule='evenodd'
                d='M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z'
              />
            </svg>
          </span>
        </div>

        <form onSubmit={handleSubmit} id={props.cardId}>
          <label className='form-label'>Title</label>
          <input
            type='text'
            className='form-control'
            value={inputVal}
            onChange={e => setInputVal(e.target.value)}
          ></input>
          <button type='submit' className='btn btn-primary mt-5'>
            Add
          </button>
        </form>
      </div>
    </div>
  ) : (
    ''
  );
};

export default CheckListCard;
