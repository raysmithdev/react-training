import React from 'react';
import './List.css';

const List = ({ todos, deleteToDo }) => (
  <ul>
    {todos.map((todo, index) => (
      <div key={index}>
        <li>
          {todo.text}
          <span>
            <button className="Delete-Button" onClick={() => deleteToDo(todo.id) }>Delete</button>
          </span>
        </li>
      </div>
    ))}
  </ul>
);

export default List;
