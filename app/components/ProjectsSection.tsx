"use client"

import React from 'react';

type Project = {
  id: number;
  title: string;
  url: string;
  date: string;
  stack: string[];
  summary: string;
  points: string[];
  size: 'large' | 'small';
};

const projects: Project[] = [
  {
    id: 1,
    title: "EvoFit",
    url: "#",
    date: "2024",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "NextAuth", "Stripe", "OpenAI", "Express.js", "Supabase", "PostgreSQL"],
    summary: "Fitness app designed to maximize gym routines with personalized workout plans and progress tracking.",
    points: [
      "AI assistant generates efficient, science-backed workout plans customized to fitness level and goals.",
      "Tools to monitor achievements through visual charts and metrics with social sharing features."
    ],
    size: 'large'
  },
  {
    id: 2,
    title: "ElevatedJob",
    url: "https://elevated-job-landing.vercel.app/",
    date: "2024",
    stack: ["Next.js", "JavaScript", "TailwindCSS"],
    summary: "Website so that companies can have greater recognition.",
    points: [
      "Landing page for company branding and visibility.",
      "Built with responsive design and modern UI patterns."
    ],
    size: 'small'
  },
  {
    id: 3,
    title: "Brash",
    url: "https://www.brash.cl/",
    date: "2024",
    stack: ["Next.js", "TypeScript", "Express.js"],
    summary: "Administrative software for companies and accountants. Developed and designed by professional accountants.",
    points: [
      "Full-stack administrative platform with backend API.",
      "Designed for professional accounting workflows."
    ],
    size: 'small'
  },
  {
    id: 4,
    title: "EvoFit-Prepage",
    url: "https://fitness-app-landing-page-9m5ly1pvq-jufaas-projects.vercel.app/",
    date: "2024",
    stack: ["Next.js", "TailwindCSS", "Resend"],
    summary: "Landing page for users who enter their email to have benefits and news.",
    points: [
      "Pre-launch page with email capture for early access.",
      "Integrated email notifications with Resend."
    ],
    size: 'large'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="panel projects-panel" data-reveal>
      <div className="panel-head projects-head">
        <p className="label" data-scramble="my projects">my projects</p>
        <a className="panel-link projects-cta" href="https://github.com/jufa" target="_blank" rel="noopener noreferrer" data-magnetic>
          view more projects ↗
        </a>
      </div>
      <div className="projects-masonry">
        {projects.map((project) => (
          <article
            key={project.id}
            className={`project-card project-card-${project.size}`}
            data-tilt
          >
            <div className="project-top">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-title">
                {project.title} <span>↗</span>
              </a>
              <p className="project-date">{project.date}</p>
            </div>
            <div className="project-stack">
              {project.stack.map((tech) => (
                <span key={tech} className="stack-chip">{tech}</span>
              ))}
            </div>
            <p className="project-summary">{project.summary}</p>
            <ul className="project-points">
              {project.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
