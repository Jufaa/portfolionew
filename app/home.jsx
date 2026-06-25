"use client"
import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { GitHubGraph } from './components/GitHubGraph';
import { Footer } from './components/Footer';
import { ClientEffects } from './components/ClientEffects';

export function Homes() {
  useEffect(() => {
    const visionToggle = document.getElementById('vision-toggle');
    const storageKey = 'portfolio-vision';

    const setVision = (mode) => {
      document.body.dataset.vision = mode;
      if (visionToggle) {
        const icons = visionToggle.querySelectorAll('svg');
        icons.forEach(i => i.style.display = 'none');
        if (mode === 'dark') icons[0].style.display = 'block';
        else if (mode === 'light') icons[1].style.display = 'block';
        else if (mode === 'retro') icons[2].style.display = 'block';
      }
    };

    try {
      const stored = localStorage.getItem(storageKey);
      setVision(stored || 'dark');
    } catch { setVision('dark'); }

    if (visionToggle) {
      visionToggle.addEventListener('click', () => {
        const modes = ['dark', 'light', 'retro'];
        const current = document.body.dataset.vision || 'dark';
        const next = modes[(modes.indexOf(current) + 1) % modes.length];
        setVision(next);
        try { localStorage.setItem(storageKey, next); } catch {}
      });
    }
  }, []);

  return (
    <div className="min-h-screen">
      <ClientEffects />
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
      <div className="site-backdrop" aria-hidden="true"></div>
      <div className="scanlines" aria-hidden="true"></div>
      <Header />
      <main className="page">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <GitHubGraph />
      </main>
      <Footer />
      <button
        id="vision-toggle"
        className="vision-toggle"
        type="button"
        aria-label="Toggle theme mode"
        title="Toggle theme"
      >
        {/* Dark */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        {/* Light */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}>
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        {/* Retro CRT */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'none' }}>
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      </button>
    </div>
  );
}
