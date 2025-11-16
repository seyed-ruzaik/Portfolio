// src/components/layout/Splash.jsx
// Full-screen splash screen that shows briefly on load.

import React from "react";

const Splash = () => {
    return (
        <div className="splash">
            <div className="splash-inner">
                <div className="splash-logo">SR</div>

                <div className="splash-text">
                    <span className="splash-hello">Hello, I’m</span>
                    <span className="splash-name">Seyed Ruzaik</span>
                    <span className="splash-role">
            Software Engineer · Assistant Lecturer
          </span>
                </div>

                <div className="splash-bar">
                    <div className="splash-bar-fill" />
                </div>
            </div>
        </div>
    );
};

export default Splash;
