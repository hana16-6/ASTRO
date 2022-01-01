import { useState } from 'react';
import ChildCard from './childCard/ChildCard';
import TodoListChild from './childCard/todoListChild';

const TodoList = ({ todos, removeTodo, card }) => {
  let ids = todos?.map(todo => todo.id);
  const [showChild, setshowChild] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const [width, setWidth] = useState(0);
  const [todosChild, settodosChild] = useState(
    [] || JSON.parse(localStorage.getItem(`Checklist-${ids}`))
  );
  const [tdId, setTdId] = useState();

  const addTodoChild = (todo, id) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const currentTodo = todos.find(todoItem => todoItem.id === id);
    currentTodo.todolistCheckerboxs = [
      ...currentTodo.todolistCheckerboxs,
      todo,
    ];
    const addedTodo = todos.map(todoitem =>
      todoitem.id === id ? currentTodo : todoitem
    );
    localStorage.setItem(`Checklist${card}`, JSON.stringify(addedTodo));
    localStorage.setItem(
      `Checklist-${id}`,
      JSON.stringify(currentTodo.todolistCheckerboxs)
    );
    const completed = todos.map(todoitem =>
      todoitem.id === id ? id : todoitem
    );

    if (completed) {
      localStorage.setItem(
        `progressbar${id}`,
        progressBarCalc(currentTodo.todolistCheckerboxs)
      );
      setWidth(localStorage.getItem(`progressbar${id}`));
    }
  };
  const progressBarCalc = list => {
    const allCompeletedItems = list.filter(item => item.isComplete);

    return (allCompeletedItems.length / list.length) * 100 || 0;
  };
  const completeTodoChild = (e, todoId, parentTodoId) => {
    const currentTodo = todos.find(todoItem => todoItem.id === parentTodoId);
    const currentTodoList = currentTodo.todolistCheckerboxs.map(Item =>
      Item.id === todoId ? { ...Item, isComplete: e.target.checked } : Item
    );
    currentTodo.todolistCheckerboxs = currentTodoList;
    const completed = todos.map(todoitem =>
      todoitem.id === parentTodoId ? currentTodoList : todoitem
    );

    if (completed) {
      localStorage.setItem(
        `progressbar${parentTodoId}`,
        progressBarCalc(currentTodoList)
      );
      setWidth(localStorage.getItem(`progressbar${parentTodoId}`));
    }

    localStorage.setItem(
      `Checklist-${currentTodo.id}`,
      JSON.stringify(currentTodoList)
    );

    localStorage.setItem(`Checklist${card}`, JSON.stringify(todos));
  };

  const removeTodoChild = (todoId, todoParent, Index) => {
    const currentTodo = todos.find(todoItem => todoItem.id === todoParent);
    const checkListArrayFromStorage = JSON.parse(
      localStorage.getItem(`Checklist-${todoParent}`)
    );
    const removedArr = checkListArrayFromStorage.filter(
      (todo, index) => index !== Index
    );
    currentTodo.todolistCheckerboxs = removedArr;
    const completed = todos.map(todoitem =>
      todoitem.id === todoParent ? todoParent : todoitem
    );

    if (completed) {
      localStorage.setItem(
        `progressbar${todoParent}`,
        progressBarCalc(removedArr)
      );
      setWidth(localStorage.getItem(`progressbar${todoParent}`));
    }

    localStorage.setItem(`Checklist-${todoParent}`, JSON.stringify(removedArr));
    settodosChild(JSON.parse(localStorage.getItem(`Checklist-${todoParent}`)));
    localStorage.setItem(`Checklist${card}`, JSON.stringify(todos));
  };
  return todos.map((todo, index) => {
    return (
      <div key={index}>
        <div className='list-child border py-4 px-3 mb-3 shadow-sm'>
          <div key={todo.id}>
            <div className='d-flex justify-content-between align-items-center mb-3'>
              <div>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    className='bi bi-check2-square'
                    viewBox='0 0 16 16'
                  >
                    <path d='M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z' />
                    <path d='m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z' />
                  </svg>
                  <span className='ms-2'>{todo.text}</span>
                </div>
              </div>
              <div>
                <span
                  className='clear-icon'
                  onClick={() => removeTodo(todo.id)}
                >
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
            </div>
            <span>
              {progressBarCalc(
                JSON.parse(localStorage.getItem(`Checklist-${todo.id}`)) ||
                  todos
              )}
              %
            </span>
            <div className='progress w-100 mb-3' style={{ height: '10px' }}>
              <div
                className='progress-bar bg-info'
                role='progressbar'
                style={{
                  width: `${JSON.parse(
                    localStorage.getItem(`progressbar${todo.id}`)
                  )}%`,
                  height: '10px',
                }}
                aria-valuenow='50'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>

            <div className='row'>
              {todo.todolistCheckerboxs.map((checkbox, index) => (
                <TodoListChild
                  todo={checkbox}
                  todoParent={todo.id}
                  Index={index}
                  key={checkbox.id}
                  completeTodoChild={completeTodoChild}
                  removeTodoChild={removeTodoChild}
                />
                // <div>{checkbox.id}</div>
              ))}
            </div>
          </div>

          <div className='d-flex justify-content-between'>
            <button
              className='btn btn-primary'
              id={todo.id}
              type='button'
              onClick={e => {
                setTdId(+e.target.id);
                if (+e.target.id === todo.id) {
                  setshowChild(true);
                }
              }}
            >
              Add an item
            </button>
          </div>
        </div>
        <ChildCard
          todoChild={todosChild}
          todoID={todo.id}
          tdId={tdId}
          trigger={showChild}
          setTrigger={setshowChild}
          onSubmit={addTodoChild}
        />
      </div>
    );
  });
};

export default TodoList;
