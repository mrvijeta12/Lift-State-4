import React, { useState } from 'react';
import Child from './Child';

const Parent = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Built a React App', completed: false },
    { id: 3, text: 'Deploy a React App', completed: false },
  ]);



  const [completedItems, setCompletedItems] = useState([]);

  const handleComplete = (id) => {
    const completedTodo = todos.find((todo) => todo.id === id);


    setCompletedItems((prevCompletedItems) => [
      ...prevCompletedItems,
      completedTodo,
    ]);


    setTodos((prevTodos) =>
      prevTodos.map((todo) => todo.id === id ? { ...todo, completed: true } : todo ));
  };


  

  return (
    <div>
      <h1>Parent Component</h1>
      {completedItems.length > 0 && (
        <div>
          <h4 >Completed Items</h4>
          <ul>
            {completedItems.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      )}
      <h1>Child Component</h1>
      <Child todos={todos} onComplete={handleComplete}/>


    </div>
  );
}


export default Parent;
