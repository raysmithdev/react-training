import React from 'react';

const AddToDo = ({ addToDo }) => (
  <form onSubmit={(e) => {
    e.preventDefault();

    let userInput = e.target.userInput.value;
    addToDo(userInput);
    e.target.userInput.value = '';
  }}>
    <input type="text" name="userInput" />
    <button type="submit">Submit</button>
  </form>
);

export default AddToDo;
