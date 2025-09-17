// Projects.jsx
import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      title: "Travel_Agancy",
      description:
        "Built a responsive travel agency website using HTML and CSS, showcasing destinations, packages, and contact information with a clean and modern layout.",
      link: "https://moinkhan6207.github.io/Travel_Agency/",
    },
    {
      title: "Quiz_App",
      description:
        "A React-based quiz application (Quix App) that allows users to attempt quizzes, track scores in real-time, and experience a responsive, interactive interface.",
      link: "https://moinkhan6207.github.io/Quiz_app/",
    },
    {
      title: "To-Do_List",
      description:
        "A React-based To-Do List app that helps users add, update, and delete daily tasks with an intuitive and responsive interface.",
      link: "https://moinkhan6207.github.io/Todo-_List/",
    },
  ];

  return (
    <section className="projects">
      <div className="projects-container">
        <h2>🚀 My Projects</h2>
        <p>
          Here are some of the <strong>featured projects</strong> I have worked
          on recently. Each one reflects my skills in frontend development,
          responsive design, and problem-solving.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
