"use client"

import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'developer & diseñador';
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
            <span data-scramble="Juan Cruz Francitorra">Juan Cruz Francitorra</span>
          </h1>
          <p className="hero-about">
            <span className="typing-text">{typedText}</span>
            {showCursor && <span className="typing-cursor">|</span>}
          </p>
          <p className="hero-subline">crafting engaging and functional digital experiences.</p>
          <div className="hero-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span>Available for opportunities</span>
            <span className="status-pill">Remote</span>
          </div>
          <div className="hero-links-plain">
            <a href="https://github.com/jufa" target="_blank" rel="noopener noreferrer" data-magnetic>github ↗</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" data-magnetic>linkedin ↗</a>
            <a href="mailto:jufaworks@gmail.com" data-magnetic>email ↗</a>
          </div>
        </div>
        <div className="profile-ascii" aria-hidden="true">
          <pre className="ascii-artwork ascii-hat-art">⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠛⣉⣉⣉⣉⣛⣛⣛⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣫⣵⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣤⣈⠙⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢋⡉⠁⣴⡶⠶⠶⠤⠤⠲⠂⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣈⠛⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⣋⣴⡿⢫⣶⣿⣿⠿⠟⠛⠛⠊⠃⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠋⠰⢚⣫⣵⣶⠿⠛⣡⣶⣿⣿⣿⣿⣿⣷⢸⠗⣹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠀⣀⣤⣤⡀⠉⢉⠙⠛⠻⠿⣿⣿⣿⣿
⣿⣿⡿⣉⣭⣴⠆⣠⡶⠿⣛⣩⣤⣶⣿⡿⠟⣋⣥⣶⣶⣶⣶⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡉⠙⢿⣿⣿⣿⣶⣾⣿⣿⣿⣶⣦⣄⠉⠻⣿
⣿⢋⣀⣭⣭⢁⣿⡟⣁⣾⣿⠿⢿⣿⠋⢴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⣷⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⡀⠸
⣧⣸⣿⡿⢡⣿⣿⣿⣿⡟⢁⣴⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣄⣶⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠆⠀⠀⢒⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢰
⣿⣿⡟⣡⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⠿⠟⠛⣛⣛⣛⣛⣛⣛⣛⣫⣥⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⠁⠀⠀⠀⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡟⢀⣾
⣿⠏⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⠂⠀⠀⠀⠉⠀⠘⠁⠛⠿⠿⠿⠏⢻⣿⡿⠿⠉⠛⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢠⣾⣿
⣯⣴⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⠿⣿⠿⠋⣠⣴⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⣠⣴⣶⣶⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⠿⠃⣀⣴⣾⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢀⣾⣿⣿⣿⣿⣿⣿⣷⣴⣦⣤⣤⣤⣤⣤⣤⣤⣤⣤⣤⣴⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⡿⠟⠛⠉⢠⣴⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⢀⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠿⠋⣁⠰⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠀⠀⠀⠀⠀⠀⠀⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⠟⣋⣴⣾⣿⣿⠀⠀⠙⠿⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠛⠉⠀⠀⠀⠀⠀⠀⠀⢀⡀⠹⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⢃⣼⣿⣿⣿⣿⡏⠄⠀⠀⠀⠀⠉⠛⠛⠛⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠛⠋⠁⣠⣶⠀⠀⠀⠀⠀⠀⠀⢀⣀⠀⠘⣿⣄⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣣⣾⣿⣿⣿⣷⣿⡇⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠉⠀⠀⠀⠀⠀⠀⠀⠰⢾⣶⣴⡾⠟⢁⣀⣤⠀⠀⢸⡆⠀⠀⠉⠳⣦⣸⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡆⢸⡇⠀⠀⠀⠀⠀⢀⠀⠀⠀⠄⠀⠀⠀⠂⠀⠀⣠⣤⣄⡀⠐⢶⣶⣶⠺⠏⠉⣽⡟⠀⢠⡿⠁⠀⠹⣿⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣮⢿⣄⣷⡀⠀⠀⠀⠰⣶⣶⣶⣶⣶⣶⡆⠀⠸⣿⣿⣿⣿⣿⣷⣿⣯⣴⣬⣿⣿⠃⠴⠋⢸⣿⣷⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣖⢿⣿⣿⣦⣀⠘⢶⣿⣿⣿⣿⣿⣿⣿⣧⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⣴⣤⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⡄⠻⣿⣿⣿⣿⣿⣿⣦⣤⣼⣿⣿⣿⣿⣿⣿⣿⣿⡿⣣⣶⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⣀⠈⠻⣿⣿⣯⣭⣭⣭⣭⣭⣭⣭⣭⣿⣿⣿⠟⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⡆⣧⠈⠛⢿⣿⣿⣧⣤⣤⣽⣿⣿⣿⠟⢁⠀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡯⣿⣿⣿⣿⣿⣿⡇⣿⣧⠀⠀⠈⠙⠻⢿⣿⣿⠿⠋⠀⠀⣏⠀⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠿⠿⠿⠿⠿⣿⠿⢧⣿⣿⣇⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⣼⣿⡄⢿⣿⡿⠿⠿⠟⠛⠛⠻⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⡿⢁⣴⣶⣾⣿⣿⣷⣶⣶⡆⣸⣿⣿⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⣧⡀⢤⣶⣶⣾⣿⣿⣿⣿⣿⣶⣦⡀⠙⢿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡟⠁⣿⣿⣿⣿⠿⠛⠋⠉⣁⣰⣿⣿⡜⣿⣿⡄⠀⠀⠈⢀⣴⡆⠀⣸⣿⣿⣿⣿⣦⡹⠿⠛⠛⠻⠿⢿⣿⣿⣿⣿⣦⡈⢻⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣶⣿⣿⣿⡿⢁⣤⣤⣄⠰⣿⣿⣿⣿⡇⠸⣿⣿⡀⠀⢤⣾⣿⠁⢀⣿⠟⣿⣿⣿⣿⣿⣦⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⣿⣦⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢃⣾⣿⣿⣿⡆⠹⣿⣿⣿⡇⠀⢻⣿⣷⠀⢸⣿⡟⠀⣸⡏⢰⣿⣿⣿⣿⣿⠏⣸⣿⣿⣶⣶⣤⡀⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠈⣉⣉⣉⣉⣩⣀⠊⠛⠿⠗⠀⠘⣿⣿⣧⠈⣿⣧⣴⡿⠀⣾⠟⠉⣩⣥⡀⢀⣤⣤⣤⣤⣤⣤⣤⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣦⣼⣿⣶⣤⡀⢹⣿⣿⣇⠹⣿⠟⠁⣰⣇⣴⣾⣿⡿⢁⣿⣿⣿⣿⣿⣿⣿⣿⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⣿⣿⣿⣦⣤⣤⣤⣿⣿⣿⣿⣿⣥⣾⣿⣿⣿⣿⣿⣿⣿⣿⠄⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿</pre>
          <div className="ascii-glow"></div>
        </div>
      </div>
    </section>
  );
}
