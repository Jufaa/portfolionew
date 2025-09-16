"use client"
import React, { useEffect, useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from 'lucide-react';
type Testimonial = {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
};
export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const testimonials: Testimonial[] = [{
    id: 1,
    name: 'María García',
    role: 'CEO',
    company: 'TechStart',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    content: 'Un profesional excepcional con una gran capacidad técnica y creativa. Entregó nuestro proyecto antes del plazo y superó todas nuestras expectativas. Sin duda, volveríamos a trabajar juntos en futuros proyectos.'
  }, {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Director de Marketing',
    company: 'Innovate Digital',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    content: 'Su enfoque centrado en el usuario transformó por completo nuestra presencia digital. El diseño intuitivo y la implementación técnica impecable resultaron en un aumento del 40% en nuestras conversiones. Un talento extraordinario.'
  }, {
    id: 3,
    name: 'Ana Martínez',
    role: 'Fundadora',
    company: 'DesignLab',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
    content: 'Colaborar con este desarrollador ha sido una experiencia increíble. Su capacidad para traducir ideas complejas en soluciones elegantes y funcionales es impresionante. Recomendaría sus servicios a cualquier empresa que busque calidad y profesionalismo.'
  }];
  const nextTestimonial = () => {
    setActiveIndex(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };
  const prevTestimonial = () => {
    setActiveIndex(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };
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
  return <section id="testimonials" className="py-12 px-4 bg-[#393E46] relative" ref={sectionRef}>
      {/* Background decoration */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-1/2 h-full bg-[#FFD369]/5 blur-3xl rounded-full"></div>
      </div>
<div className="container mx-auto max-w-6xl transition-all duration-1000">        <div className="text-center mb-8">
          <div className="inline-block mb-3 px-3 py-1 bg-[#FFD369]/10 text-[#FFD369] rounded-md text-sm font-medium">
            TESTIMONIOS
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#FFD369]">
            Lo que dicen mis clientes
          </h2>
          <p className="text-[#EEEEEE]/80 max-w-2xl mx-auto text-sm">
            He tenido el placer de trabajar con empresas increíbles y personas
            talentosas. Aquí hay algunas opiniones sobre mi trabajo.
          </p>
        </div>
        <div className="bg-[#222831]/60 backdrop-blur-sm rounded-xl p-4 md:p-8 border border-[#EEEEEE]/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-6 -mr-6 w-28 h-28 bg-[#FFD369]/10 rounded-full blur-2xl"></div>
          {/* Large quote icon */}
          <div className="absolute top-6 left-6 text-[#FFD369]/10">
            <QuoteIcon size={60} />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="md:w-1/3 flex justify-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-3 border-[#FFD369]/30">
                  <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-base md:text-lg text-[#EEEEEE] italic mb-4">
                  `{testimonials[activeIndex].content}`
                </blockquote>
                <div>
                  <p className="text-lg font-bold text-white">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-[#FFD369] text-sm">
                    {testimonials[activeIndex].role},{' '}
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center md:justify-end gap-3 mt-6">
              <button onClick={prevTestimonial} className="w-8 h-8 rounded-full border border-[#EEEEEE]/30 flex items-center justify-center text-[#EEEEEE]/70 hover:border-[#FFD369] hover:text-[#FFD369] transition-colors" aria-label="Previous testimonial">
                <ChevronLeftIcon size={18} />
              </button>
              <button onClick={nextTestimonial} className="w-8 h-8 rounded-full border border-[#EEEEEE]/30 flex items-center justify-center text-[#EEEEEE]/70 hover:border-[#FFD369] hover:text-[#FFD369] transition-colors" aria-label="Next testimonial">
                <ChevronRightIcon size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 mx-1 rounded-full transition-all ${index === activeIndex ? 'bg-[#FFD369]' : 'bg-[#EEEEEE]/30'}`} aria-label={`Go to testimonial ${index + 1}`}></button>)}
        </div>
      </div>
    </section>;
}