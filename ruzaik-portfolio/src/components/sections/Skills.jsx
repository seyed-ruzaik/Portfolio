// src/components/sections/Skills.jsx
// Renders grouped skills using data from /data/skills.js.

import React from "react";
import { skillGroups } from "../../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="reveal">
            <div className="section-header">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">What I work with day to day</p>
            </div>

            <div className="skills-grid">
                {skillGroups.map((group) => (
                    <div className="skill-card" key={group.title}>
                        <div className="skill-title">{group.title}</div>
                        <div className="skill-tags">
                            {group.items.map((skill) => {
                                const isStrong = group.strong.includes(skill);
                                return (
                                    <span
                                        key={skill}
                                        className={`tag ${isStrong ? "tag-strong" : ""}`}
                                    >
                    {skill}
                  </span>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
