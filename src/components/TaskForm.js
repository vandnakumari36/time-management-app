import React, { useState } from "react";

const TaskForm = ({ projects, addTask }) => {
  const [selectedProject, setSelectedProject] = useState("");
  const [taskName, setTaskName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedProject.trim() !== "" &&
      taskName.trim() !== "" &&
      timeSpent.trim() !== ""
    ) {
      addTask(selectedProject, taskName, parseFloat(timeSpent), description);
      setSelectedProject("");
      setTaskName("");
      setTimeSpent("");
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label for="selectedProject">Select a Project:</label>
      <select
        id="selectedProject"
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
      >
        <option value="">Select a Project</option>
        {projects.map((project) => (
          <option key={project} value={project}>
            {project}
          </option>
        ))}
      </select>
      <br />
      <br />
      <label for="Task">Enter a task name:</label>
      <input
        id="Task"
        type="text"
        placeholder="Enter a task name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <br />
      <br />
      <label for="Time">Time spent(hrs):</label>
      <input
        id="Time"
        type="number"
        placeholder="Time spent(hrs)"
        value={timeSpent}
        onChange={(e) => setTimeSpent(e.target.value)}
      />
      <br />
      <br />
      <label for="Desc">Enter task description</label>
      <textarea
        id="desc"
        placeholder="Enter task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Create Task</button>
    </form>
  );
};

export default TaskForm;
