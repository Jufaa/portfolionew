"use client"

import React from 'react';

type Experience = {
  id: number;
  title: string;
  org: string;
  role: string;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "junior full-stack developer",
    org: "servi — buenos aires, argentina",
    role: "2023 – 2024 · remote",
    bullets: [
      "designed and developed full-stack features using react, typescript, and node.js across frontend and backend systems.",
      "built and maintained rest apis, optimized application performance, and contributed to scalable system architecture.",
      "led sprint planning and task allocation during agile development cycles, helping coordinate the team's work and unblock technical issues.",
      "performed code reviews, provided technical guidance to teammates, and helped maintain code quality and development standards.",
      "collaborated with cross-functional teams including designers, stakeholders, and developers."
    ]
  },
  {
    id: 2,
    title: "freelance software developer",
    org: "self-employed",
    role: "2023 – present",
    bullets: [
      "owned the end-to-end software development lifecycle, from requirements gathering and system design to implementation, deployment, and ongoing maintenance.",
      "designed and developed custom full-stack applications, internal tools, and business solutions for clients across different industries.",
      "built rest apis, backend services, and responsive web applications using typescript, node.js, react, and next.js.",
      "deployed and maintained applications using docker, vercel, railway, and cloud services."
    ]
  },
  {
    id: 3,
    title: "open source contributor",
    org: "node.js & community projects",
    role: "2024 – present",
    bullets: [
      "contributed to the official node.js website by submitting pull requests and improving documentation and website functionality.",
      "fixed ui issues and improved functionality through pull requests reviewed by the node.js maintainers.",
      "collaborated with maintainers through code reviews and github discussions."
    ]
  },
  {
    id: 4,
    title: "bachelor's degree in computer science",
    org: "national university of río cuarto",
    role: "2023 – 2027 · expected graduation",
    bullets: [
      "relevant coursework: algorithms and data structures, operating systems, database systems, software engineering."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="panel" data-reveal>
      <div className="panel-head">
        <p className="label" data-scramble="experience">experience</p>
      </div>
      <div className="stack">
        {experiences.map((exp) => (
          <article key={exp.id} className="entry" data-tilt>
            <div className="entry-top">
              <h3 className="entry-title">{exp.title}</h3>
            </div>
            <p className="entry-org">{exp.org}</p>
            <p className="entry-role">{exp.role}</p>
            <ul className="entry-bullets">
              {exp.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
