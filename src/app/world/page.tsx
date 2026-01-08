"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Globe, Anchor } from 'lucide-react';

// --- Components ---

const InfiniteMarquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-hidden border-y border-white/5 py-20 bg-black">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} className="text-5xl md:text-8xl font-serif text-white/5 italic uppercase tracking-tighter hover:text-[#B89B5E]/20 transition-colors cursor-default">
            {item} —
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function WorldOfRolex() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="bg-[#0B0B0C] text-[#F5F5F2] min-h-screen selection:bg-[#B89B5E] overflow-hidden">
      
      {/* 1. STICKY NAV */}
      <nav className="font-serif  cursor-pointer fixed top-0 w-full z-50 mix-blend-difference px-12 py-12 flex justify-between items-center transition-all">
        <Link href="/">
          <div className="font-serif text-2xl text-[#B89B5E]  tracking-[0.8em] hover:text-[#C0C0C0] transition-all cursor-pointer">ROLEX</div>
        </Link>
        <div className="flex items-center gap-6">
           <div className="h-[1px] w-12 bg-[#B89B5E]" />
           <span className="text-[10px] tracking-[0.5em] text-[#B89B5E] uppercase font-bold underline underline-offset-8">World of Rolex</span>
        </div>
      </nav>

      {/* 2. HERO: THE CROWN'S HORIZON */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-40">
           <motion.img 
             style={{ scale: useTransform(smoothProgress, [0, 0.3], [1, 1.2]) }}
             src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=1500" 
             className="w-full h-full object-cover grayscale contrast-125"
           />
        </div>
        <div className="relative z-10 px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[10px] tracking-[1.2em] text-[#B89B5E] uppercase font-bold mb-10"
          >
            A Legacy of Excellence
          </motion.p>
          <h1 className="text-7xl md:text-[13vw] font-serif leading-[0.75] tracking-tighter">
            WORLD OF <br /> <span className="text-[#B89B5E] italic">ROLEX.</span>
          </h1>
        </div>
        
        <motion.div 
           style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
           className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
           <span className="text-[8px] tracking-[0.5em] text-white/30 uppercase">Scroll to Explore</span>
           <div className="h-12 w-[1px] bg-[#B89B5E]" />
        </motion.div>
      </section>

      {/* 3. PERPETUAL PLANET: THE NARRATIVE */}
      <section className="py-64 px-12 max-w-[1600px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-4">
               <span className="text-[10px] tracking-[0.6em] text-[#B89B5E] font-bold">PERPETUAL PLANET</span>
               <h2 className="text-6xl md:text-8xl font-serif italic leading-none">Preserving <br /> the <span className="text-white/20 uppercase">Blue.</span></h2>
            </div>
            <p className="text-xl text-[#888888] font-light leading-relaxed max-w-xl border-l-2 border-[#B89B5E] pl-16">
              Rolex is committed to supporting those who are dedicated to the preservation of our world. Through the Perpetual Planet initiative, we partner with mission-driven pioneers to protect our oceans, forests, and wild spaces.
            </p>
            <div className="pt-8">
              <button className="flex items-center gap-8 group">
                <span className="text-[11px] tracking-[0.4em] uppercase font-bold border-b border-[#B89B5E] pb-4 group-hover:pr-12 transition-all">Explore the Initiative</span>
                <ArrowUpRight size={18} className="text-[#B89B5E] group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 relative">
             <div className="aspect-video bg-[#141414] overflow-hidden group border border-white/5">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  src="https://i.pinimg.com/1200x/28/c9/66/28c96637dbc4ba701b1b08721f1fc644.jpg" 
                  className="w-full h-full object-cover  opacity-60 group-hover:opacity-100 transition-all duration-[2s]" 
                />
             </div>
             {/* HUD Detail */}
             <div className="absolute -bottom-8 -left-8 bg-[#0B0B0C] p-8 border border-white/5 space-y-2">
                <p className="text-[8px] tracking-widest text-[#B89B5E]">DEEP SEA EXPLORATION</p>
                <p className="text-xs uppercase italic font-light">10,908 Meters Below</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. INFINITE PARTNERSHIPS */}
      <InfiniteMarquee items={["TENNIS", "FORMULA 1", "YACHTING", "GOLF", "EXPLORATION", "CINEMA", "ARTS"]} />

      {/* 5. THE THREE PILLARS (Triptych Gallery) */}
      <section className="py-64 px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             { title: "Sporting Mastery", label: "Athleticism", img: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800" },
             { title: "Artistic Achievement", label: "Culture", img: "https://i.pinimg.com/736x/fa/c4/53/fac453cfde168b48c4aae13b2dd1deae.jpg" },
             { title: "Pioneering Spirit", label: "Nature", img: "https://images.unsplash.com/photo-1527549993586-dff825b37782?q=80&w=800" }
           ].map((pillar, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -20 }}
               className="relative group aspect-[4/6] overflow-hidden cursor-crosshair"
             >
                <img src={pillar.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1.5s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-12 left-12 space-y-4">
                   <span className="text-[9px] tracking-[0.5em] text-[#B89B5E] font-bold uppercase">{pillar.label}</span>
                   <h3 className="text-3xl font-serif italic">{pillar.title}</h3>
                </div>
             </motion.div>
           ))}
        </div>
      </section>

      {/* 6. MINIMALIST FOOTER */}
      <footer className="py-32 px-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="font-serif text-3xl tracking-[1em] opacity-20">ROLEX</div>
        <p className="text-[9px] tracking-[0.5em] text-[#888888] uppercase">The World of Rolex — © 2026</p>
        <div className="flex gap-12">
           <span className="text-[9px] tracking-widest text-[#B89B5E] font-bold cursor-pointer hover:text-white transition-colors uppercase">YouTube</span>
           <span className="text-[9px] tracking-widest text-[#B89B5E] font-bold cursor-pointer hover:text-white transition-colors uppercase">Instagram</span>
        </div>
      </footer>
    </main>
  );
}