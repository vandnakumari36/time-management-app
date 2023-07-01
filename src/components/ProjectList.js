import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
