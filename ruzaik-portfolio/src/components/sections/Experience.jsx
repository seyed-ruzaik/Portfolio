// src/components/sections/Experience.jsx
// Uses data from /data/experience.js and renders both columns of timeline items.

import React from "react";
import { experienceLeft, experienceRight } from "../../data/experience";

const ExperienceTimelineColumn = ({ items }) => {
    return (
        <div className="timeline">
            {items.map((item, idx) => (
                <div className="timeline-item" key={item.id}>
                    <div className="timeline-marker" />
                    <div className="timeline-header">
                        <div className="timeline-role">{item.role}</div>
                        <div className="timeline-org">{item.org}</div>
                        <div className="timeline-meta">{item.period}</div>
                    </div>
                    <div className="timeline-body">
                        <ul>
                            {item.bullets.map((bullet, i) => (
                                <li key={`${item.id}-bullet-${i}`}>{bullet}</li>
                            ))}
                        </ul>
                    </div>
                    {idx !== items.length - 1 && <br />}
                </div>
            ))}
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="reveal">
            <div className="section-header">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">Industry · Teaching · Real-world impact</p>
            </div>

            <div className="experience-grid">
                <ExperienceTimelineColumn items={experienceLeft} />
                <ExperienceTimelineColumn items={experienceRight} />
            </div>

            <p className="experience-note" style={{ marginTop: "1.1rem" }}>
                I also write technical content on Medium—publishing step-by-step guides and deep dives into backend
                development, APIs and developer productivity.
            </p>
        </section>
    );
};

export default Experience;
