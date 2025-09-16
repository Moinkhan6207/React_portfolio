import React from "react";
import "../styles/About.css";


function About() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Md Mainuddin</strong>, a passionate Software
            Developer who loves building interactive and scalable web
            applications. My main focus is on clean design, efficient code, and
            learning new technologies every day.
          </p>
          <p>
            I enjoy working with <span>React</span>, <span>Node.js</span>, and{" "}
            <span>MongoDB</span>. When I'm not coding, I like reading books,
            exploring tech blogs, and traveling.
          </p>
        </div>

        <div className="about-image">

        </div>
      </div>
    </section>
  );
}

export default About;
