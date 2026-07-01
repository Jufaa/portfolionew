"use client"

import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'software engineer';
  let idx = 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        if (idx < fullText.length) {
          idx++;
          setTypedText(fullText.slice(0, idx));
        } else {
          clearInterval(interval);
          setTimeout(() => setShowCursor(false), 2000);
        }
      }, 80);
      return () => clearInterval(interval);
    }, 800);
    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="top" className="hero profile-hero profile-hero-ascii" data-reveal>
      <div className="profile-hero-grid">
        <div className="profile-hero-copy">
          <p className="hero-kicker">
            <span className="terminal-prompt">~</span>
            <span>portfolio</span>
            <span>/</span>
            <span>2026</span>
          </p>
          <h1 className="hero-name">
            <span data-scramble="juan cruz francitorra">juan cruz francitorra</span>
          </h1>
          <p className="hero-about">
            <span className="typing-text">{typedText}</span>
            {showCursor && <span className="typing-cursor">|</span>}
          </p>
          <p className="hero-subline">crafting engaging and functional digital experiences.</p>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>available for opportunities</span>
            <span className="status-pill">Remote</span>
          </div>
          <div className="hero-links-plain">
            <a href="https://github.com/jufaa" target="_blank" rel="noopener noreferrer" data-magnetic>github ↗</a>
            <a href="https://www.linkedin.com/in/juanfrancitorra/" target="_blank" rel="noopener noreferrer" data-magnetic>linkedin ↗</a>
            <a href="mailto:juanfrancitorra@gmail.com" data-magnetic>email ↗</a>
          </div>
          <a
            href="/francitorra-softwareengineer.pdf"
            download="CV - Francitorra Juan Cruz.pdf"
            className="hero-cv-btn"
            data-magnetic
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            download resume
          </a>
        </div>
      </div>
    </section>
  );
}
