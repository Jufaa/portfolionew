/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useRef } from 'react';
import { CodeIcon, BrainIcon, PaletteIcon, DownloadIcon } from 'lucide-react';
export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
const skillsRef = useRef<HTMLDivElement>(null);
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
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);
  // Tech stack data grouped by category
  const techStackCategories = {
    development: [{
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    }, {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    }, {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    }, {
      name: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
    }, {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }, {
        name: 'Express.js',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
      
      },
      {
        name: "Mysql",
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        
      },
    {
      name: 'Supabase',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
    },
    {
      name: 'Prisma',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg'

      
    },{
      name: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    }],
  };
  const categoryIcons = {
    development: <CodeIcon size={28} className="text-[#FFD369]" />,
  };
  const categoryLabels = {
    development: 'Development',
  };
  return <section id="about" className="py-12 px-4 bg-gradient-to-b from-[#222831] to-[#393E46] relative">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FFD369]/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#EEEEEE]/10 blur-3xl rounded-full"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="relative">
            <span className="border-b-4 border-[#FFD369] pb-2">About me</span>
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#FFD369] rounded-full"></span>
          </span>
        </h2>
        <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
          <div className="inline-block mb-3 px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-md text-sm font-medium">
            ¿Who am i?
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#FFD369]">
            A developer passionate about creating exceptional digital experiences
          </h3>
          <p className="text-base text-[#EEEEEE] mb-4 leading-relaxed">
        I am a passionate web developer and designer with expertise in both frontend and backend development, creating engaging and functional digital experiences. My approach combines technical creativity with user-centered design to build modern web solutions that look great and provide exceptional user experiences.

With over 2 years of experience in the industry, I constantly strive to improve my skills, explore new technologies, and take on challenges that help me grow professionally. Known for being open, communicative, and collaborative, I enjoy working with others to deliver impactful projects.

zI am always seeking new opportunities to learn and make a difference in the digital world.
          </p>
          <a href="https://export-download.canva.com/ift5k/DAF97Zift5k/34/0-202014536380734434.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH5AO7UJ26%2F20250916%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250916T054604Z&X-Amz-Expires=33645&X-Amz-Signature=f453376737eedd3bb4c481f93a9b128c7b53d5e8a01b8ffda7e7b8116ca6ef7f&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV%2520-%2520FRANCITORRA%2520JUAN%2520CRUZ%2520FULLSTACK.pdf&response-expires=Tue%2C%2016%20Sep%202025%2015%3A06%3A49%20GMT" className="inline-flex items-center gap-2 bg-[#FFD369] text-[#222831] px-5 py-2 rounded-md transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFD369]/25 font-medium">
            <DownloadIcon size={16} />
            Dowload Resume
          </a>
        </div>
        <div ref={skillsRef} className="mt-16 opacity-0 translate-y-10 transition-all duration-1000 delay-300">
          <h3 className="text-xl font-bold mb-8 text-center text-[#FFD369]">
            My Tech Tecnologías
          </h3>
          <div>
            {Object.entries(techStackCategories).map(([category, technologies]) => <div key={category} className="bg-[#393E46]/50 backdrop-blur-sm p-5 rounded-xl border border-[#EEEEEE]/10 hover:border-[#FFD369]/50 transition-all hover:transform hover:scale-105 group">
                  <div className="w-14 h-14 bg-[#222831] rounded-full flex items-center justify-center mb-4 mx-auto transition-all">
                    {categoryIcons[category as keyof typeof categoryIcons]}
                  </div>
                  <h4 className="text-lg font-bold mb-3 text-center">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-2">
                    {technologies.map(tech => <div key={tech.name} className="flex flex-col items-center group">
                        <div className="w-60 h-10 bg-[#222831] rounded-lg p-2 flex items-center justify-center mb-1 transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-[#FFD369]/20">
                          <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xs text-[#EEEEEE] group-hover:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>)}
                  </div>
                </div>)}
          </div>
        </div>
      </div>
    </section>;
}