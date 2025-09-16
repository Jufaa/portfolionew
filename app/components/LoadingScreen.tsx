"use client"

import React, { useEffect, useState } from 'react';
export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 10);
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 150);
    return () => clearInterval(interval);
  }, []);
  return <div className="fixed inset-0 bg-gradient-to-br from-[#222831] via-[#393E46] to-[#222831] flex flex-col items-center justify-center z-50">
      <div className="relative mb-12">
        <svg className="w-24 h-24 animate-spin" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
          <path className="opacity-75 text-[#FFD369]" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#FFD369] font-mono text-lg">{progress}%</span>
        </div>
      </div>
      <div className="w-64 h-1 bg-[#EEEEEE]/10 rounded-full overflow-hidden mb-4">
        <div className="h-full bg-[#FFD369] transition-all duration-300 ease-out" style={{
        width: `${progress}%`
      }}></div>
      </div>
      <div className="font-mono text-[#FFD369] text-sm">
        {progress < 30 && 'Starting...'}
        {progress >= 30 && progress < 60 && 'Loading projects...'}
        {progress >= 60 && progress < 90 && 'Preparing experience...'}
        {progress >= 90 && 'Almost done!'}
      </div>
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#FFD369]/10 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#EEEEEE]/10 blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }}></div>
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full bg-[#393E46]/30 blur-3xl animate-pulse" style={{
      animationDelay: '2s'
    }}></div>
    </div>;
}