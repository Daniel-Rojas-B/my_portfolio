import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="project">
        <h3>Project Title</h3>
        <p>Description of the project.</p>
        <a href="https://github.com/yourusername/project" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        <a href="https://yourprojectdemo.com" target="_blank" rel="noopener noreferrer">Live Demo</a>
      </div>
    </div>
  );
};

export default Projects;