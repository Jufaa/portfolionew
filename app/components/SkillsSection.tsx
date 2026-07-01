"use client"

import React from 'react';

const skillGroups = [
  {
    title: "languages",
    skills: ["typescript", "javascript", "java", "python"]
  },
  {
    title: "frontend",
    skills: ["react", "next.js", "tailwind css", "zustand", "tanstack react query"]
  },
  {
    title: "backend",
    skills: ["node.js", "express.js", "prisma orm", "sequelize orm", "zod", "passport.js", "nextauth.js"]
  },
  {
    title: "databases",
    skills: ["postgresql", "mysql", "mongodb", "supabase"]
  },
  {
    title: "auth & security",
    skills: ["jwt", "oauth 2.0", "rbac", "2fa (totp)"]
  },
  {
    title: "architecture",
    skills: ["rest apis", "clean architecture", "hexagonal architecture", "repository pattern", "multi-tenant saas"]
  },
  {
    title: "cloud & devops",
    skills: ["docker", "docker compose", "github actions", "railway", "vercel"]
  },
  {
    title: "tools & integrations",
    skills: ["git", "github", "jest", "supertest", "swagger/openapi", "stripe", "socket.io", "afip/arca"]
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
