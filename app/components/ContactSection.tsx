"use client"

import React, { useEffect, useState, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      // Reset submitted state after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
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
    if (formRef.current) observer.observe(formRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      if (formRef.current) observer.unobserve(formRef.current);
    };
  }, []);
  return <section id="contact" className="py-12 px-4" style={{
    background: 'linear-gradient(to bottom, #222831, #393E46)'
  }}>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">
          <span className="border-b-4 border-[#FFD369] pb-2">Contact me</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div ref={sectionRef} className="opacity-0 translate-y-10 transition-all duration-1000">
            <h3 className="text-xl font-bold mb-4 text-[#EEEEEE]">
              Lets Talk!
            </h3>
            <p className="text-[#EEEEEE]/80 mb-6 text-sm">
            Do you have a question or are you interested in working together? Send me a message and I’ll get back to you as soon as possible
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFD369]/10 rounded-full flex items-center justify-center shrink-0">
                  <MailIcon size={20} className="text-[#FFD369]" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1 text-[#EEEEEE]">
                    Email
                  </h4>
                  <a href="mailto:tu@email.com" className="text-[#EEEEEE]/80 hover:text-[#FFD369] transition-colors text-sm">
                    jufaworks@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#FFD369]/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPinIcon size={20} className="text-[#FFD369]" />
                </div>
                <div>
                  <h4 className="text-base font-medium mb-1 text-[#EEEEEE]">
                    Location
                  </h4>
                  <p className="text-[#EEEEEE]/80 text-sm">Rio Cuarto, Cordoba, Argentina</p>
                </div>
              </div>
            </div>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="bg-[#393E46]/50 p-6 rounded-lg border border-[#FFD369]/20 opacity-0 translate-y-10 transition-all duration-1000 delay-300">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                Nombre
              </label>
              <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-3 py-2 bg-[#222831]/50 border border-[#EEEEEE]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD369]/50 focus:border-[#FFD369] transition-colors text-[#EEEEEE] text-sm" placeholder="Your name" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                Email
              </label>
              <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-3 py-2 bg-[#222831]/50 border border-[#EEEEEE]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD369]/50 focus:border-[#FFD369] transition-colors text-[#EEEEEE] text-sm" placeholder="your@email.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#EEEEEE]">
                Message
              </label>
              <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className="w-full px-3 py-2 bg-[#222831]/50 border border-[#EEEEEE]/20 rounded-md focus:outline-none focus:ring-1 focus:ring-[#FFD369]/50 focus:border-[#FFD369] transition-colors resize-none text-[#EEEEEE] text-sm" placeholder="¿How can i help you?"></textarea>
            </div>
            <button type="submit" disabled={isSubmitting || submitted} className={`w-full flex items-center justify-center gap-2 py-2 px-4 rounded-md transition-all ${submitted ? 'bg-[#FFD369] text-[#222831] cursor-default' : 'bg-[#FFD369] hover:bg-[#FFD369]/90 text-[#222831]'} font-medium text-sm`}>
              {isSubmitting ? <span className="inline-block w-4 h-4 border-2 border-[#222831] border-t-transparent rounded-full animate-spin"></span> : submitted ? <>Message Send</> : <>
                  <SendIcon size={16} />
                  Send Message
                </>}
            </button>
          </form>
        </div>
      </div>
    </section>;
}