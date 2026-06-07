import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fadeUpVariant } from '../components/Shared';

export const Contact = () => {
  const [inquiryType, setInquiryType] = useState('General');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setIsSubmitted(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const categories = ['General', 'Acquisition', 'Curation', 'Commission'];

  return (
    <div className="bg-stone-950 text-white pt-28 pb-24 md:pt-36 min-h-screen flex items-center relative overflow-hidden">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT COLUMN: Studio Info & Location */}
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }} 
            variants={fadeUpVariant}
            className="lg:col-span-5 space-y-12"
          >
            <div className="space-y-6">
              <div className="text-xs tracking-[0.4em] uppercase text-stone-400 font-bold border-l-2 border-white pl-4 inline-block">Connect</div>
              <h2 className="font-display text-5xl md:text-6xl italic text-white leading-tight">
                Let's begin the dialogue.
              </h2>
              <p className="font-sans text-stone-400 font-light text-base md:text-lg leading-relaxed">
                Whether you seek to commission a monumental statement, acquire an archive piece, or discuss curatorial opportunities.
              </p>
            </div>

            {/* Studio Info Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-stone-850">
              <div className="space-y-2">
                <h4 className="font-display text-lg text-stone-300 italic">Paris Studio</h4>
                <p className="font-sans text-stone-500 text-sm font-light leading-relaxed">
                  18 Rue de l'Odéon<br />
                  75006 Paris, France
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-lg text-stone-300 italic">Tokyo Representative</h4>
                <p className="font-sans text-stone-500 text-sm font-light leading-relaxed">
                  2 Chome Minamiaoyama<br />
                  Minato-ku, Tokyo, Japan
                </p>
              </div>
            </div>

            {/* Direct Contacts & Socials */}
            <div className="space-y-4 pt-6 border-t border-stone-850">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-stone-500 block mb-1">Direct Inquiries</span>
                <a 
                  href="mailto:studio@elenavang.com" 
                  data-cursor-target="true"
                  className="font-sans text-white hover:text-stone-400 transition-colors text-lg font-light cursor-none"
                >
                  studio@elenavang.com
                </a>
              </div>

              <div className="pt-2">
                <span className="text-[10px] tracking-widest uppercase text-stone-500 block mb-2">Digital Archives & Socials</span>
                <div className="flex gap-6 text-sm tracking-wider uppercase font-semibold">
                  <a href="#instagram" data-cursor-target="true" className="text-stone-400 hover:text-white transition-colors cursor-none">Instagram</a>
                  <a href="#artsy" data-cursor-target="true" className="text-stone-400 hover:text-white transition-colors cursor-none">Artsy</a>
                  <a href="#foundation" data-cursor-target="true" className="text-stone-400 hover:text-white transition-colors cursor-none">Foundation</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Interactive Form with state transitions */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 bg-stone-900/40 border border-stone-850 backdrop-blur-md p-8 md:p-12"
          >
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  {/* Step 1: Category Selector (Acquisition, Commission, etc.) */}
                  <div className="space-y-3">
                    <label className="text-xs tracking-widest uppercase text-stone-400 font-bold block">
                      Nature of Inquiry
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setInquiryType(cat)}
                          data-cursor-target="true"
                          className={`px-4 py-2 text-xs tracking-widest uppercase font-semibold transition-all border cursor-none ${
                            inquiryType === cat 
                              ? 'bg-white text-stone-950 border-white' 
                              : 'bg-transparent text-stone-400 border-stone-800 hover:border-stone-600'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
                    <div className="relative group">
                      <input 
                        type="text" 
                        id="name" 
                        value={formState.name}
                        onChange={handleInputChange}
                        placeholder=" " 
                        required 
                        className="block w-full py-4 bg-transparent border-0 border-b border-stone-850 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors font-sans text-white" 
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute text-xs tracking-widest uppercase text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Your Name
                      </label>
                    </div>

                    <div className="relative group">
                      <input 
                        type="email" 
                        id="email" 
                        value={formState.email}
                        onChange={handleInputChange}
                        placeholder=" " 
                        required 
                        className="block w-full py-4 bg-transparent border-0 border-b border-stone-850 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors font-sans text-white" 
                      />
                      <label 
                        htmlFor="email" 
                        className="absolute text-xs tracking-widest uppercase text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                      >
                        Your Email
                      </label>
                    </div>
                  </div>

                  <div className="relative group pt-4">
                    <textarea 
                      id="message" 
                      rows={5} 
                      value={formState.message}
                      onChange={handleInputChange}
                      placeholder=" " 
                      required 
                      className="block w-full py-4 bg-transparent border-0 border-b border-stone-850 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors font-sans text-white resize-none"
                    ></textarea>
                    <label 
                      htmlFor="message" 
                      className="absolute text-xs tracking-widest uppercase text-stone-500 duration-300 transform -translate-y-6 scale-75 top-4 z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Describe your project, space, or inquiry details
                    </label>
                  </div>

                  <div className="pt-6">
                    <button 
                      data-cursor-target="true" 
                      type="submit" 
                      className="w-full bg-white text-stone-950 hover:bg-stone-200 transition-colors font-sans tracking-[0.2em] uppercase text-xs font-bold py-5 cursor-none"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </motion.form>
              ) : (
                /* Success Animation State */
                <motion.div 
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="py-16 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 border border-white rounded-full flex items-center justify-center mb-4 text-white">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  
                  <h3 className="font-display text-3xl italic text-white">Inquiry Received.</h3>
                  <p className="font-sans text-stone-400 font-light text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-white">{formState.name}</span>. Your {inquiryType.toLowerCase()} request has been sent to Elena Vang Studio. We will contact you at <span className="font-semibold text-white">{formState.email}</span> within 24 hours.
                  </p>

                  <div className="pt-6">
                    <button 
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormState({ name: '', email: '', message: '' });
                      }}
                      data-cursor-target="true" 
                      className="border border-white/20 hover:border-white px-6 py-3 text-xs tracking-widest uppercase font-semibold text-stone-300 hover:text-white transition-colors cursor-none"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </div>
  );
};
