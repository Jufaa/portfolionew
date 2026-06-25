"use client"

import React from 'react';

const skillGroups = [
  {
    title: "languages",
    skills: ["javascript", "java", "python", "typescript", "html/css"]
  },
  {
    title: "frameworks",
    skills: ["react", "next.js", "node.js", "express.js"]
  },
  {
    title: "tools",
    skills: ["supabase", "prisma", "mysql", "tailwind css"]
  },
  {
    title: "other",
    skills: ["framer motion", "stripe", "openai", "resend"]
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="panel" data-reveal>
      <div className="panel-head">
        <p className="label" data-scramble="skills">skills</p>
      </div>
      <div className="skill-columns">
        {skillGroups.map((group) => (
          <article key={group.title} className="skill-group" data-tilt>
            <h3>{group.title}</h3>
            <div className="chip-cloud">
              {group.skills.map((skill) => (
                <span key={skill} className="chip" data-magnetic>{skill}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
