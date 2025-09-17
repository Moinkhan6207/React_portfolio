import React, { useState } from "react";
import me from "../imgs/inst2.jpeg";
import res from "../imgs/resume.pdf";
// import vid from "../videos/demo.mp4";  // <-- apna video file imgs folder me rakho
import "../styles/About.css";

function About() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="about">
      <div className="about-container">

        {/* ✅ Left Side: Image */}
        <div className="about-image">
          <img src={me} alt="Md Mainuddin" className="profile-pic" />
        </div>

        {/* ✅ Right Side: Text */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Md Mainuddin</strong>, a passionate Software Developer
            who loves building interactive and scalable web applications.
            My main focus is on <strong>clean design</strong>, <strong>efficient code</strong>,
            and learning new technologies every day.
          </p>

          <p>
            I specialize in <span>React</span>, <span>Node.js</span>, and <span>MongoDB</span>.
            Apart from coding, I enjoy <em>reading books</em>, exploring <em>tech blogs</em>,
            and <em>traveling</em> to discover new ideas.
          </p>

          {/* ✅ Quick Info Badges */}
          <div className="info-badges">
            <span>💻 2+ Years Coding</span>
            <span>📍 India</span>
            <span>✅ Open to Freelance</span>
          </div>

          {/* ✅ Buttons */}
          <div className="about-buttons">
            <a href="/projects" className="view-work-btn">View My Project</a>
            <a href={res} className="resume-btn" target="_blank">Download CV</a>
            <button className="video-btn" onClick={() => setShowVideo(true)}>
              ▶ Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Video Modal */}
      {showVideo && (
        <div className="video-modal">
          <div className="video-content">
            <button className="close-btn" onClick={() => setShowVideo(false)}>X</button>
            <video width="400" height="300" controls autoPlay>
              <source src="/videos/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
