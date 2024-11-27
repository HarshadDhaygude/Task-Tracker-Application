import React, { useState } from 'react';

const Header = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() && dueDate) {
      addTask(newTask, priority, dueDate);
      setNewTask('');
      setPriority('Medium');
      setDueDate('');
    }
  };

  return (
    <div className="header">
      <h1>Task Tracker</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default Header;
