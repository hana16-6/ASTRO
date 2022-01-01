import { useContext, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PopUp from '../astrolist/popUp/PopUp';
import { Drawer } from '@mui/material';
import { InputBase, Typography } from '@mui/material';
import storeApi from '../uitilty/storeApi';

function Card({ card, index, id, tablecard, data, listId, list }) {
  const [open, setOpen] = useState(false);
  const [buttonPopup, setbuttonPopup] = useState(false);
  const [popupClose, setpopupClose] = useState(false);
  const [newtitle, setNewtitle] = useState(card.title);
  const { updatecardtitle } = useContext(storeApi);
  const handleOpenPopUP = e => {
    setbuttonPopup(true);
    setpopupClose(true);
  };
  const handleClosePopUP = () => {
    setbuttonPopup(false);
    setpopupClose(false);
  };
  const handleOnChanges = e => {
    setNewtitle(e.target.value);
    const key = e.target.id;
    localStorage.setItem(key, newtitle);
  };

  const handleBlur = e => {
    setOpen(false);
    const newId = e.target.id;
    updatecardtitle(newtitle, id, newId);
  };
  // date input---------------->
  const getdatevalue = e => {
    localStorage.setItem(`${card.id}`, e.target.value);
    card.taskdate = e.target.value;
    const d = new Date(e.target.value);
    const f = d.getDate();
    card.endday = f;
    const M = d.getMonth();
    card.endMnth = M;
    const y = d.getFullYear()
    card.endyear=y
  };
  return (
    <>
      <Draggable draggableId={card.id} index={index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            {...provided.draggableProps}
          >
            <>
              {open ? (
                <div
                  style={{
                    backgroundColor: 'white',
                  }}
                >
                  <InputBase
                    onChange={handleOnChanges}
                    value={newtitle}
                    autoFocus
                    id={card.id}
                    style={{
                      background: '#eee',
                      width: '100%',
                      padding: '0.5em',
                    }}
                    onBlur={handleBlur}
                  />
                </div>
              ) : (
                <div
                  className='row justify-content-center align-items-baseline'
                  style={{
                    backgroundColor: 'white',
                    margin: '0.3em',
                    marginBottom: '0.5em',
                    borderRadius: '0.5em',
                  }}
                >
                  <div className='col-9'>
                    <Typography
                      onClick={() => {
                        setOpen(!open);
                      }}
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        // padding:"0.1em",
                        backgroundColor: 'white',
                        margin: '0.5em',
                        //   wordBreak:"break-word",
                        wordBreak: 'break-all',
                        lineHeight: '1.2rem',
                      }}
                    >
                      {newtitle}
                    </Typography>
                    {/*  */}
                    <p
                      style={{
                        fontWeight: 'lighter',
                        fontSize: '0.7rem',
                        backgroundColor: '#fff',
                        marginBottom: '-0.01em',
                        width: '20.8em',
                        paddingLeft: '0.8em',
                        borderRadius: '0.5em',
                      }}
                    >
                      {card.date} {'  .  '}
                      <span
                        style={{
                          paddingLeft: '0.5em',
                          fontSize: '0.73rem',
                        }}
                      >
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          fill='currentColor'
                          className='bi bi-card-heading'
                          viewBox='0 0 16 16'
                        >
                          <path d='M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z' />
                          <path d='M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-1z' />
                        </svg>
                      </span>
                    </p>
                    {/*  */}
                    <p
                      style={{
                        textAlign: 'center',
                        fontSize: '0.7em',
                        backgroundColor: card.typecard,
                        padding: '0.1em',
                        fontWeight: 'lighter',
                        marginBottom: '-0.01em',
                        marginLeft: '18.25em',
                        width: '7em',
                        borderRadius: '0.3em',
                      }}
                    >
                      {card.priority}
                    </p>

                    {/*  */}
                    <div className='d-flex mt-2'>
                      <div className='col-6'>Due date:</div>
                      <div className='col-3'>
                        <input
                          style={{
                            flexGrow: '1',
                            marginBottom: '0.5em',
                            border: 'none',
                            borderTop: '1px solid #ccc',
                          }}
                          type='date'
                          id='taskday'
                          name='taskday'
                          onChange={getdatevalue}
                        />
                      </div>
                    </div>
                    {/*  */}

                    {/*  */}
                  </div>

                  <div className='col-3 ps-5 '>
                    <span
                      className='text-primary f-1'
                      style={{
                        fontSize: "1.2em",
                        backgroundColor: "white",
                        cursor:"pointer",
                      }}
                        onClick={handleOpenPopUP}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='gray'
                        className='bi bi-pencil'
                        viewBox='0 0 16 16'
                      >
                        <path d='M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z' />
                      </svg>
                    </span>
                  </div>
                </div>
              )}
              {/*  */}
            </>
            <Drawer
              anchor='top'
              open={popupClose}
              onClose={() => setpopupClose(false)}
            >
              <PopUp
                trigger={buttonPopup}
                setTrigger={setbuttonPopup}
                taskdate={localStorage.getItem(`${card.id}`)}
                recentdate={card.date}
                card={card}
                typecard={card.type}
                data={data}
                listId={listId}
                list={list}
              >
                <div className='d-flex justify-content-between'>
                  <h3>{card.title} </h3>
                  <span className='clear-icon' onClick={handleClosePopUP}>
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
              </PopUp>
            </Drawer>
          </div>
        )}
      </Draggable>
    </>
  );
}
export { Card };
