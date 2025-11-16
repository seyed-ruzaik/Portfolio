// src/components/sections/Contact.jsx
// Final call-to-action with contact links.

import React from "react";

const Contact = () => {
  return (
      <section id="contact" className="reveal">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let’s build something meaningful</p>
        </div>

        <div className="contact-card">
          <div className="contact-main">
            <strong>Got a role, project or idea in mind?</strong>
            <p>
              I’m open to AI, backend or full-stack roles, as well as collaborations and guest lectures.
              The easiest way to reach me is via email, but I’m also active on GitHub.
            </p>
          </div>
          <div className="contact-links">
            <a href="mailto:seyedruzaik@gmail.com">Email me</a>
            <a href="https://github.com/seyed-ruzaik" target="_blank" rel="noreferrer">
              GitHub profile
            </a>
          </div>
        </div>
      </section>
  );
};

export default Contact;
