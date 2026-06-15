"use client"

import React, { useEffect } from 'react';

export function ClientEffects() {
  useEffect(() => {
    const header = document.querySelector('header.site-nav') as HTMLElement | null;
    const navInner = header ? header.querySelector('.nav-inner') as HTMLElement | null : null;
    const scrollProgress = document.getElementById('scroll-progress');
    const visionToggle = document.getElementById('vision-toggle');
    const storageKey = 'portfolio-vision';

    const setBlur = (hasScroll: boolean) => {
      if (!navInner) return;
      const t = hasScroll ? 'blur(16px)' : 'blur(14px)';
      (navInner.style as any).backdropFilter = t;
      (navInner.style as any).webkitBackdropFilter = t;
    };

    const onScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      const hasScroll = scrollY > 8;
      if (scrollProgress) scrollProgress.style.width = pct + '%';
      if (header) header.classList.toggle('scrolled', hasScroll);
      setBlur(hasScroll);
    };

    const setVision = (mode: string) => {
      document.body.dataset.vision = mode === 'retro' ? 'retro' : 'clean';
      if (visionToggle) {
        visionToggle.setAttribute('aria-pressed', mode === 'retro' ? 'true' : 'false');
        visionToggle.setAttribute('title', mode === 'retro' ? 'Disable retro texture' : 'Enable retro texture');
      }
    };

    try {
      const stored = localStorage.getItem(storageKey);
      setVision(stored === 'retro' ? 'retro' : 'clean');
    } catch { setVision('clean'); }

    if (visionToggle) {
      visionToggle.addEventListener('click', () => {
        const next = document.body.dataset.vision === 'retro' ? 'clean' : 'retro';
        setVision(next);
        try { localStorage.setItem(storageKey, next); } catch {}
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    // Reveal on scroll
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

  return null;
}
