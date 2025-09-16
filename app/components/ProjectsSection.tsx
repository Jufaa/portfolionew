"use client"

import React, { useEffect, useState, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};
export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  const projects: Project[] = [{
    id: 1,
    title: 'EvoFit',
    description: 'EvoFit is a fitness app designed to maximize your gym routines by providing personalized workout plans and progress tracking. Users can create routines tailored to their specific goals—whether muscle gain, weight loss, or flexibility. The app includes tools to monitor achievements through visual charts and metrics, helping you stay motivated. EvoFit also allows you to share routines with friends and challenge each other, making fitness more social and fun. Additionally, an integrated AI assistant generates efficient, science-backed workout plans customized to your fitness level, goals, and available time.',
    image: 'https://i.ibb.co/G3p1yg2w/p3.png',
    tags: ['NextJS', "Typescript", 'Tailwind CSS', 'Framer Motion', "NextAuth", "Stripe", "OpenIA", "ExpressJS", "Supabase", "Posgresql",],
    liveUrl: '#',
    githubUrl: '#'
  }, {
    id: 2,
    title: 'ElevatedJob',
    description: 'Website so that companies can have greater recognition,',
    image: 'https://i.ibb.co/pj6QwmjR/p2.png',
    tags: ['Next.js', 'Javascript', 'TailwindCSS'],
    liveUrl: 'https://elevated-job-landing.vercel.app/',
  }, {
    id: 3,
    title: 'Brash',
    description: 'Administrative software for companies and accountants. Developed and designed by professional accountants.',
    image: 'https://i.ibb.co/4K9B0fL/Captura-de-pantalla-2024-03-07-121857.png',
    tags: ['NextJS', 'Typescript', 'ExpressJS'],
    liveUrl: 'https://www.brash.cl/'
  }, {
    id: 4,
    title: 'EvoFit-Prepage',
    description: 'Page for users who enter their email to have benefits, and news.',
    image: 'https://i.ibb.co/hRL0zX7w/p1.png',
    tags: ['NextJS', 'TailwindCSS', 'Resend'],
    liveUrl: 'https://fitness-app-landing-page-9m5ly1pvq-jufaas-projects.vercel.app/s',
  }];
  const categories = ['all', ...new Set(projects.flatMap(project => project.tags))];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.tags.includes(activeCategory));
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return <section id="projects" className="py-12 px-4" style={{
    background: 'linear-gradient(to top, #222831, #393E46)'
  }}>
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="border-b-4 border-[#FFD369] pb-2">
            Mis Proyectos
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm transition-all ${activeCategory === category ? 'bg-[#FFD369] text-[#222831] font-medium' : 'bg-[#393E46]/60 text-[#EEEEEE] hover:bg-[#393E46]'}`}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>)}
        </div>
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 translate-y-10 transition-all duration-1000">
          {filteredProjects.map((project, index) => <div key={project.id} className="bg-[#222831]/80 backdrop-blur-sm rounded-xl overflow-hidden border border-[#EEEEEE]/10 hover:border-[#FFD369]/50 transition-all hover:transform hover:scale-[1.02] group" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-110 duration-700" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FFD369] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#EEEEEE]/80 mb-3 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <span key={tag} className="text-xs px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-full">
                      {tag}
                    </span>)}
                </div>
                <div className="flex gap-3">
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#222831] bg-[#FFD369] hover:opacity-90 px-3 py-1.5 rounded transition-all">
                      <ExternalLinkIcon size={14} />
                      View Project
                    </a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm border border-[#EEEEEE]/20 hover:border-[#FFD369] text-[#EEEEEE]/80 hover:text-[#FFD369] px-3 py-1.5 rounded transition-colors">
                      <GithubIcon size={14} />
                      Code
                    </a>}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}