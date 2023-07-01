import React from "react";

const TaskList = ({ tasks }) => {
  return (
    <div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <h3>{task.taskName}</h3>
            <p>Project: {task.project}</p>
            <p>Time Spent: {task.timeSpent} hours</p>
            <p>Description: {task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
