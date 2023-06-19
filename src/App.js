import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Task_input from './components/Task_input';
import Task_list from './components/Task_list';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, { name: task, completed: false }]);
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="App">
        <Header />
        <Task_input addTask={addTask} />
        <Task_list tasks={tasks} completeTask={completeTask} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
