"use client"

import React from 'react';

const skillGroups = [
  {
    title: "languages",
    skills: ["JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    title: "frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js"]
  },
  {
    title: "tools",
    skills: ["Supabase", "Prisma", "MySQL", "Tailwind CSS"]
  },
  {
    title: "other",
    skills: ["Framer Motion", "Stripe", "OpenAI", "Resend"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="panel" data-reveal>
      <div className="panel-head">
        <p className="label">skills</p>
      </div>
      <div className="skill-columns">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="chip-cloud">
              {group.skills.map((skill) => (
                <span key={skill} className="chip">{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
