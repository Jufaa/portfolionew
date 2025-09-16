"use client"

import React, { useEffect, useRef } from 'react';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
type Experience = {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  type: 'work' | 'education';
};
export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const experiences: Experience[] = [{
    id: 2,
    title: 'Junior / Trainee Fullstack Developer',
    company: 'Servi',
    period: '2023 - 2024',
    description: 'Responsible for creating the platform, creating backend and frontend content, using languages ​​such as NextJS, ReactJS, NodeJS, MongoDB, among others',
    type: 'work'
  }, {
    id: 1,
    title: 'Freelancer',
    company: 'Me',
    period: '2023 - Actually',
    description: 'Freelance projects of all kinds, frontend and backend web development, video editor, reels, and ui / ux editor.',
    type: 'work'
  }, {
    id: 5,
    title: "Bachelor's Degree in Computer Science",
    company: 'Universidad Nacional De Rio Cuarto',
    period: '2023 - Actually',
    description: 'Studied computer science fundamentals, algorithms, data structures, and project management',
    type: 'education'
  }, {
    id: 7,
    title: "Courses, Bootcamps",
    company: 'Mulltiplies companys',
    period: '2022 - Actually',
    description: 'Whenever I can, I sign up for a course or bootcamp to continue learning technologies or improve.',
    type: 'education'
  }];
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const timelineItems = document.querySelectorAll('.timeline-item');
        timelineItems.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('opacity-100');
            item.classList.remove('opacity-0', 'translate-y-10');
          }, 200 * index);
        });
      }
    }, {
      threshold: 0.1
    });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);
  return <section id="experience" className="py-12 px-4 bg-[#393E46]" ref={sectionRef}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="border-b-4 border-[#FFD369] pb-2">
            Experience & Education
          </span>
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#FFD369]/30"></div>
          {experiences.map((experience, index) => <div key={experience.id} className={`timeline-item mb-8 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} opacity-0 translate-y-10 transition-all duration-700`}>
              <div className="md:w-1/2 relative">
                <div className={`bg-[#393E46] p-4 rounded-lg border border-[#FFD369]/20 hover:border-[#FFD369]/50 transition-all ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-[#FFD369]/10 rounded-full flex items-center justify-center">
                      {experience.type === 'work' ? <BriefcaseIcon size={16} className="text-[#FFD369]" /> : <GraduationCapIcon size={16} className="text-[#FFD369]" />}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#EEEEEE]">
                        {experience.title}
                      </h3>
                      <p className="text-[#FFD369] text-xs">
                        {experience.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#EEEEEE]/70 text-xs mb-2">
                    {experience.period}
                  </p>
                  <p className="text-[#EEEEEE] text-sm">
                    {experience.description}
                  </p>
                </div>
                {/* Timeline dot */}
                <div className="absolute top-6 w-4 h-4 rounded-full bg-[#FFD369] hidden md:block" style={{
              [index % 2 === 0 ? 'right' : 'left']: '-10px'
            }}></div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}