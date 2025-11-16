// src/components/sections/Hero.jsx
// Hero section with headline, short intro and "card" showing your current role.

import React from "react";

const Hero = () => {
  return (
      <section id="home" className="hero reveal">
        <div>
          <div className="hero-label">
            <span className="hero-label-dot" />
            Open to AI & Backend roles
          </div>

          <h1 className="hero-title">
            Building reliable software & teaching the next wave of <span>engineers</span>.
          </h1>

          <p className="hero-subtitle">
            I’m a Software Engineer and Assistant Lecturer from Sri Lanka, working across backend systems,
            APIs, cloud, and data. I love shipping production-ready features, mentoring others, and turning
            ideas into well-structured, scalable solutions.
          </p>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="hero-meta-dot" />
              Colombo · Sri Lanka (Remote-friendly)
            </div>
            <div className="hero-meta-item">3+ years across industry, teaching & internships</div>
          </div>

          <div className="hero-actions">
            <button
                className="btn btn-primary"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let’s work together
            </button>

            <button
                className="btn btn-ghost"
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              View experience
            </button>
          </div>

          <div className="hero-links">
            <span>Also find me on:</span>
            <a href="mailto:seyedruzaik@gmail.com">Email</a>
            <a href="https://github.com/seyed-ruzaik" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-right">
          {/* Profile-style card */}
          <div className="hero-card">
            <div className="hero-card-accent-orbit" />

            <div className="hero-card-header">
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                <div className="hero-avatar">SR</div>
                <div className="hero-card-meta">
                  <strong>Backend Engineer</strong>
                  <span>Oasis Digital Agency · Colombo</span>
                  <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>
                  Node.js · AWS · PostgreSQL
                </span>
                </div>
              </div>
              <div className="hero-pill">Available for opportunities</div>
            </div>

            <div className="hero-card-body">
              Currently leading backend work for an e-commerce platform, improving performance, reliability, and
              developer experience while mentoring interns and collaborating closely with frontend teams.
            </div>

            <div className="hero-card-chips">
              <span className="chip chip-accent">+20% faster delivery</span>
              <span className="chip">99.9% uptime</span>
              <span className="chip">-35% API latency</span>
              <span className="chip">Code reviews & mentoring</span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
