"use client"

import React, { useEffect, useRef } from 'react';
import { ArrowRightIcon, CalendarIcon, ClockIcon } from 'lucide-react';
import Image from 'next/image';
export function BlogSection() {
  const sectionRef = useRef(null);
  const blogPosts = [{
    id: 1,
    title: 'Cómo mejorar el rendimiento de tu aplicación React',
    excerpt: 'Aprende técnicas avanzadas para optimizar el rendimiento de tus aplicaciones React y ofrecer una mejor experiencia de usuario.',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    date: '10 Jun 2023',
    readTime: '5 min',
    category: 'Desarrollo',
    categoryColor: 'yellow'
  }, {
    id: 2,
    title: 'Principios de diseño UX que todo desarrollador debería conocer',
    excerpt: 'Descubre los fundamentos del diseño UX que pueden transformar tus habilidades como desarrollador y mejorar tus proyectos.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
    date: '22 May 2023',
    readTime: '7 min',
    category: 'Diseño',
    categoryColor: 'yellow'
  }, {
    id: 3,
    title: 'Construyendo APIs escalables con Node.js',
    excerpt: 'Una guía completa para desarrollar APIs robustas y escalables utilizando Node.js y las mejores prácticas actuales.',
    image: 'https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    date: '5 Apr 2023',
    readTime: '10 min',
    category: 'Backend',
    categoryColor: 'yellow'
  }];
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
  const getCategoryStyles = (color) => {
    return 'bg-[#FFD369]/10 text-[#FFD369]';
  };
  return (
    <section id="blog" className="py-12 px-4 bg-gradient-to-b from-[#222831] to-[#2a303a]" ref={(el) => (sectionRef.current = el)}>
<div className="container mx-auto max-w-6xl transition-all duration-1000">        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div>
            <div className="inline-block mb-3 px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-md text-sm font-medium">
              MI BLOG
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFD369]">
              Artículos y Recursos
            </h2>
          </div>
          <a href="#" className="mt-4 md:mt-0 flex items-center gap-2 text-[#FFD369] hover:text-[#FFD369]/80 transition-colors group">
            <span>Ver todos los artículos</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => <article key={post.id} className="bg-[#393E46]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#EEEEEE]/10 hover:border-[#FFD369]/30 transition-all hover:transform hover:scale-[1.02] group" style={{
          transitionDelay: `${index * 100}ms`
        }}>
              <div className="h-40 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getCategoryStyles(post.categoryColor)}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#EEEEEE]/60 text-xs">
                    <div className="flex items-center gap-1">
                      <CalendarIcon size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ClockIcon size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#FFD369] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#EEEEEE]/80 mb-4 text-sm">{post.excerpt}</p>
                <a href="#" className="inline-flex items-center text-[#FFD369] hover:text-[#FFD369]/80 transition-colors group text-sm">
                  <span>Leer más</span>
                  <ArrowRightIcon size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>)}
        </div>
      </div>
    </section>
  );
}