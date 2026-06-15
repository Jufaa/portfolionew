"use client"

import React from 'react';

export function HeroSection() {
  return (
    <section id="top" className="hero profile-hero profile-hero-ascii" data-reveal>
      <div className="profile-hero-grid">
        <div className="profile-hero-copy">
          <p className="hero-kicker">
            <span>portfolio</span>
            <span>/</span>
            <span>2026</span>
          </p>
          <h1 className="hero-name">
            <span>Juan Cruz Francitorra</span>
          </h1>
          <p className="hero-about">
            <span>Developer &amp; Diseñador.</span>
          </p>
          <p className="hero-subline">crafting engaging and functional digital experiences.</p>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Available for opportunities</span>
            <span className="status-pill">Remote</span>
          </div>
          <div className="hero-links-plain">
            <a href="https://github.com/jufa" target="_blank" rel="noopener noreferrer">github ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin ↗</a>
            <a href="mailto:jufaworks@gmail.com">email ↗</a>
          </div>
        </div>
        <div className="profile-ascii" aria-hidden="true"></div>
      </div>
    </section>
  );
}
