import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'motion/react';

// ==========================================
// DATA
// ==========================================
export const artworks = [
  { id: 1, title: "Ethereal Echoes", medium: "Oil on Canvas", year: "2024", size: "120 x 150 cm", price: "$5,200", status: "Available", image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1600&q=80", description: "An exploration of memory and the fading boundaries of time. Layers of translucent oil paint mimic the imperfect recall of past experiences." },
  { id: 2, title: "Geometric Silence", medium: "Acrylic on Panel", year: "2023", size: "90 x 120 cm", price: "$1,800", status: "Available", image: "https://images.unsplash.com/photo-1580136608260-4eb11f4b24fe?auto=format&fit=crop&w=1600&q=80", description: "Abstracted architectural forms stripping away the noise of the city to reveal pure structural quiet." },
  { id: 3, title: "Midnight Synthesis", medium: "Mixed Media on Board", year: "2023", size: "90 x 120 cm", price: "$3,500", status: "Sold Out", image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1600&q=80", description: "Cityscapes deconstructed into raw emotional values. The aggressive textures contrast with deep, absorbing shadowed fields." },
  { id: 4, title: "Chromatic Drift", medium: "Acrylic & Graphite", year: "2025", size: "200 x 200 cm", price: "$8,000", status: "Available", image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?auto=format&fit=crop&w=1600&q=80", description: "A bold statement on kinetic energy. The piece pulls the eye across the canvas with relentless momentum, refusing to offer a resting point." },
  { id: 5, title: "Study in Blue No. 4", medium: "Oil on Linen", year: "2022", size: "60 x 80 cm", price: "$2,500", status: "Available", image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?auto=format&fit=crop&w=1600&q=80", description: "Minimalist exploration of ultramarine gradients, seeking depth within a single hue." },
  { id: 6, title: "Golden Fragment", medium: "Gold Leaf & Oil", year: "2024", size: "100 x 100 cm", price: "$3,100", status: "Sold Out", image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1600&q=80", description: "Incorporating metallic reflections to invite the viewer's own environment into the static piece." }
];

export const pressMentions = [
  '"A MASTERCLASS IN TEXTURE" — THE MODERN ART REVIEW',
  'SOLO EXHIBITION: "SILENT ECHOES" @ GENESIS GALERIE, PARIS',
  '"VISCERAL AND UNCOMPROMISING" — CONTEMPORARY CANVAS',
  'FEATURED ARTIST — VENICE BIENNALE 2024',
  'AWARDED BEST EMERGING ARTIST 2023',
  '"REDEFINING MINIMALISM" — ARTFORUM',
  '"AN EMOTIONAL TOUR DE FORCE" — THE AESTHETIC CHRONICLE'
];

// ==========================================
// ANIMATION VARIANTS
// ==========================================
export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export const textContainerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.02 } }
};

export const wordVariant = {
  hidden: { opacity: 0, filter: "blur(4px)", y: 5 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

// ==========================================
// SHARED COMPONENTS
// ==========================================
export const TypewriterText = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(" ");
  return (
    <motion.p variants={textContainerVariant} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className={className}>
      {words.map((word, i) => (
        <motion.span key={i} variants={wordVariant} className="inline-block mr-[0.25em]">
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
};

export const InteractiveTitle = ({ title, sizeClass = "text-5xl md:text-8xl lg:text-9xl" }: { title: string, sizeClass?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      data-cursor-target="true"
      style={{ perspective: 1000 }}
      className="inline-block relative z-20 py-8 px-4"
    >
      <motion.h1
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`font-display ${sizeClass} tracking-[0.1em] uppercase drop-shadow-2xl cursor-none leading-none`}
      >
        <span style={{ transform: "translateZ(40px)", display: "inline-block", textShadow: "0px 10px 40px rgba(0,0,0,0.4)" }}>
          {title}
        </span>
      </motion.h1>
    </motion.div>
  );
};

export const ProgressiveImg = ({ 
  src, 
  alt, 
  className = "", 
  imgClassName = "", 
  skeletonTheme = "bg-stone-300" 
}: { 
  src: string, 
  alt: string, 
  className?: string, 
  imgClassName?: string,
  skeletonTheme?: string 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) {
      setIsLoaded(true);
    }
  }, []);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
       <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${isLoaded ? 'opacity-0 pointer-events-none' : `animate-pulse ${skeletonTheme}`}`} />
       <img 
         ref={imgRef}
         src={src} 
         alt={alt}
         onLoad={() => setIsLoaded(true)}
         className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${imgClassName} relative z-10`}
       />
    </div>
  );
};
