import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task, priority, dueDate) => {
    setTasks([
      ...tasks,
      { text: task, completed: false, priority, dueDate },
    ]);
  };

  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app">
      <Header addTask={addTask} />
      <TaskList
        tasks={tasks}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
        clearTasks={clearTasks}
      />
      <div className="task-stats">
        <p>Pending Tasks: {tasks.filter((task) => !task.completed).length}</p>
        <p>Completed Tasks: {tasks.filter((task) => task.completed).length}</p>
      </div>
    </div>
  );
};

export default App;
