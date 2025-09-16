import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>
          I’d love to hear from you! Whether you have a question, want to
          collaborate, or just say hi — feel free to drop a message.
        </p>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>
              📧 Email: <a href="mailto:you@example.com">you@example.com</a>
            </p>
            <p>📱 Phone: +91 6207086776</p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/md-mainuddin-99967b2b4/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/Welcome/in//MD.Mainuddin
              </a>
            </p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
