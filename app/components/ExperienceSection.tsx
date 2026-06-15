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
    title: "Junior / Trainee Fullstack Developer",
    org: "Servi",
    role: "2023 - 2024",
    bullets: [
      "Responsible for creating the platform, building backend and frontend content using Next.js, React, Node.js, MongoDB and others.",
      "Developed full-stack features from scratch in a fast-paced environment."
    ]
  },
  {
    id: 2,
    title: "Freelancer",
    org: "Self-employed",
    role: "2023 - Present",
    bullets: [
      "Freelance projects of all kinds: frontend and backend web development, video editing, reels, and UI/UX design.",
      "Delivered custom solutions for multiple clients across different industries."
    ]
  },
  {
    id: 3,
    title: "Bachelor's Degree in Computer Science",
    org: "Universidad Nacional De Rio Cuarto",
    role: "2023 - Present",
    bullets: [
      "Studied computer science fundamentals, algorithms, data structures, and project management.",
      "Continuously learning new technologies and improving skills."
    ]
  },
  {
    id: 4,
    title: "Courses & Bootcamps",
    org: "Multiple platforms",
    role: "2022 - Present",
    bullets: [
      "Constantly signing up for courses and bootcamps to continue learning technologies or improve existing skills."
    ]
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="panel" data-reveal>
      <div className="panel-head">
        <p className="label">experience</p>
        <a className="panel-link resume-cta" href="https://export-download.canva.com/ift5k/DAF97Zift5k/34/0-202014536380734434.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250916T054604Z&X-Amz-Expires=33645&X-Amz-Signature=f453376737eedd3bb4c481f93a9b128c7b53d5e8a01b8ffda7e7b8116ca6ef7f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV%2520-%2520FRANCITORRA%2520JUAN%2520CRUZ%2520FULLSTACK.pdf&response-expires=Tue%2C%2016%20Sep%202025%2015%3A06%3A49%20GMT" target="_blank" rel="noopener noreferrer">
          view resume ↗
        </a>
      </div>
      <div className="stack">
        {experiences.map((exp) => (
          <article key={exp.id} className="entry">
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
