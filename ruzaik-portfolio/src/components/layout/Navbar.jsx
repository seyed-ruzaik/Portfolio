// src/components/layout/Navbar.jsx
// Top navigation bar with smooth scrolling and mobile menu toggle.

import React, { useState } from "react";

const SECTIONS = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "highlights", label: "Highlights" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Scroll to section and close mobile nav
    const handleNavClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        setOpen(false);
    };

    return (
        <nav className="nav">
            {/* Left: logo + title */}
            <div className="nav-left">
                <div className="logo-circle">SR</div>
                <div className="nav-title">
                    <div className="nav-name">Seyed Ruzaik</div>
                    <div className="nav-tagline">Software Developer | Tech Blogger | Assistant Lecturer | AI Researcher</div>
                </div>
            </div>

            {/* Desktop links + mobile dropdown share same list */}
            <div className={`nav-links ${open ? "open" : ""}`} id="navLinks">
                {SECTIONS.map((section) => (
                    <button
                        key={section.id}
                        type="button"
                        className="nav-link-btn"
                        onClick={() => handleNavClick(section.id)}
                    >
                        {section.label}
                    </button>
                ))}
            </div>

            {/* Mobile hamburger button */}
            <button
                className={`nav-toggle ${open ? "open" : ""}`}
                id="navToggle"
                aria-label="Toggle navigation"
                onClick={() => setOpen((prev) => !prev)}
            >
                <span />
            </button>
        </nav>
    );
};

export default Navbar;
