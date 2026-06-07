import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { InteractiveTitle, TypewriterText, ProgressiveImg, fadeUpVariant } from '../components/Shared';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home = ({ setCurrentPage }: HomeProps) => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const testimonials = [
    {
      quote: "Vang's work does not decorate spaces; it dominates them, forcing an immediate confrontational dialogue.",
      author: "The Modern Art Review",
      role: "Lead Critic"
    },
    {
      quote: "An emotional tour de force. The aggressive layering of oil and graphite creates a physical weight rarely seen in contemporary abstraction.",
      author: "Artforum",
      role: "Review Panel"
    },
    {
      quote: "Visceral, uncompromising, and absolutely essential. She remains one of the most exciting abstract minimalists of this decade.",
      author: "Contemporary Canvas",
      role: "Editor-in-Chief"
    }
  ];

  const offers = [
    {
      title: "Private Acquisition",
      description: "Acquire an original piece from Elena Vang's exclusive private vault. Perfect for private residences and collectors seeking unique textural statements.",
      features: ["Certificate of Authenticity", "Personalized Courier Delivery", "Complimentary Installation Consultation"],
      price: "Starting at $1,800"
    },
    {
      title: "Gallery Curation",
      description: "Curated exhibits for public institutions, luxury hotels, and corporate environments looking to define their space with monumental visual statements.",
      features: ["Custom Theme Curation", "On-site Spatial Design", "Artist Presence at Opening Event"],
      price: "Inquire for Rates"
    },
    {
      title: "Custom Commission",
      description: "Collaborate directly with Elena to create a tailored masterpiece designed around your specific environment, lighting conditions, and dimensional needs.",
      features: ["Spatial & Lighting Analysis", "Color Palette Collaboration", "Progress Portfolio Documentation"],
      price: "By Consult Only"
    }
  ];

  return (
    <div className="bg-stone-950 text-white overflow-hidden">
      
      {/* ==========================================
          1. ADS HEADLINE (HERO)
          ========================================== */}
      <section ref={heroRef} className="relative h-screen flex flex-col items-center justify-center bg-stone-950">
        <motion.div 
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=2000&q=80)`,
            y 
          }}
        />
        
        {/* Abstract shape elements to add visual interest */}
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

        <motion.div style={{ opacity }} className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
          <InteractiveTitle title="ELENA VANG" />
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-display text-2xl md:text-4xl italic text-stone-300 mt-4 tracking-wide leading-tight"
          >
            "The Visceral Power of Textural Abstraction."
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase text-stone-400 mt-6 max-w-2xl leading-relaxed"
          >
            Where memory, structure, and kinetic motion converge to silence the noise.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10"
          >
            <button 
              onClick={() => setCurrentPage('arts')}
              data-cursor-target="true"
              className="bg-white text-stone-950 font-sans tracking-[0.2em] uppercase text-xs font-bold px-8 py-4 border border-white hover:bg-transparent hover:text-white transition-all cursor-none"
            >
              Explore the Archives
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 0.7 }} 
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-medium">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
            <motion.div animate={{ y: [0, 48] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="w-full h-1/2 bg-white absolute top-0" />
          </div>
        </motion.div>
      </section>

      {/* ==========================================
          2. PROBLEM SECTION
          ========================================== */}
      <section className="py-24 md:py-40 bg-stone-900 border-t border-stone-850 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs tracking-[0.4em] uppercase text-stone-400 font-bold border-l-2 border-white pl-4 inline-block">The Dilemma</div>
            <h3 className="font-display text-4xl md:text-5xl italic text-white leading-tight">
              Lost in the Digital Drift.
            </h3>
            <p className="font-sans text-stone-400 leading-relaxed font-light text-base md:text-lg">
              In an era dominated by fleeting digital pixels and glossy, frictionless screens, our relationship with art has become superficial. We scroll past masterpieces in milliseconds, stripping them of their physical weight, depth, and tactile presence.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              className="bg-stone-950 p-8 border border-stone-800 hover:border-stone-700 transition-colors"
            >
              <div className="text-3xl text-stone-500 mb-4 font-display">01 / Frictionless</div>
              <h4 className="font-display text-xl mb-3">The Loss of Tactility</h4>
              <p className="font-sans text-sm text-stone-400 font-light leading-relaxed">
                Without texture, there is no resistance. Without resistance, art is merely digested, never truly felt or remembered.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
              className="bg-stone-950 p-8 border border-stone-800 hover:border-stone-700 transition-colors"
            >
              <div className="text-3xl text-stone-500 mb-4 font-display">02 / Distraction</div>
              <h4 className="font-display text-xl mb-3">Constant Visual Noise</h4>
              <p className="font-sans text-sm text-stone-400 font-light leading-relaxed">
                Standard spaces and screens are flooded with content. The human mind seeks anchors—still points to pause, reflect, and just look.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ==========================================
          3. SOLUSI SECTION
          ========================================== */}
      <section className="py-24 md:py-40 bg-stone-950 border-t border-stone-900 relative z-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative aspect-[4/5] overflow-hidden lg:order-2">
            <ProgressiveImg 
              src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80" 
              alt="Art Texture Solution" 
              className="w-full h-full"
              imgClassName="grayscale contrast-125 opacity-80"
              skeletonTheme="bg-stone-800"
            />
            <div className="absolute inset-0 border-[16px] border-stone-950 z-10 pointer-events-none"></div>
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
            className="space-y-8 lg:order-1"
          >
            <div className="text-xs tracking-[0.4em] uppercase text-stone-400 font-bold border-l-2 border-white pl-4 inline-block">The Solution</div>
            <h3 className="font-display text-4xl md:text-5xl italic text-white leading-tight">
              Restoring Depth Through Physical Struggle.
            </h3>
            
            <p className="font-sans text-stone-300 leading-relaxed font-light text-lg">
              Elena Vang's canvases restore the visceral connection we crave. By aggressively layering oil, graphite, and physical gold leaf, she creates dimensional landscapes that catch real-world light and change dynamically throughout the day.
            </p>
            
            <p className="font-sans text-stone-400 leading-relaxed font-light text-base">
              These are not passive images to scroll past; they are physical interventions. The heavy textures and stark primary color fields command attention, forcing the eye to slow down, settle, and experience pure, structural silence.
            </p>

            <div className="pt-4">
              <button 
                onClick={() => setCurrentPage('bio')}
                data-cursor-target="true"
                className="border-b border-white pb-2 text-sm uppercase tracking-widest font-semibold hover:text-stone-400 hover:border-stone-400 transition-colors cursor-none"
              >
                Learn More About The Philosophy &rarr;
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ==========================================
          4. TESTIMONI SECTION
          ========================================== */}
      <section className="py-24 md:py-36 bg-stone-900 border-y border-stone-850 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-xs tracking-[0.4em] uppercase text-stone-400 font-bold mb-4 inline-block">Praise</div>
            <h3 className="font-display text-3xl md:text-5xl uppercase tracking-widest text-[#e3e1db]">Critical Acclaim</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-950 p-8 border border-stone-800 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="text-stone-600 text-5xl font-serif leading-none select-none">“</div>
                  <p className="font-sans text-stone-300 leading-relaxed font-light italic text-base">
                    {test.quote}
                  </p>
                </div>
                <div className="mt-8 border-t border-stone-900 pt-4">
                  <div className="font-display text-white text-base tracking-wider">{test.author}</div>
                  <div className="font-sans text-xs text-stone-500 uppercase tracking-widest mt-1">{test.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. PENAWARAN SECTION
          ========================================== */}
      <section className="py-24 md:py-40 bg-stone-950 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          
          <div className="text-center mb-20 max-w-2xl mx-auto space-y-4">
            <div className="text-xs tracking-[0.4em] uppercase text-stone-400 font-bold inline-block border-l-2 border-white px-2">Acquisitions</div>
            <h3 className="font-display text-4xl md:text-5xl italic text-white">Bring Depth to Your Environment.</h3>
            <p className="font-sans text-stone-400 font-light text-base md:text-lg">
              Explore available integration avenues. Whether you are a private collector, public curator, or looking for custom works.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <motion.div 
                key={index}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariant}
                transition={{ delay: index * 0.1 }}
                className="bg-stone-900/60 backdrop-blur-md p-8 md:p-10 border border-stone-800 flex flex-col justify-between hover:border-stone-600 transition-all"
              >
                <div>
                  <h4 className="font-display text-2xl mb-4 text-[#e3e1db]">{offer.title}</h4>
                  <p className="font-sans text-sm text-stone-400 leading-relaxed font-light mb-8">
                    {offer.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10 border-t border-stone-850 pt-8">
                    {offer.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm text-stone-300 font-light">
                        <span className="w-1.5 h-1.5 bg-stone-400 rounded-full flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="font-display text-lg text-white font-medium">{offer.price}</div>
                  <button 
                    onClick={() => setCurrentPage('contact')}
                    data-cursor-target="true"
                    className="w-full bg-white text-stone-950 font-sans tracking-[0.2em] uppercase text-xs font-bold py-4 border border-white hover:bg-transparent hover:text-white transition-all cursor-none"
                  >
                    Send Inquiry
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
