"use client"

import React from 'react';

export function Footer() {
  return (
    <footer id="contact" className="site-footer footer-pro" data-reveal>
      <div className="footer-pro-left">
        <p className="footer-kicker" data-scramble="contact">contact</p>
        <p className="footer-title">open to freelance work, collaborations, and new opportunities.</p>
        <p className="footer-meta">© 2026 juan cruz francitorra.</p>
      </div>
      <div className="footer-actions">
        <a href="mailto:juanfrancitorra@gmail.com" data-magnetic>email ↗</a>
        <a href="https://github.com/Jufaa" target="_blank" rel="noopener noreferrer" data-magnetic>github ↗</a>
        <a href="https://www.linkedin.com/in/juanfrancitorra/" target="_blank" rel="noopener noreferrer" data-magnetic>linkedin ↗</a>
      </div>
    </footer>
  );
}
