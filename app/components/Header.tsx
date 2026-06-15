"use client"

import React from 'react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <button className="nav-brand" onClick={() => scrollToSection('top')}>
          {'<juan />'}
        </button>
        <nav aria-label="main navigation">
          <ul className="nav-list">
            <li><button onClick={() => scrollToSection('projects')}>projects</button></li>
            <li><button onClick={() => scrollToSection('experience')}>experience</button></li>
            <li><button onClick={() => scrollToSection('skills')}>skills</button></li>
            <li><button onClick={() => scrollToSection('contact')}>contact</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
