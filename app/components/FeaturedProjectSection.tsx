"use client"

import React, { useEffect, useRef } from 'react';
import { ExternalLinkIcon, GithubIcon, ArrowRightIcon } from 'lucide-react';
export function FeaturedProjectSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
  return <section ref={sectionRef} className="py-12 px-4 bg-gradient-to-b from-[#222831] to-[#2a303a] opacity-0 translate-y-10 transition-all duration-1000">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <div className="inline-block mb-3 px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-md text-sm font-medium">
              PROYECTO DESTACADO
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#FFD369]">
              Mi Mejor Trabajo
            </h2>
          </div>
          <a href="#projects" className="mt-4 md:mt-0 flex items-center gap-2 text-[#FFD369] hover:text-[#FFD369]/80 transition-colors group" onClick={e => {
          e.preventDefault();
          document.getElementById('projects')?.scrollIntoView({
            behavior: 'smooth'
          });
        }}>
            <span>Ver todos los proyectos</span>
            <ArrowRightIcon size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="bg-[#393E46]/50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#EEEEEE]/10 hover:border-[#FFD369]/30 transition-all group">
          <div className="grid md:grid-cols-5 gap-4">
            <div className="md:col-span-3 h-64 md:h-[400px] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Proyecto E-commerce" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
            </div>
            <div className="md:col-span-2 p-5 md:p-6 flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-[#FFD369] transition-colors">
                Plataforma E-commerce
              </h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-full">
                  React
                </span>
                <span className="text-xs px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-full">
                  Node.js
                </span>
                <span className="text-xs px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-full">
                  MongoDB
                </span>
                <span className="text-xs px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-full">
                  Stripe API
                </span>
              </div>
              <p className="text-[#EEEEEE]/80 mb-4 leading-relaxed text-sm">
                Una plataforma e-commerce completa con gestión de productos,
                carrito de compras, pasarela de pagos y panel de administración.
                Desarrollada con React en el frontend y Node.js con Express en
                el backend.
              </p>
              <ul className="mb-5 space-y-2 text-[#EEEEEE]/80 text-sm">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#FFD369]">✓</span>
                  <span>
                    Integración con Stripe para procesamiento de pagos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#FFD369]">✓</span>
                  <span>Panel de administración para gestión de productos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#FFD369]">✓</span>
                  <span>Optimización SEO y rendimiento (99% Lighthouse)</span>
                </li>
              </ul>
              <div className="flex gap-3 mt-auto">
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-[#222831] bg-[#FFD369] hover:opacity-90 px-3 py-2 rounded transition-all">
                  <ExternalLinkIcon size={14} />
                  Ver Proyecto
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm border border-[#EEEEEE]/20 hover:border-[#FFD369] text-[#EEEEEE]/80 hover:text-[#FFD369] px-3 py-2 rounded transition-colors">
                  <GithubIcon size={14} />
                  Ver Código
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}