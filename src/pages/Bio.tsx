import React from 'react';
import { motion } from 'motion/react';
import { ProgressiveImg, TypewriterText, fadeUpVariant } from '../components/Shared';

export const Bio = () => {
  return (
    <div className="bg-stone-950 text-white pt-28 pb-20 md:pt-36 relative overflow-hidden">
      
      {/* Background ambient radial highlight */}
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-stone-900/40 rounded-full blur-3xl pointer-events-none" />

      {/* Biography Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start pb-20 border-b border-stone-850 relative z-10">
        <div className="lg:col-span-5 lg:sticky lg:top-32 lg:-mt-10">
          <ProgressiveImg 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80" 
            alt="Elena Vang" 
            className="w-full aspect-[3/4]"
            imgClassName="grayscale contrast-110"
          />
        </div>

        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          className="lg:col-span-7 space-y-12"
        >
          <div>
            <div className="text-xs md:text-sm tracking-[0.4em] uppercase text-stone-400 font-bold border-l-2 border-white pl-4 inline-block">Biography</div>
            <h2 className="font-display text-4xl md:text-6xl mb-8 italic">Elena Vang.</h2>
            <h4 className="font-display text-2xl mb-4 text-[#e3e1db]">Origins & Education</h4>
            <p className="font-sans text-stone-400 leading-relaxed font-light mb-4 text-lg">
              Born in 1985 in a quiet mountain town, Elena Vang was surrounded by monumental landscapes that deeply influenced her architectural approach to canvas. She relocated to Paris in her early twenties to attend the École des Beaux-Arts. There, she diverged from classical realism to investigate the visceral qualities of texture and abstraction.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-2xl mb-4 text-[#e3e1db]">The Synthesis Era</h4>
            <p className="font-sans text-stone-400 leading-relaxed font-light mb-4 text-lg">
              The pivotal moment in Vang's career arrived during a solitary retreat in 2015. Stripping her palette down to monochrome bases with radical primary contrasts, she initiated her acclaimed "Synthesis" series. This marked a final departure from representational art, focusing exclusively on the physical act of painting and the kinetic energy of the medium.
            </p>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-[#e3e1db]">Selected Exhibitions & Bibliography</h4>
            <ul className="space-y-4 font-sans text-stone-400 font-light text-sm md:text-base">
              <li className="grid grid-cols-4 gap-4 pb-4 border-b border-stone-850">
                <span className="col-span-1 font-medium text-white">2024</span>
                <span className="col-span-3">Venice Biennale, <i className="text-stone-300">"Echoes of the Unseen"</i> (Solo)</span>
              </li>
              <li className="grid grid-cols-4 gap-4 pb-4 border-b border-stone-850">
                <span className="col-span-1 font-medium text-white">2023</span>
                <span className="col-span-3">Tate Modern London, <i className="text-stone-300">"Contemporary Movements"</i> (Group)</span>
              </li>
              <li className="grid grid-cols-4 gap-4 pb-4 border-b border-stone-850">
                <span className="col-span-1 font-medium text-white">2021</span>
                <span className="col-span-3">Genesis Galerie Paris, <i className="text-stone-300">"Silent Echoes"</i> (Solo)</span>
              </li>
              <li className="grid grid-cols-4 gap-4 pb-4 border-b border-stone-850">
                <span className="col-span-1 font-medium text-white">2018</span>
                <span className="col-span-3">MoMA PS1 New York, <i className="text-stone-300">"New Abstraction"</i> (Group)</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center pt-20 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariant}
          className="order-2 lg:order-1"
        >
          <div className="w-12 h-[2px] bg-white mb-8"></div>
          <h2 className="font-display text-4xl md:text-6xl mb-8 italic">The Philosophy of Texture.</h2>
          <TypewriterText text="I believe that art should not merely represent reality, but actively distort it to reveal the emotional undercurrents we often ignore. My process is physical—involving the aggressive layering of oil, rapid destruction of form, and a meticulous rebuilding of chromatic fields." className="font-sans text-lg md:text-xl text-stone-300 leading-relaxed font-light mb-6" />
          <TypewriterText text="Through abstract expression, I seek a universal dialogue, a place where the logic of language ends and visceral feeling begins." className="font-sans text-lg md:text-xl text-stone-300 leading-relaxed font-light mb-12" />
          
          <ProgressiveImg 
            src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80" 
            alt="Studio details" 
            className="w-full md:w-2/3 shadow-xl aspect-[4/3]"
            imgClassName="grayscale opacity-80"
          />
        </motion.div>
        
        <div className="order-1 lg:order-2 relative h-[50vh] lg:h-[70vh] w-full overflow-hidden">
          <ProgressiveImg 
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1000&q=80" 
            alt="Artist in studio" 
            className="absolute inset-0 w-full h-full"
            imgClassName="grayscale contrast-125"
          />
          <div className="absolute inset-0 border-[16px] md:border-[32px] border-stone-950 z-10 pointer-events-none"></div>
        </div>
      </section>

    </div>
  );
};
