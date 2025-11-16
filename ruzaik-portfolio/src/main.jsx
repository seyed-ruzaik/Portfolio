// src/main.jsx
// Entry point for the React app. Vite will mount this into index.html (#root).

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css"; // global styles for the entire site

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        {/* App is the root component that contains layout + sections */}
        <App />
    </React.StrictMode>
);
