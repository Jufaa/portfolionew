"use client"

import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, InstagramIcon, ArrowUpIcon, HeartIcon, MailIcon } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const currentYear = new Date().getFullYear();
  const quickLinks = [{
    name: 'Home',
    href: '#hero'
  }, {
    name: 'About Me',
    href: '#about'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Experience',
    href: '#experience'
  }, {
    name: 'Blog',
    href: '#blog'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <footer className="bg-[#222831] py-10 px-4 border-t border-[#EEEEEE]/10 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#FFD369]/5 to-transparent"></div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-[#FFD369] mb-3">Juan Cruz Francitorra</h3>
            <p className="text-[#EEEEEE]/80 mb-4 max-w-md text-sm">
              Web Developer & UX/UI Designer specialized in creating engaging
              and functional digital experiences for companies and innovative startups.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-8 h-8 rounded-full bg-[#393E46] flex items-center justify-center text-[#EEEEEE]/70 hover:bg-[#FFD369] hover:text-[#222831] transition-all" aria-label="GitHub">
                <GithubIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#393E46] flex items-center justify-center text-[#EEEEEE]/70 hover:bg-[#FFD369] hover:text-[#222831] transition-all" aria-label="Twitter">
                <TwitterIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#393E46] flex items-center justify-center text-[#EEEEEE]/70 hover:bg-[#FFD369] hover:text-[#222831] transition-all" aria-label="LinkedIn">
                <LinkedinIcon size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#393E46] flex items-center justify-center text-[#EEEEEE]/70 hover:bg-[#FFD369] hover:text-[#222831] transition-all" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3 text-[#EEEEEE]">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(link => <li key={link.name}>
                  <a href={link.href} className="text-[#EEEEEE]/80 hover:text-[#FFD369] transition-colors flex items-center gap-1 text-sm" onClick={e => {
                e.preventDefault();
                document.querySelector(link.href)?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                    <span className="w-1 h-1 bg-[#FFD369] rounded-full"></span>
                    {link.name}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-3 text-[#EEEEEE]">
              Contact
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:jufaworks@email.com" className="text-[#EEEEEE]/80 hover:text-[#FFD369] transition-colors flex items-center gap-1 text-sm">
                  <MailIcon size={14} />
                  jufaworks@email.com
                </a>
              </li>
              <li className="text-[#EEEEEE]/80 text-sm">Rio Cuarto, Cordoba, Argentina</li>
              <li className="pt-3">
                <a href="#contact" className="px-4 py-1.5 bg-[#FFD369] text-[#222831] hover:opacity-90 rounded-md transition-all inline-block font-medium text-sm" onClick={e => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({
                  behavior: 'smooth'
                });
              }}>
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#EEEEEE]/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EEEEEE]/60 text-xs flex items-center">
            &copy; {currentYear} Juan Cruz Francitora. All rights reserved.
            <span className="inline-flex items-center ml-2">
              Made with <HeartIcon size={12} className="mx-1 text-[#FFD369]" />{' '}
              in Argentina
            </span>
          </p>
          <button onClick={scrollToTop} className="mt-3 md:mt-0 bg-[#393E46] hover:bg-[#FFD369] text-[#EEEEEE]/70 hover:text-[#222831] p-2 rounded-full transition-colors group" aria-label="Scroll to top">
            <ArrowUpIcon size={16} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>;
}
