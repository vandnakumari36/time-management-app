import React, { useState } from "react";
//import { Route, Link } from "react-router-dom";
import ProjectForm from "./components/ProjectForm";
import TaskForm from "./components/TaskForm";
import ProjectList from "./components/ProjectList";
import TaskList from "./components/TaskList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  const addProject = (projectName) => {
    setProjects([...projects, projectName]);
  };

  const addTask = (project, taskName, timeSpent, description) => {
    setTasks([...tasks, { project, taskName, timeSpent, description }]);
  };

  const showProjects = () => {
    return <ProjectList projects={projects} />;
  };

  const showTasks = () => {
    return <TaskList tasks={tasks} />;
  };

  return (
    <div>
      <h1>Welcome to the Time tracking App</h1>
      <h2>Create a Project</h2>
      <ProjectForm addProject={addProject} />
      <h2>Create a Task</h2>
      <TaskForm projects={projects} addTask={addTask} />

      <h2>Projects</h2>
      {showProjects()}

      <h2>Tasks</h2>
      {showTasks()}
    </div>
  );
};

export default App;
