// src/components/sections/Highlights.jsx
// Simple "project"/impact highlight section (Fasheera + summary of other work).

import React from "react";

const Highlights = () => {
    return (
        <section id="highlights" className="reveal">
            <div className="section-header">
                <h2 className="section-title">Highlights</h2>
                <p className="section-subtitle">A few things I’m proud of</p>
            </div>

            <div className="projects">
                <div className="project-card">
                    <div className="project-pill">
            <span
                style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "var(--accent)",
                }}
            />
                        Real-world impact
                    </div>
                    <h3 className="project-title">Fasheera E-commerce Backend</h3>
                    <p className="project-meta">Oasis Digital Agency · Node.js · PostgreSQL · AWS</p>
                    <p>
                        Production backend powering an e-commerce platform with improved resilience and performance.
                    </p>
                    <ul>
                        <li>Cut API response times by ~35% through query optimisation and API refactors.</li>
                        <li>Improved delivery speed by ~20% while mentoring interns and owning backend direction.</li>
                        <li>Maintained ~99.9% uptime through careful deployment and monitoring on AWS.</li>
                    </ul>
                </div>

                <div className="projects-side-note">
                    <strong>More work:</strong>
                    <br />
                    AI-powered CRM integrations at Avantrio, a healthcare app at Amerck, and ongoing teaching &
                    supervision of software engineering projects at IIT.
                    <br />
                    <br />
                    I’m always happy to walk through architecture decisions, trade-offs, and what I’d improve next.
                </div>
            </div>
        </section>
    );
};

export default Highlights;
