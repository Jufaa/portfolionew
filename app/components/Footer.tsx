"use client"

import React from 'react';

export function Footer() {
  return (
    <footer id="contact" className="site-footer footer-pro" data-reveal>
      <div className="footer-pro-left">
        <p className="footer-kicker" data-scramble="contact">contact</p>
        <p className="footer-title">Open to freelance work, collaborations, and new opportunities.</p>
        <p className="footer-meta">© 2026 Juan Cruz Francitorra.</p>
      </div>
      <div className="footer-actions">
        <a href="mailto:jufaworks@gmail.com" data-magnetic>email ↗</a>
        <a href="https://github.com/jufa" target="_blank" rel="noopener noreferrer" data-magnetic>github ↗</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-magnetic>linkedin ↗</a>
      </div>
    </footer>
  );
}
