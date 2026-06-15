"use client"
import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { SkillsSection } from './components/SkillsSection';
import { SillyStats } from './components/SillyStats';
import { GitHubGraph } from './components/GitHubGraph';
import { Footer } from './components/Footer';
import { ClientEffects } from './components/ClientEffects';

export function Homes() {
  return (
    <div className="min-h-screen">
      <ClientEffects />
      <div className="scroll-progress" id="scroll-progress" aria-hidden="true"></div>
      <div className="site-backdrop" aria-hidden="true"></div>
      <Header />
      <main className="page">
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <SillyStats />
        <GitHubGraph />
      </main>
      <Footer />
      <button
        id="vision-toggle"
        className="vision-toggle"
        type="button"
        aria-label="Toggle retro texture"
        aria-pressed="false"
        title="Enable retro texture"
      >
        <svg className="icon-eye-open" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M1.5 12s3.8-6.5 10.5-6.5S22.5 12 22.5 12s-3.8 6.5-10.5 6.5S1.5 12 1.5 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
          <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6"></circle>
        </svg>
        <svg className="icon-eye-closed" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"></path>
          <path d="M2 12s3.5-6 10-6c2.2 0 4.1.6 5.8 1.6M22 12s-3.5 6-10 6c-2.2 0-4.1-.6-5.8-1.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
    </div>
  );
}
