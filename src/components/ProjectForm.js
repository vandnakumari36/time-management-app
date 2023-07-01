import React, { useState } from "react";

const ProjectForm = ({ addProject }) => {
  const [projectName, setProjectName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (projectName.trim() !== "") {
      addProject(projectName);
      setProjectName("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter project name"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;
