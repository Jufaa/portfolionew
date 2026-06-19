"use client"

import React, { useEffect, useRef, useState } from 'react';

export function SillyStats() {
  const [stats, setStats] = useState({ clicks: 0, travel: 0, scrolls: 0, keys: 0 });
  const travelRef = useRef(0);
  const lastMouse = useRef({ x: -1, y: -1 });
  const scrollCount = useRef(0);

  const formatNumber = (n: number): string => {
    if (n >= 1e6) return (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return (n / 1e3).toFixed(0) + 'K';
    return String(n);
  };

  useEffect(() => {
    const handleClick = () => {
      setStats(s => ({ ...s, clicks: s.clicks + 1 }));
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!e.repeat) {
        setStats(s => ({ ...s, keys: s.keys + 1 }));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (lastMouse.current.x >= 0) {
        const dx = e.clientX - lastMouse.current.x;
        const dy = e.clientY - lastMouse.current.y;
        travelRef.current += Math.round(Math.sqrt(dx * dx + dy * dy));
        if (travelRef.current >= 100) {
          setStats(s => ({ ...s, travel: s.travel + travelRef.current }));
          travelRef.current = 0;
        }
      }
      lastMouse.current = { x: e.clientX, y: e.clientY };
    };

    const handleScroll = () => {
      scrollCount.current++;
      if (scrollCount.current % 4 === 0) {
        setStats(s => ({ ...s, scrolls: s.scrolls + 1 }));
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const feet = stats.travel;
  const miles = (feet / 5280).toFixed(2);

  return (
    <section id="silly-stats" className="panel activity-panel" data-reveal>
      <div className="panel-head">
        <p className="label" data-scramble="silly stats">silly stats</p>
        <p className="activity-sub">live counters</p>
      </div>
      <div className="activity-grid">
        <div className="silly-stat" data-tilt>
          <span className="silly-stat-label">mouse clicks</span>
          <span className="silly-stat-value">{formatNumber(stats.clicks)}</span>
        </div>
        <div className="silly-stat" data-tilt>
          <span className="silly-stat-label">mouse travel</span>
          <span className="silly-stat-value">{formatNumber(Math.round(feet))} ft</span>
          <span className="silly-stat-sub">{miles} mi</span>
        </div>
        <div className="silly-stat" data-tilt>
          <span className="silly-stat-label">mouse scrolls</span>
          <span className="silly-stat-value">{formatNumber(stats.scrolls)}</span>
        </div>
        <div className="silly-stat" data-tilt>
          <span className="silly-stat-label">keypresses</span>
          <span className="silly-stat-value">{formatNumber(stats.keys)}</span>
        </div>
      </div>
    </section>
  );
}
