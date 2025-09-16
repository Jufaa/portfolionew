"use client"

import React, { useEffect, useState, useRef } from 'react';
import { ChevronDownIcon } from 'lucide-react';
export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    setVisible(true);
    // Particle animation
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: Particle[] = [];
    const particleCount = 80; // Reduced count for better performance
    const connectionDistance = 150;
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5; // Reduced size
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        const colors = ['rgba(255, 211, 105, 0.7)', 'rgba(238, 238, 238, 0.5)', 'rgba(57, 62, 70, 0.6)'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < connectionDistance) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 211, 105, ${0.1 - distance / connectionDistance * 0.1})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };
    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };
    const animate = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connectParticles();
      requestAnimationFrame(animate);
    };
    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    init();
    animate();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="hero" className="min-h-screen flex flex-col justify-center items-center relative text-center px-4 overflow-hidden">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 bg-gradient-to-br from-[#222831] via-[#2a303a] to-[#222831] z-0"></canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#222831] opacity-80 z-10"></div>
      <div className={`transition-all duration-1000 transform z-20 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-4 inline-block">
          <span className="px-3 py-1 border border-[#FFD369] text-[#FFD369] rounded-full text-xs font-mono tracking-wider">
            DEVELOPER & DISEÑADOR
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="block">Hi, i am</span>
          <span className="block mt-1 relative text-[#FFD369]">
            Juan Cruz Francitorra
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#FFD369]"></span>
          </span>
        </h1>
        <h2 className="text-lg md:text-xl text-[#EEEEEE] mb-8 max-w-2xl mx-auto leading-relaxed">
          I craft <span className="text-[#FFD369]">engaging and functional digital experencies</span>{' '}
             that help brands stand out in
            the digital world
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button onClick={scrollToAbout} className="bg-[#FFD369] text-[#222831] px-6 py-3 rounded-md transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-[#FFD369]/20 flex items-center gap-2 font-medium">
            <span>About me</span>
            <svg className="w-4 h-4 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>
          <button onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })} className="border-2 border-[#FFD369] text-[#FFD369] hover:bg-[#FFD369]/10 px-6 py-3 rounded-md transition-all transform hover:scale-105 font-medium">
          View Projects
          </button>
        </div>
      </div>
      <div className="absolute bottom-6 animate-bounce cursor-pointer z-20" onClick={scrollToAbout}>
        <ChevronDownIcon size={28} className="text-[#FFD369]" />
      </div>
      {/* Animated gradient shapes - reduced size */}
      <div className="absolute top-1/4 left-10 w-48 h-48 rounded-full bg-[#FFD369]/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full bg-[#EEEEEE]/10 blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
    </section>;
}