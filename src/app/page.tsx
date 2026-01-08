// "use client";

// import React, { useRef, useEffect } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
// import { ArrowUpRight, MoveDown, Compass } from 'lucide-react';

// // --- Theme Configuration ---
// const THEME = {
//   bg: "#0B0B0C",
//   accent: "#B89B5E", // Rolex Gold
//   text: "#F5F5F2",   // Ivory
//   muted: "#888888",   // Platinum Silver
// };

// // --- ENHANCED: CENTERED TEXT ZOOM REVEAL ---
// const ScrollZoomSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   const containerScale = useTransform(smoothProgress, [0, 0.7], [0.3, 1]);
//   const initialTextOpacity = useTransform(smoothProgress, [0.3, 0.6], [1, 0]);
//   const initialTextScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
//   const finalTextOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
//   const finalTextY = useTransform(smoothProgress, [0.75, 0.9], [40, 0]);

//   return (
//     <section ref={containerRef} className="relative h-[400vh] bg-[#0B0B0C]">
//       <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
//         <motion.div 
//           style={{ opacity: initialTextOpacity, scale: initialTextScale }}
//           className="absolute z-0 flex flex-col items-center justify-center text-center px-6 max-w-3xl pointer-events-none mb-110"
//         >
//           <motion.span className="text-[#B89B5E] text-[10px] tracking-[0.8em] font-bold uppercase mb-8">
//             The Philosophy
//           </motion.span>
//           <h2 className="text-5xl md:text-7xl font-serif italic leading-tight text-white">
//             Excellence is not a <br /> 
//             <span className="text-white/20">destination, but a journey.</span>
//           </h2>
//           <p className="mt-8 text-[#888888] text-lg font-light tracking-wide max-w-lg mx-auto leading-relaxed">
//             Every component is a testament to our obsession with the infinite. Scroll to unveil the pinnacle of chronometric achievement.
//           </p>
//         </motion.div>

//         <motion.div 
//           style={{ scale: containerScale }}
//           className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden bg-[#0B0B0C] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)]"
//         >
//           <motion.img 
//             src="https://i.pinimg.com/1200x/d2/01/af/d201af5f1eef442cc1d772e8ac15ee89.jpg" 
//             alt="Rolex Precision Detail"
//             className="w-full h-full object-cover grayscale contrast-125 brightness-90"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
//           <motion.div 
//             style={{ opacity: finalTextOpacity, y: finalTextY }}
//             className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
//           >
//             <Compass className="text-[#B89B5E] mb-8" size={48} strokeWidth={1} />
//             <h2 className="text-6xl md:text-[11vw] font-serif italic leading-none tracking-tighter text-white">
//               Superlative <br /> <span className="text-[#B89B5E]">Precision.</span>
//             </h2>
//             <div className="mt-12 flex flex-col items-center gap-6">
//               <div className="h-16 w-[1px] bg-gradient-to-b from-[#B89B5E] to-transparent" />
//               <p className="text-[10px] tracking-[0.6em] text-white/50 uppercase font-bold">The Standard of the Crown</p>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// // --- REMAINING COMPONENTS ---

// const HUDElement = ({ label, value, side = "left" }: { label: string; value: string; side?: "left" | "right" }) => (
//   <div className={`flex flex-col ${side === "right" ? "items-end text-right" : "items-start"}`}>
//     <span className="text-[8px] tracking-[0.4em] text-[#B89B5E] uppercase font-bold mb-1">{label}</span>
//     <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-light">{value}</span>
//   </div>
// );

// const SectionHeader = ({ number, title, subtitle }: { number: string; title: string; subtitle: string }) => (
//   <div className="mb-24 px-8 md:px-0">
//     <div className="flex items-center gap-4 mb-6">
//       <span className="text-[#B89B5E] text-[10px] font-bold tracking-[0.5em]">{number}</span>
//       <div className="h-[1px] w-12 bg-[#B89B5E]/30" />
//     </div>
//     <h2 className="text-6xl md:text-8xl font-serif italic mb-6 leading-none">{title}</h2>
//     <p className="text-[10px] tracking-[0.6em] text-[#888888] uppercase">{subtitle}</p>
//   </div>
// );

// const ScrollVideoSection = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
//   const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 50, mass: 0.5 });

//   useEffect(() => {
//     let requestID: number;
//     const updateVideoFrame = () => {
//       const video = videoRef.current;
//       if (video && video.readyState >= 2) {
//         video.currentTime = video.duration * smoothProgress.get();
//       }
//       requestID = requestAnimationFrame(updateVideoFrame);
//     };
//     requestID = requestAnimationFrame(updateVideoFrame);
//     return () => cancelAnimationFrame(requestID);
//   }, [smoothProgress]);

//   return (
//     <section ref={containerRef} className="h-[400vh] relative bg-[#0B0B0C]">
//       <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
//         <video ref={videoRef} src="/rolex-4.mp4" muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-60 contrast-125" />
//         <div className="absolute inset-0 z-20 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
//           <div className="flex justify-between items-start">
//              <HUDElement label="Architecture" value="Perpetual" />
//              <HUDElement label="Calibre" value="3235 MT" side="right" />
//           </div>
//           <motion.div style={{ opacity: useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }} className="text-center">
//             <h2 className="text-6xl md:text-[10vw] font-serif italic tracking-tighter mix-blend-difference text-white">Perpetual</h2>
//             <div className="flex items-center justify-center gap-4 mt-4">
//               <div className="h-[1px] w-12 bg-[#B89B5E]" />
//               <span className="text-[10px] tracking-[1em] text-[#B89B5E] uppercase font-bold">Precision</span>
//               <div className="h-[1px] w-12 bg-[#B89B5E]" />
//             </div>
//           </motion.div>
//           <div className="flex justify-between items-end border-t border-white/5 pt-12">
//             <HUDElement label="Certification" value="Superlative" />
//             <HUDElement label="Precision" value="-2/+2 SEC" side="right" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default function UltraLuxuryRolex() {
//   const pathname = usePathname();
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

//   return (
//     <div className="bg-[#0B0B0C] text-[#F5F5F2] font-sans selection:bg-[#B89B5E] selection:text-white">
//       <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-[#B89B5E] origin-left z-[100]" style={{ scaleX }} />

//       {/* --- GLASSMOPHISM NAVBAR --- */}
//       <nav className="fixed top-0 w-full z-50 px-12 py-6 flex justify-between items-center bg-[#0B0B0C]/40 backdrop-blur-md border-b border-white/5">
//         <Link href="/">
//           <div className="font-serif text-2xl tracking-[0.8em] hover:text-[#B89B5E] transition-all cursor-pointer">ROLEX</div>
//         </Link>
//         <div className="hidden lg:flex space-x-20 items-center">
//           {[{ name: 'Collections', path: '/collections' }, { name: 'Savoir-Faire', path: '/savoir-faire' }, { name: 'World of Rolex', path: '/world' }].map((link) => (
//             <Link key={link.name} href={link.path}>
//               <div className={`text-[10px] uppercase tracking-[0.5em] transition-all cursor-pointer ${pathname === link.path ? 'text-[#B89B5E]' : 'text-[#888888] hover:text-[#B89B5E]'}`}>
//                 {link.name}
//               </div>
//             </Link>
//           ))}
//           <Link href="/retailers">
//             <button className="text-[10px] tracking-[0.3em] font-bold border border-[#B89B5E]/20 px-6 py-2 rounded-full uppercase hover:bg-[#B89B5E] hover:text-black transition-all">
//               Retailers
//             </button>
//           </Link>
//         </div>
//       </nav>

//       {/* 1. HERO */}
//       <section className="relative h-screen flex flex-col items-center justify-center text-center">
//         <motion.img initial={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 3 }} src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2000" className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale contrast-125" />
//         <div className="relative z-10 space-y-12 px-4">
//           <p className="text-[11px] tracking-[1.2em] text-[#B89B5E] uppercase font-bold">The Perpetual Spirit</p>
//           <h1 className="text-7xl md:text-[12vw] font-serif leading-[0.8] tracking-tighter text-white uppercase italic">Enduring <br /> <span className="text-white/20">Legacy.</span></h1>
//           <MoveDown size={18} className="text-[#B89B5E] animate-bounce mx-auto" />
//         </div>
//       </section>

//       {/* 2. STORY */}
//       <section className="py-64 px-12 max-w-[1600px] mx-auto">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
//           <div className="lg:col-span-5 relative group">
//             <div className="absolute inset-0 border border-[#B89B5E]/20 translate-x-4 translate-y-4 group-hover:translate-x-0 transition-transform duration-700" />
//             <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1200" className="w-full h-[700px] object-cover" alt="Craft" />
//           </div>
//           <div className="lg:col-span-6 lg:col-start-7 space-y-12">
//             <SectionHeader number="01" title="The Craft" subtitle="Horological Mastery" />
//             <p className="text-xl text-[#888888] font-light leading-relaxed border-l-2 border-[#B89B5E] pl-12">Our movements are more than machines; they are the result of a century of architectural discipline and engineering obsession.</p>
//             <Link href="/savoir-faire" className="flex items-center gap-6 group">
//               <span className="text-[10px] tracking-[0.5em] uppercase font-bold group-hover:text-[#B89B5E] transition-colors">Discover Savoir-Faire</span>
//               <ArrowUpRight size={18} className="text-[#B89B5E]" />
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 3. ZOOM REVEAL SECTION */}
//       <ScrollZoomSection />

//       {/* 4. VIDEO SECTION */}
//       <ScrollVideoSection />

//       {/* 5. COLLECTION PREVIEW */}
//       <section className="py-64 px-12 max-w-[1400px] mx-auto">
//         <SectionHeader number="02" title="The Icons" subtitle="Timeless Presence" />
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
//           {[
//             { name: "Day-Date", ref: "228238", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" },
//             { name: "Submariner", ref: "124060", img: "https://images.unsplash.com/photo-1662384197911-e82189f4dc60?w=600" },
//             { name: "GMT-Master II", ref: "126710", img: "https://images.unsplash.com/photo-1730757679771-b53e798846cf?w=600" },
//           ].map((watch, i) => (
//             <Link key={i} href="/collections">
//               <motion.div className="group cursor-pointer" whileHover={{ y: -20 }}>
//                 <div className="aspect-[3/4] overflow-hidden border border-white/5 group-hover:border-[#B89B5E]/30 transition-colors mb-10">
//                   <img src={watch.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
//                 </div>
//                 <h3 className="text-3xl font-serif mb-2 italic">{watch.name}</h3>
//                 <p className="text-[9px] tracking-[0.4em] text-[#B89B5E] uppercase font-bold">Model {watch.ref}</p>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       <footer className="bg-black pt-64 pb-20 px-12 border-t border-white/5 text-center">
//         <h2 className="text-4xl font-serif tracking-[1em] mb-12 opacity-40">ROLEX</h2>
//         <p className="text-[9px] tracking-[0.6em] text-white/20 uppercase font-bold">© 2026 ROLEX S.A. ALL RIGHTS RESERVED.</p>
//       </footer>
//     </div>
//   );
// }



"use client";

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, MoveDown, Compass } from 'lucide-react';

// --- Theme Configuration ---
const THEME = {
  bg: "#0B0B0C",
  accent: "#B89B5E", // Rolex Gold
  text: "#F5F5F2",   // Ivory
  muted: "#888888",   // Platinum Silver
};

// --- ENHANCED: CENTERED TEXT ZOOM REVEAL ---
const ScrollZoomSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const containerScale = useTransform(smoothProgress, [0, 0.7], [0.3, 1]);
  const initialTextOpacity = useTransform(smoothProgress, [0.3, 0.6], [1, 0]);
  const initialTextScale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const finalTextOpacity = useTransform(smoothProgress, [0.75, 0.9], [0, 1]);
  const finalTextY = useTransform(smoothProgress, [0.75, 0.9], [40, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#0B0B0C]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ opacity: initialTextOpacity, scale: initialTextScale }}
          className="absolute z-0 flex flex-col items-center justify-center text-center px-6 max-w-3xl pointer-events-none mb-100"
        >
          <motion.span className="text-[#B89B5E] text-[10px] tracking-[0.8em] font-bold uppercase mb-8">
            The Philosophy
          </motion.span>
          <h2 className="text-5xl md:text-6xl font-serif italic leading-tight text-white">
            Excellence is not a <br /> 
            <span className="text-white/20">destination, but a journey.</span>
          </h2>
         
        </motion.div>

        <motion.div 
          style={{ scale: containerScale }}
          className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden bg-[#0B0B0C] border border-white/5 shadow-[0_0_100px_rgba(0,0,0,1)]"
        >
          <motion.img 
            src="https://i.pinimg.com/1200x/d2/01/af/d201af5f1eef442cc1d772e8ac15ee89.jpg" 
            alt="Rolex Precision Detail"
            className="w-full h-full object-cover grayscale contrast-125 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
          <motion.div 
            style={{ opacity: finalTextOpacity, y: finalTextY }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
          >
            <Compass className="text-[#B89B5E] mb-8" size={48} strokeWidth={1} />
            <h2 className="text-6xl md:text-[11vw] font-serif italic leading-none tracking-tighter text-white">
              Superlative <br /> <span className="text-[#B89B5E]">Precision.</span>
            </h2>
            <div className="mt-12 flex flex-col items-center gap-6">
              <div className="h-16 w-[1px] bg-gradient-to-b from-[#B89B5E] to-transparent" />
              <p className="text-[10px] tracking-[0.6em] text-white/50 uppercase font-bold">The Standard of the Crown</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// --- REMAINING COMPONENTS ---

const HUDElement = ({ label, value, side = "left" }: { label: string; value: string; side?: "left" | "right" }) => (
  <div className={`flex flex-col ${side === "right" ? "items-end text-right" : "items-start"}`}>
    <span className="text-[8px] tracking-[0.4em] text-[#B89B5E] uppercase font-bold mb-1">{label}</span>
    <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-light">{value}</span>
  </div>
);

const SectionHeader = ({ number, title, subtitle }: { number: string; title: string; subtitle: string }) => (
  <div className="mb-24 px-8 md:px-0">
    <div className="flex items-center gap-4 mb-6">
      <span className="text-[#B89B5E] text-[10px] font-bold tracking-[0.5em]">{number}</span>
      <div className="h-[1px] w-12 bg-[#B89B5E]/30" />
    </div>
    <h2 className="text-6xl md:text-8xl font-serif italic mb-6 leading-none">{title}</h2>
    <p className="text-[10px] tracking-[0.6em] text-[#888888] uppercase">{subtitle}</p>
  </div>
);

const ScrollVideoSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 300, damping: 50, mass: 0.5 });

  useEffect(() => {
    let requestID: number;
    const updateVideoFrame = () => {
      const video = videoRef.current;
      if (video && video.readyState >= 2) {
        video.currentTime = video.duration * smoothProgress.get();
      }
      requestID = requestAnimationFrame(updateVideoFrame);
    };
    requestID = requestAnimationFrame(updateVideoFrame);
    return () => cancelAnimationFrame(requestID);
  }, [smoothProgress]);

  return (
    <section ref={containerRef} className="h-[400vh] relative bg-[#0B0B0C]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <video ref={videoRef} src="/rolex-4.mp4" muted playsInline preload="auto" className="absolute inset-0 w-full h-full object-cover opacity-60 contrast-125" />
        <div className="absolute inset-0 z-20 p-12 md:p-20 flex flex-col justify-between pointer-events-none">
          <div className="flex justify-between items-start">
             <HUDElement label="Architecture" value="Perpetual" />
             <HUDElement label="Calibre" value="3235 MT" side="right" />
          </div>
          <motion.div style={{ opacity: useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 1, 0]) }} className="text-center">
            <h2 className="text-6xl md:text-[10vw] font-serif italic tracking-tighter mix-blend-difference text-white">Perpetual</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-[#B89B5E]" />
              <span className="text-[10px] tracking-[1em] text-[#B89B5E] uppercase font-bold">Precision</span>
              <div className="h-[1px] w-12 bg-[#B89B5E]" />
            </div>
          </motion.div>
          <div className="flex justify-between items-end border-t border-white/5 pt-12">
            <HUDElement label="Certification" value="Superlative" />
            <HUDElement label="Precision" value="-2/+2 SEC" side="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function UltraLuxuryRolex() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="bg-[#0B0B0C] text-[#F5F5F2] font-sans selection:bg-[#B89B5E] selection:text-white">
      <motion.div className="fixed top-0 left-0 right-0 h-[1px] bg-[#B89B5E] origin-left z-[100]" style={{ scaleX }} />

      {/* --- GLASSMOPHISM NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 px-12 py-6 flex justify-between items-center bg-[#0B0B0C]/40 backdrop-blur-md border-b border-white/5">
        <Link href="/">
          <div className="font-serif text-2xl tracking-[0.8em] hover:text-[#B89B5E] transition-all cursor-pointer">ROLEX</div>
        </Link>
        <div className="hidden lg:flex space-x-20 items-center">
          {[{ name: 'Collections', path: '/collections' }, { name: 'Savoir-Faire', path: '/savoir-faire' }, { name: 'World of Rolex', path: '/world' }].map((link) => (
            <Link key={link.name} href={link.path}>
              <div className={`text-[10px] uppercase tracking-[0.5em] transition-all cursor-pointer ${pathname === link.path ? 'text-[#B89B5E]' : 'text-[#888888] hover:text-[#B89B5E]'}`}>
                {link.name}
              </div>
            </Link>
          ))}
          <Link href="/retailers">
            <button className="text-[10px] tracking-[0.3em] font-bold border border-[#B89B5E]/20 px-6 py-2 rounded-full uppercase hover:bg-[#B89B5E] hover:text-black transition-all">
              Retailers
            </button>
          </Link>
        </div>
      </nav>

      {/* 1. HERO */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center">
        <div className="absolute inset-0 z-0">
         <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.5 }} transition={{ duration: 2.5 }} src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2000" className="w-full h-full object-cover contrast-125" />
      </div>
       <div className="relative z-10 space-y-12 px-4">
        <p className="text-[11px] tracking-[1.2em] text-[#B89B5E] uppercase font-bold mb-8">The Perpetual Spirit</p>
        <h1 className="text-7xl md:text-[12vw] font-serif leading-[0.8] tracking-tighter">MASTER <br /> <span className="text-white/20 italic">OF TIME.</span></h1>
        <MoveDown size={18} className="text-[#B89B5E] animate-bounce mx-auto" strokeWidth={1} />
      </div>
    </section>
      {/* 2. STORY */}
      <section className="py-64 px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 border border-[#B89B5E]/20 translate-x-4 translate-y-4 group-hover:translate-x-0 transition-transform duration-700" />
            <img src="https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=1200" className="w-full h-[700px] object-cover" alt="Craft" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-12">
            <SectionHeader number="01" title="The Craft" subtitle="Horological Mastery" />
            <p className="text-xl text-[#888888] font-light leading-relaxed border-l-2 border-[#B89B5E] pl-12">Our movements are more than machines; they are the result of a century of architectural discipline and engineering obsession.</p>
            <Link href="/savoir-faire" className="flex items-center gap-6 group">
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold group-hover:text-[#B89B5E] transition-colors">Discover Savoir-Faire</span>
              <ArrowUpRight size={18} className="text-[#B89B5E]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ZOOM REVEAL SECTION */}
      <ScrollZoomSection />

      {/* 4. VIDEO SECTION */}
      <ScrollVideoSection />

      {/* 5. COLLECTION PREVIEW */}
      <section className="py-64 px-12 max-w-[1400px] mx-auto">
        <SectionHeader number="02" title="The Icons" subtitle="Timeless Presence" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {[
            { name: "Day-Date", ref: "228238", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" },
            { name: "Submariner", ref: "124060", img: "https://images.unsplash.com/photo-1662384197911-e82189f4dc60?w=600" },
            { name: "GMT-Master II", ref: "126710", img: "https://images.unsplash.com/photo-1730757679771-b53e798846cf?w=600" },
          ].map((watch, i) => (
            <Link key={i} href="/collections">
              <motion.div className="group cursor-pointer" whileHover={{ y: -20 }}>
                <div className="aspect-[3/4] overflow-hidden border border-white/5 group-hover:border-[#B89B5E]/30 transition-colors mb-10">
                  <img src={watch.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
                <h3 className="text-3xl font-serif mb-2 italic">{watch.name}</h3>
                <p className="text-[9px] tracking-[0.4em] text-[#B89B5E] uppercase font-bold">Model {watch.ref}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-black pt-64 pb-20 px-12 border-t border-white/5 text-center">
        <h2 className="text-4xl font-serif tracking-[1em] mb-12 opacity-40">ROLEX</h2>
        <p className="text-[9px] tracking-[0.6em] text-white/20 uppercase font-bold">© 2026 ROLEX S.A. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}