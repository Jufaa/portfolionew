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
    title: "junior / trainee fullstack developer",
    org: "servi",
    role: "2023 - 2024",
    bullets: [
      "responsible for creating the platform, building backend and frontend content using next.js, react, node.js, mongodb and others.",
      "developed full-stack features from scratch in a fast-paced environment."
    ]
  },
  {
    id: 2,
    title: "freelancer",
    org: "self-employed",
    role: "2023 - present",
    bullets: [
      "freelance projects of all kinds: frontend and backend web development, video editing, reels, and ui/ux design.",
      "delivered custom solutions for multiple clients across different industries."
    ]
  },
  {
    id: 3,
    title: "bachelor's degree in computer science",
    org: "universidad nacional de rio cuarto",
    role: "2023 - present",
    bullets: [
      "studied computer science fundamentals, algorithms, data structures, and project management.",
      "continuously learning new technologies and improving skills."
    ]
  },
  {
    id: 4,
    title: "courses & bootcamps",
    org: "multiple platforms",
    role: "2022 - present",
    bullets: [
      "constantly signing up for courses and bootcamps to continue learning technologies or improve existing skills."
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
