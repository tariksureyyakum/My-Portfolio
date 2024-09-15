// src/Projects.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Projects.css';

const projects = [
  {
    title: 'MyResume',
    description: 'A single-page website created using HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/tariksureyyakum/MyResume', // GitHub bağlantısı
    siteLink: 'https://tariksureyyakum.surge.sh/', 
  },
  {
    title: 'Mini Projects',
    description: 'A collection of 8 mini projects based on HTML, CSS, and JavaScript.',
    githubLink: 'https://github.com/tariksureyyakum/mini-project', // GitHub bağlantısı
  },
  {
    title: 'Decision Support System',
    description: 'A system for gym owners using HTML, CSS, JavaScript, PHP, and MySQL.',
    githubLink: 'https://github.com/tariksureyyakum/Decision-Support-System-Project', // GitHub bağlantısı
  },
  {
    title: 'Candidate Tracking System',
    description: 'A system to improve communication between employers and candidates using HTML, CSS, JavaScript, PHP, and MySQL.',
    githubLink: 'https://github.com/tariksureyyakum/Candidate-Tracking-System-XSoftware', // GitHub bağlantısı
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects py-5">
      <div className="container">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row">
        {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.githubLink} className="btn btn-primary me-2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
                  {project.siteLink && (
                    <a href={project.siteLink} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">Visit Site</a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
