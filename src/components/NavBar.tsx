import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface NavBarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const NavBar = ({ currentPage, setCurrentPage }: NavBarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const links = ['home', 'bio', 'arts', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    // Check initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, page: string) => {
    e.preventDefault();
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed top-0 w-full pt-6 pb-6 px-6 md:pt-8 md:pb-8 md:px-10 z-50 flex justify-between items-center text-white transition-all duration-300 pointer-events-auto border-b ${
          isScrolled 
            ? 'bg-stone-950/80 backdrop-blur-md border-white/5' 
            : 'bg-transparent border-transparent'
        }`}
      >
        <div 
          className="font-display text-xl md:text-2xl tracking-widest uppercase cursor-none flex items-center gap-3 select-none" 
          data-cursor-target="true" 
          onClick={(e) => handleLinkClick(e, 'home')}
        >
          ELENA VANG
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] font-medium uppercase">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link}`} 
              onClick={(e) => handleLinkClick(e, link)} 
              data-cursor-target="true" 
              className={`hover:opacity-100 transition-all cursor-none relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-white after:origin-right hover:after:origin-left after:transition-transform ${currentPage === link ? 'opacity-100 after:scale-x-100' : 'opacity-60 after:scale-x-0'} hover:after:scale-x-100`}
            >
              {link === 'arts' ? 'Arts' : link}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden flex flex-col justify-center gap-[5px] z-[60] w-8 h-8 relative cursor-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          data-cursor-target="true"
        >
          <div className={`w-full h-[2px] bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? 'rotate-45 absolute' : ''}`} />
          <div className={`w-full h-[2px] bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-full h-[2px] bg-white transition-all duration-300 origin-center ${mobileMenuOpen ? '-rotate-45 absolute' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-stone-950 flex flex-col items-center justify-center"
          >
            <div className="flex flex-col gap-8 text-center text-lg tracking-[0.3em] font-medium uppercase text-white">
              {links.map((link) => (
                <a 
                  key={link} 
                  href={`#${link}`} 
                  onClick={(e) => handleLinkClick(e, link)} 
                  className={`hover:opacity-100 transition-all ${currentPage === link ? 'text-white' : 'text-stone-400'}`}
                >
                  {link === 'arts' ? 'Arts' : link}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
