"use client"

import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#222831]/80 backdrop-blur-md py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-[#FFD369]">
          <span className="cursor-pointer" onClick={() => scrollToSection('hero')}>
            Jufa
          </span>
        </div>
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {['about', 'projects', 'experience', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className="text-[#EEEEEE] hover:text-[#FFD369] transition-colors capitalize relative group">
              {section}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FFD369] transition-all duration-300 group-hover:w-full"></span>
            </button>)}
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-[#EEEEEE] hover:text-[#FFD369]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-[#222831]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {['about', 'projects', 'experience', 'contact'].map(section => <button key={section} onClick={() => scrollToSection(section)} className="text-[#EEEEEE] hover:text-[#FFD369] transition-colors py-2 text-center capitalize">
                {section}
              </button>)}
          </div>
        </div>}
    </header>;
}