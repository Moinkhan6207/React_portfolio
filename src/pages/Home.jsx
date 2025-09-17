import home from "../imgs/inst1.jpeg";
import Ai from "../imgs/Ai_image.webp";
import "../styles/Home.css";

function Home() {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-container">

          {/* ✅ Left Side Image */}
          <div className="hero-left">
            <img src={home} alt="Hero" className="hero-img" />
          </div>

          {/* ✅ Right Side Content */}
          <div className="hero-right">
            <h1>
              Hello, I'm <span className="highlight">Md Mainuddin</span>
            </h1>
            <p className="tagline">
              Frontend Developer | React Enthusiast | Problem Solver
            </p>
            <p className="intro">
              I design and develop modern, responsive, and user-friendly web
              applications. With expertise in <strong>React.js</strong>,
              <strong> JavaScript</strong>, and <strong>frontend design</strong>,
              my goal is to turn ideas into interactive experiences.
            </p>
            <p className="intro">
              Currently exploring <strong>full-stack development</strong> with
              <strong> Node.js</strong> and <strong>MongoDB</strong> while focusing
              on clean UI and scalable solutions.
            </p>
            <div className="hero-buttons">
              <a href="Projects" className="btn">View My Projects</a>
            </div>
          </div>
        </div>
      </section>


      {/* ✅ Skills Snapshot */}
      <section className="skills">
        <h2>What I Do</h2>
        <p>I build modern web apps using the MERN stack and love solving problems.</p>
        <div className="skills-icons">
          <span>⚛️ React</span>
          <span>🟢 Node.js</span>
          <span>🍃 MongoDB</span>
          <span>🐙 GitHub</span>
        </div>
      </section>

      {/* ✅ Featured Projects */}
      <section id="projects" className="projects-preview">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {/* Example Project Card */}
          <div className="project-card">
            <img src={Ai} height="400" width="500" alt="Project 1" />
            <h3>Portfolio Website</h3>
            <p>A personal portfolio made with React and TailwindCSS.</p>
            <div className="project-links">
              <a href="https://github.com/Moinkhan6207/Quiz_app" target="_blank">GitHub</a>
              <a href="https://moinkhan6207.github.io/Quiz_app/" target="_blank">Live Demo</a>
            </div>
          </div>
        </div>
        <a href="/projects" className="btn">See More Projects →</a>
      </section>

      {/* ✅ Achievements Section */}
      <section className="achievements">
        <h2>My Achievements</h2>
        <div className="stats">
          <div>🚀 10+ Projects</div>
          <div>👨‍💻 500+ DSA Problems</div>
          <div>🌍 3 Freelance Clients</div>
        </div>
      </section>

      {/* ✅ Call To Action */}
      <section className="cta">
        <h2>Interested in working together?</h2>
        <a href="/contact" className="btn">Contact Me</a>
      </section>
    </div>
  );
}

export default Home;
