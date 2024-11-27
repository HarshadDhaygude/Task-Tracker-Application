import React from 'react';

const TaskList = ({ tasks, toggleTask, deleteTask, clearTasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task ${task.completed ? 'completed' : ''} ${task.priority.toLowerCase()}`}
        >
          <div className="task-details">
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <span className="due-date">Due: {task.dueDate}</span>
            <span className="priority">[{task.priority}]</span>
          </div>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      ))}
      {tasks.length > 0 && (
        <button className="clear-tasks" onClick={clearTasks}>
          Clear All Tasks
        </button>
      )}
    </div>
  );
};

export default TaskList;
