// src/components/layout/Footer.jsx
// Simple footer with dynamic year.

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
      <footer>
        © {year} Seyed Ruzaik
      </footer>
  );
};

export default Footer;
