import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'motion/react';
import 'lenis/dist/lenis.css';
import Lenis from 'lenis';

import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Bio } from './pages/Bio';
import { Arts } from './pages/Arts';
import { Contact } from './pages/Contact';

// ==========================================
// CUSTOM INTERACTIVE CURSOR
// ==========================================
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function' && target.closest('[data-cursor-target]')) {
        setIsHovering(true);
      }
    };
    
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function' && target.closest('[data-cursor-target]')) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white z-[9999] pointer-events-none mix-blend-difference hidden md:block"
      style={{ x: cursorX, y: cursorY }}
      animate={{
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
        borderColor: isHovering ? "transparent" : "rgba(255,255,255,1)"
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    />
  );
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    setLenisInstance(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // When changing pages, update scroll and notify Lenis to recalculate height
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
      // Short delay to allow layout shifts to complete
      setTimeout(() => {
        lenisInstance.resize();
      }, 100);
    }
  }, [currentPage, lenisInstance]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'bio':
        return <Bio />;
      case 'arts':
        return <Arts setCurrentPage={setCurrentPage} />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans bg-stone-950 overflow-x-hidden selection:bg-white selection:text-black md:cursor-none min-h-screen flex flex-col justify-between">
      <CustomCursor />
      
      {/* Cinematic Entry Overlay */}
      <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: 0, transitionEnd: { display: "none" } }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        className="fixed inset-0 z-[100] bg-stone-950 pointer-events-none flex justify-center items-center"
      />

      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
