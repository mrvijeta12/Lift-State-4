import React from 'react';


const Child = ({ todos, onComplete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {/* {todo.text}{' '} */}
          <span>{todo.text}</span>
          {!todo.completed && (
            <button onClick={() => onComplete(todo.id)}>
              Complete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Child;
