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
    title: "recoverpay",
    url: "https://recoverpay-psi.vercel.app",
    date: "2024",
    stack: ["typescript", "next.js", "express.js", "postgresql", "prisma", "stripe", "docker"],
    summary: "multi-tenant saas platform for automated stripe payment recovery.",
    points: [
      "architected and developed a multi-tenant saas platform using express.js, typescript, prisma orm, and postgresql.",
      "integrated stripe connect, checkout, billing portal, and webhook processing with idempotent event handling and configurable payment retry workflows.",
      "implemented jwt authentication, 2fa (totp), rbac, rate limiting, xss protection, and security middleware using helmet and zod validation.",
      "built a responsive next.js dashboard with react, tailwind css, shadcn/ui, and react hook form for payment, subscription, and tenant management.",
      "containerized with docker, automated ci/cd pipelines using github actions, and deployed on railway."
    ],
    size: 'large'
  },
  {
    id: 2,
    title: "erp system",
    url: "https://erp-theta-three.vercel.app/",
    date: "2024",
    stack: ["typescript", "next.js", "node.js", "express", "postgresql", "prisma", "docker"],
    summary: "full-stack erp system for smes using hexagonal architecture.",
    points: [
      "designed and developed a full-stack erp system using hexagonal architecture, typescript, next.js, express, and postgresql.",
      "built secure rest apis with jwt authentication, role-based access control (rbac), zod validation, and prisma orm.",
      "integrated afip/arca electronic invoicing (soap, cae, sire) supporting multiple invoice types and fiscal compliance workflows.",
      "containerized the backend with docker, deployed on railway and vercel, and implemented a scalable multi-tenant architecture."
    ],
    size: 'large'
  },
  {
    id: 3,
    title: "evofit",
    url: "https://evofitweb.vercel.app/",
    date: "2024",
    stack: ["typescript", "next.js", "express.js", "flutter", "postgresql", "mysql"],
    summary: "multi-platform fitness platform with web, api, and mobile app.",
    points: [
      "engineered a multi-platform fitness platform consisting of an express.js rest api, next.js web application, and flutter mobile app, following clean architecture and repository pattern principles.",
      "implemented secure authentication using jwt, google oauth, nextauth, and role-based access control (rbac) across web and backend services.",
      "built real-time features with socket.io, rest apis, prisma, sequelize, and swagger/openapi documentation."
    ],
    size: 'large'
  },
  {
    id: 4,
    title: "open source",
    url: "https://github.com/Jufaa",
    date: "2024",
    stack: ["node.js", "github"],
    summary: "contributions to the official node.js website and community projects.",
    points: [
      "contributed to the official node.js website by submitting pull requests and improving documentation.",
      "fixed ui issues and improved website functionality through pull requests reviewed by the node.js maintainers.",
      "collaborated with maintainers through code reviews and github discussions."
    ],
    size: 'small'
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
