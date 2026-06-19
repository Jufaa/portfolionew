"use client"

import React, { useEffect, useRef, useCallback } from 'react';

export function ClientEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const tiltRefs = useRef<Set<HTMLElement>>(new Set());
  const magneticRefs = useRef<Set<HTMLElement>>(new Set());

  // Cursor gradient follower
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  // Card tilt 3D
  useEffect(() => {
    const cards = document.querySelectorAll('[data-tilt]');
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    cards.forEach((card) => {
      const el = card as HTMLElement;
      const handler = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / centerY * -6;
        const rotateY = (x - centerX) / centerX * 6;
        el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
      };
      const leave = () => {
        el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      };
      handlers.set(el, handler);
      leaveHandlers.set(el, leave);
      el.addEventListener('mousemove', handler);
      el.addEventListener('mouseleave', leave);
      tiltRefs.current.add(el);
    });

    return () => {
      handlers.forEach((h, el) => el.removeEventListener('mousemove', h));
      leaveHandlers.forEach((h, el) => el.removeEventListener('mouseleave', h));
    };
  }, []);

  // Magnetic buttons
  useEffect(() => {
    const btns = document.querySelectorAll('[data-magnetic]');
    const handlers = new Map<HTMLElement, (e: MouseEvent) => void>();
    const leaveHandlers = new Map<HTMLElement, () => void>();

    btns.forEach((btn) => {
      const el = btn as HTMLElement;
      const handler = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      };
      const leave = () => {
        el.style.transform = 'translate(0px, 0px)';
        el.style.transition = 'transform 0.4s cubic-bezier(0.23,1,0.32,1)';
        setTimeout(() => { el.style.transition = ''; }, 400);
      };
      handlers.set(el, handler);
      leaveHandlers.set(el, leave);
      el.addEventListener('mousemove', handler);
      el.addEventListener('mouseleave', leave);
      magneticRefs.current.add(el);
    });

    return () => {
      handlers.forEach((h, el) => el.removeEventListener('mousemove', h));
      leaveHandlers.forEach((h, el) => el.removeEventListener('mouseleave', h));
    };
  }, []);

  // Text scramble
  useEffect(() => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    const scrambleEls = document.querySelectorAll('[data-scramble]');

    const scramble = (el: HTMLElement, finalText: string) => {
      let iteration = 0;
      const maxIterations = finalText.length * 2;
      const interval = setInterval(() => {
        el.textContent = finalText
          .split('')
          .map((char, i) => {
            if (i < iteration / 2) return finalText[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        iteration++;
        if (iteration > maxIterations) {
          el.textContent = finalText;
          clearInterval(interval);
        }
      }, 30);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const text = el.dataset.scramble || el.textContent || '';
          scramble(el, text);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });

    scrambleEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll + reveal + vision
  useEffect(() => {
    const header = document.querySelector('header.site-nav') as HTMLElement | null;
    const navInner = header ? header.querySelector('.nav-inner') as HTMLElement | null : null;
    const scrollProgress = document.getElementById('scroll-progress');

    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      const hasScroll = scrollY > 8;
      if (scrollProgress) scrollProgress.style.width = pct + '%';
      if (header) header.classList.toggle('scrolled', hasScroll);
      if (navInner) {
        const blur = hasScroll ? 'blur(16px) saturate(132%)' : 'blur(14px) saturate(126%)';
        (navInner.style as any).backdropFilter = blur;
        (navInner.style as any).webkitBackdropFilter = blur;
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    const reveals = document.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.14 });
    reveals.forEach((el) => observer.observe(el));
    if (reveals.length > 0) reveals[0].classList.add('visible');

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-gradient"
        aria-hidden="true"
      />
    </>
  );
}
