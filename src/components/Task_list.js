// Task_list.js
import React from 'react';
import './Task_list.css';

function Task_list({ tasks, completeTask, deleteTask }) {
  const handleComplete = (index) => {
    completeTask(index);
  };

  const handleDelete = (index) => {
    deleteTask(index);
  };

  return (
    <div className="task-list-container">
      {tasks &&
        tasks.map((task, index) => (
          <div
            className={`task-item ${task.completed ? 'completed' : ''}`}
            key={index}
          >
            <span
              className="task-name"
              style={{
                textDecoration: task.completed ? 'line-through' : 'none'
              }}
            >
              {task.name}
            </span>
            <div className="task-actions">
              <button className="complete-button" onClick={() => handleComplete(index)}>
                Complete
              </button>
              <button className="delete-button" onClick={() => handleDelete(index)}>
                Delete
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Task_list;
