// src/App.jsx
import React, { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Splash from "./components/layout/Splash";

import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import Highlights from "./components/sections/Highlights";
import Contact from "./components/sections/Contact";

function App() {
    const [showSplash, setShowSplash] = useState(true);

    // Hide splash after a short delay
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 2200); // 2.2 seconds
        return () => clearTimeout(timer);
    }, []);

    // Reveal-on-scroll logic for sections
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll(".reveal");
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <div className="app-root">
            {/* Splash overlay */}
            {showSplash && <Splash />}

            <div className={`page ${showSplash ? "page--blurred" : ""}`}>
                <header>
                    <Navbar />
                </header>

                <main>
                    <Hero />
                    <Experience />
                    <Skills />
                    <Highlights />
                    <Contact />
                </main>

                <Footer />
            </div>
        </div>
    );
}

export default App;
