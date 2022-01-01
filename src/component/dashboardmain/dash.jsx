import React, { useState } from 'react';
import { unit } from '../uitilty/store';
import { Dashboard } from '../dashboard/dashboard';
import { v4 as uuid } from 'uuid';
import StoreApi from '../uitilty/storeApi';
import { Inputcontainer } from '../inputcontainer/inputcontainer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

function Dashmain() {
  const [data, setDate] = useState(
    JSON.parse(localStorage.getItem('addCard')) || unit.data
  );
  const addamorecard = (title, listId) => {
    const d = new Date();
    const newCardid = uuid();
    const newCard = {
      id: newCardid,
      title: title,
      date: d.toLocaleString(),
      taskdate: ' ',
      priority: '',
      type: '',
      srtday: d.getDate(),
      endday: '',
      checkList: '',
      srtMnth: d.getMonth(),
      endMnth: '',
      srtyear:d.getFullYear(),
      endyear:""
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setDate(newState);
    localStorage.setItem('addCard', JSON.stringify(newState));
  };
  const addMorelist = title => {
    const newlistId = uuid();
    const newlist = {
      id: newlistId,
      title: title,
      cards: [],
    };
    const newState = {
      listIds: [...data.listIds, newlistId],
      lists: {
        ...data.lists,
        [newlistId]: newlist,
      },
    };

    setDate(newState);
    localStorage.setItem('addCard', JSON.stringify(newState));
  };
  const updateListtitle = (title, listId) => {
    const list = data.lists[listId];
    list.title = localStorage.getItem('name');

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setDate(newState);
    localStorage.setItem('addCard', JSON.stringify(newState));
  };
  // need mofification
  const updatecardtitle = (title, listId, newId) => {
    const list = data.lists[listId];
    for (let i = 0; i < list.cards.length; i++) {
      list.cards[i].id === newId
        ? (list.cards[i].title = localStorage.getItem(newId))
        : (list.cards[i].title = '');
    }
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setDate(newState);
    localStorage.setItem('addCard', JSON.stringify(newState));
  };
  const setdatetask = (date, listId) => {
    const list = data.lists[listId];
    //   list.cards.taskdate=date;
    list.cards.taskdate = date;
    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setDate(newState);
    localStorage.setItem('addCard', JSON.stringify(newState));
  };

  const onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }
    if (type === 'list') {
      const newListId = data.listIds;
      newListId.splice(source.index, 1);
      newListId.splice(destination.index, 0, draggableId);
      return;
    }

    const sourceList = data.lists[source.droppableId];
    const destinationList = data.lists[destination.droppableId];
    const dragginCard = sourceList.cards.filter(
      card => card.id === draggableId
    )[0];

    if (source.droppableId === destination.droppableId) {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, dragginCard);
      const newState = {
        ...data,
        lists: {
          ...data.lists,
          [sourceList.id]: destinationList,
        },
      };
      setDate(newState);
      localStorage.setItem('addCard', JSON.stringify(newState));
    } else {
      sourceList.cards.splice(source.index, 1);
      destinationList.cards.splice(destination.index, 0, dragginCard);

      const newState = {
        ...data,
        lista: {
          ...data.lists,
          [sourceList.id]: sourceList,
          [destinationList.id]: destinationList,
        },
      };
      setDate(newState);
      localStorage.setItem('addCard', JSON.stringify(newState));
    }
  };

  return (
    <StoreApi.Provider
      value={{
        addamorecard,
        addMorelist,
        updateListtitle,
        updatecardtitle,
        setdatetask,
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable
          key={Math.random()}
          droppableId='Dashmain'
          type='list'
          direction='horizontal'
        >
          {provided => (
            <div
              style={{
                overflowY: 'auto',
                minHeight: '100vh',
                display: 'flex',
                padding: '1em',
                width: '100%',
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              <div className='container'>
                {/* <div className="row"> */}
                <div className='d-flex align-items-start'>
                  {data.listIds.map((listId, index) => {
                    const list = data.lists[listId];
                    return (
                      <Dashboard
                        key={Math.random()}
                        list={list}
                        data={data}
                        listId={listId}
                        index={index}
                      />
                    );
                  })}
                  <div className=''>
                    <Inputcontainer type='list' />
                    {provided.placeholder}
                  </div>
                  <Link to={{ pathname: '/Tableboard', state: data }}>
                    <Button
                      className='table-position'
                      style={{
                        background: 'None',
                        border: 'transparent',

                        color: '#fff',
                        backgroundColor: '#ff7d85',
                        padding: '0.5em',
                        borderRadius: '0.5em',
                        position: 'absolute',
                        top: '5.1rem',
                        right: '14rem',
                      }}
                    >
                      Table aboard
                    </Button>
                  </Link>
                </div>
                {/* </div> */}
              </div>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </StoreApi.Provider>
  );
}

export { Dashmain };
