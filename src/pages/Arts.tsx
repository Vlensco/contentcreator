import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ProgressiveImg, artworks } from '../components/Shared';

interface ArtsProps {
  setCurrentPage: (page: string) => void;
}

export const Arts = ({ setCurrentPage }: ArtsProps) => {
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);

  const handleInquiry = () => {
    setSelectedArt(null);
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-stone-900 text-stone-50 pt-28 pb-24 md:pt-36 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="font-display text-4xl md:text-6xl uppercase tracking-widest text-[#e3e1db]">The Archives</h2>
        <p className="font-sans text-stone-400 mt-4 tracking-wide font-light max-w-2xl mx-auto">
          Explore selected works available for exhibition and private acquisition. Click an artwork to view details and availability.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-x-12 md:gap-y-20">
          {artworks.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
              className="group cursor-pointer flex flex-col"
              data-cursor-target="true"
              onClick={() => setSelectedArt(item)}
            >
              <div className="relative aspect-[4/5] bg-stone-800 mb-6 overflow-hidden">
                <ProgressiveImg 
                  src={item.image} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full"
                  imgClassName="grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
                  skeletonTheme="bg-stone-700"
                />
                {item.status !== 'Available' && (
                  <div className="absolute top-4 right-4 bg-stone-50 text-stone-900 text-xs uppercase tracking-widest px-3 py-1 font-bold z-20">
                    {item.status}
                  </div>
                )}
                <div className="absolute inset-0 bg-stone-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                   <span className="text-white border border-white px-6 py-3 tracking-[0.2em] uppercase text-sm">View Details</span>
                </div>
              </div>
              <div className="flex flex-col justify-start">
                  <h4 className="font-display text-xl md:text-2xl mb-1 text-white">{item.title}</h4>
                  <p className="font-sans text-sm tracking-wider text-stone-400 uppercase">{item.medium} — {item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Art Detail Modal */}
      <AnimatePresence>
        {selectedArt && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-12 bg-stone-950/95 backdrop-blur-md"
            onClick={() => setSelectedArt(null)}
          >
            <motion.div 
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-stone-50 max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative text-stone-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedArt(null)}
                data-cursor-target="true"
                className="absolute top-4 right-4 md:top-8 md:right-8 z-20 text-stone-900 bg-white/50 p-2 hover:bg-stone-900 hover:text-stone-50 transition-colors rounded-full backdrop-blur cursor-none"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              
              <div className="w-full md:w-1/2 relative min-h-[40vh] md:min-h-0 bg-stone-200">
                <ProgressiveImg 
                  src={selectedArt.image} 
                  alt={selectedArt.title} 
                  className="absolute inset-0 w-full h-full"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-6 md:p-16 flex flex-col justify-center bg-stone-50 relative z-10">
                <div className="text-xs tracking-[0.3em] uppercase text-stone-400 mb-4">{selectedArt.year} &mdash; {selectedArt.medium}</div>
                <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-stone-800 mb-6 italic">{selectedArt.title}</h3>
                
                <div className="flex gap-8 mb-8 border-y border-stone-200 py-6">
                  <div>
                    <div className="text-xs tracking-widest text-stone-500 uppercase mb-1">Dimensions</div>
                    <div className="font-sans text-stone-800 font-medium">{selectedArt.size}</div>
                  </div>
                  <div>
                    <div className="text-xs tracking-widest text-stone-500 uppercase mb-1">Status</div>
                    <div className={`font-sans font-medium uppercase ${selectedArt.status === 'Available' ? 'text-green-700' : 'text-stone-400'}`}>{selectedArt.status}</div>
                  </div>
                  <div>
                     <div className="text-xs tracking-widest text-stone-500 uppercase mb-1">Price</div>
                     <div className="font-sans text-stone-800 font-medium">{selectedArt.price}</div>
                  </div>
                </div>

                <p className="font-sans text-stone-600 leading-relaxed font-light mb-12 text-lg">
                  {selectedArt.description}
                </p>

                {selectedArt.status === 'Available' ? (
                  <button 
                    onClick={handleInquiry}
                    data-cursor-target="true" 
                    className="w-full bg-stone-900 text-stone-50 px-8 py-5 tracking-[0.2em] uppercase text-sm hover:bg-stone-800 transition-colors cursor-none"
                  >
                    Inquire to Acquire
                  </button>
                ) : (
                  <button disabled className="w-full bg-stone-200 text-stone-500 px-8 py-5 tracking-[0.2em] uppercase text-sm cursor-not-allowed">
                    Currently Unavailable
                  </button>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
