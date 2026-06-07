import React from 'react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-400 py-16 text-center z-20 relative border-t border-stone-900">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div 
          className="w-12 h-12 border border-stone-800 flex items-center justify-center rounded-full mb-8 cursor-pointer hover:bg-stone-800 transition-colors text-white" 
          data-cursor-target="true" 
          onClick={scrollToTop}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </div>
        <div className="text-xs tracking-[0.2em] uppercase text-stone-600">
          &copy; {new Date().getFullYear()} Elena Vang Studio. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
