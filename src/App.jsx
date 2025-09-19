import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import ChartBot from "./pages/ChatBot"

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/chartbot" element={<ChartBot />} />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
