const TodoListChild = ({
  todo,
  todoParent,
  completeTodoChild,
  removeTodoChild,
  Index,
}) => (
  // className={todo.isComplete ? "todo-row complete" : "todo-row"}
  // <div key={index}>
  <div className='d-flex justify-content-between'>
    <div className='d-flex align-items-center'>
      <input
        type='checkbox'
        onChange={e => {
          completeTodoChild(e, todo.id, todoParent);
        }}
        checked={todo.isComplete ? true : null}
      />
      <p
        className={
          todo.isComplete ? 'todo-row complete mb-0 ms-2' : 'todo-row mb-0 ms-2'
        }
      >
        {todo.text}
      </p>
    </div>
    <span
      className='clear-icon'
      onClick={() => {
        removeTodoChild(todo.id, todoParent, Index);
      }}
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
  // </div>
);

export default TodoListChild;
