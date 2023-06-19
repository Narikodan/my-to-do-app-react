import React, { useState } from 'react';
import './Task_input.css';

function Task_input({ addTask }) {
  const [value, setValue] = useState('');

  const handleValue = () => {
    if (value.trim() !== '') {
      addTask(value);
      setValue('');
    }
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="task-input-container">
      <div className="entry-section">
        <input
          type="text"
          placeholder="Add a to-do item.."
          className="task-input"
          value={value}
          onChange={handleInputChange}
        />
        <button onClick={handleValue} className="add-button">+</button>
      </div>
    </div>
  );
}

export default Task_input;
