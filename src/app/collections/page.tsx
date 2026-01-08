"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ArrowRight, Maximize2, ChevronRight, Compass } from 'lucide-react';

// --- Theme Config ---
const COLORS = {
  bg: "#0B0B0C",
  accent: "#B89B5E", // Rolex Gold
  text: "#F5F5F2",
  muted: "#888888",
};

// --- Watch Data ---
const WATCHES = [
  { id: 1, name: "Day-Date 40", ref: "228238", category: "Classic", material: "18ct Yellow Gold", bezel: "Fluted", img: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800", path: "/collections/day-date" },
  { id: 2, name: "Submariner Date", ref: "126610LV", category: "Professional", material: "Oystersteel", bezel: "Unidirectional", img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=800", path: "/collections/submariner" },
  { id: 3, name: "Cosmograph Daytona", ref: "126500LN", category: "Professional", material: "Oystersteel", bezel: "Cerachrom", img: "https://images.unsplash.com/photo-1657104996708-044ef9812f85?w=600", path: "/collections/daytona" },
  { id: 4, name: "Sky-Dweller", ref: "336934", category: "Classic", material: "White Rolesor", bezel: "Ring Command", img: "https://images.unsplash.com/photo-1739145349551-6bd99442c50f?w=600", path: "/collections/sky-dweller" },
  { id: 5, name: "GMT-Master II", ref: "126710GRNR", category: "Professional", material: "Oystersteel", bezel: "24-Hour Graduated", img: "https://images.unsplash.com/photo-1604384703951-f26f6ca63a08?w=600", path: "/collections/gmt-master" },
  { id: 6, name: "Explorer II", ref: "226570", category: "Professional", material: "Oystersteel", bezel: "Fixed 24-Hour", img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?q=80&w=800", path: "/collections/explorer" },
];

// --- Enhanced Hover Card Component ---
const WatchExhibitionCard = ({ watch }: { watch: typeof WATCHES[0] }) => {
  return (
    <Link href={watch.path}>
      <motion.div 
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="group relative cursor-none"
      >
        {/* The Frame */}
        <div className="relative aspect-[3/4] overflow-hidden bg-black mb-10 border border-white/5 transition-all duration-700 group-hover:border-[#B89B5E]/40">
          
          {/* Image with Parallax Scale */}
          <motion.img 
            src={watch.img} 
            alt={watch.name} 
            className="w-full h-full object-cover grayscale opacity-60 contrast-125 transition-all duration-[1.2s] group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
          />

          {/* Luxury Technical Overlay (Corner Marks) */}
          <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#B89B5E]/0 group-hover:border-[#B89B5E]/50 transition-all duration-500" />
          <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#B89B5E]/0 group-hover:border-[#B89B5E]/50 transition-all duration-500" />

          {/* Technical Spec Mask (Glides in from bottom) */}
          <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.16, 1, 0.3, 1] bg-gradient-to-t from-black via-black/40 to-transparent p-8 flex flex-col justify-end">
            <div className="space-y-6">
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <p className="text-[8px] text-[#B89B5E] tracking-[0.4em] uppercase font-bold">Material</p>
                  <p className="text-xs text-white uppercase tracking-widest">{watch.material}</p>
                </div>
                <Maximize2 size={14} className="text-[#B89B5E]" />
              </div>
              <div className="flex justify-between items-end border-b border-white/10 pb-4">
                <div className="space-y-1">
                  <p className="text-[8px] text-[#B89B5E] tracking-[0.4em] uppercase font-bold">Bezel</p>
                  <p className="text-xs text-white uppercase tracking-widest">{watch.bezel}</p>
                </div>
                <Compass size={14} className="text-[#B89B5E]" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Metadata */}
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <p className="text-[9px] tracking-[0.5em] text-[#B89B5E] font-bold uppercase overflow-hidden">
               <motion.span 
                 initial={{ y: "100%" }} 
                 whileInView={{ y: 0 }} 
                 className="block"
               >
                 {watch.ref}
               </motion.span>
            </p>
            <h3 className="text-3xl font-serif italic tracking-tighter group-hover:text-[#B89B5E] transition-colors duration-500">
              {watch.name}
            </h3>
          </div>
          <motion.div 
            whileHover={{ scale: 1.2, rotate: -45 }}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#B89B5E] group-hover:border-[#B89B5E] transition-all duration-500"
          >
            <ArrowRight size={16} className="group-hover:text-black transition-colors" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

export default function RolexCollections() {
  const [filter, setFilter] = useState("All");
  const pathname = usePathname();
  const filteredWatches = filter === "All" ? WATCHES : WATCHES.filter(w => w.category === filter);

  return (
    <div className="bg-[#0B0B0C] text-[#F5F5F2] min-h-screen font-sans selection:bg-[#B89B5E] selection:text-white">
      
      {/* Navigation (Integrated Links) */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-12 py-12 flex justify-between items-center">
        <Link href="/">
          <div className="font-serif text-2xl tracking-[0.8em] hover:text-[#B89B5E] transition-all cursor-pointer">ROLEX</div>
        </Link>
        <div className="flex space-x-12 items-center">
          <Link href="/">
            <span className="text-[10px] tracking-[0.3em] text-[#888888] uppercase cursor-pointer hover:text-white transition-colors">Home</span>
          </Link>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-[10px] tracking-[0.3em] font-bold text-[#B89B5E] uppercase border-b border-[#B89B5E] pb-1">Collections</span>
        </div>
      </nav>

      {/* Hero Section - Cleaner Typography */}
      <section className="pt-64 pb-32 px-12 border-b border-white/5">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-8">
              <motion.p 
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                className="text-[10px] tracking-[1.2em] text-[#B89B5E] uppercase font-bold mb-10"
              >
                The 2026 Selection
              </motion.p>
              <h1 className="text-7xl md:text-[11vw] font-serif italic leading-[0.75] tracking-tighter">
                Sovereign <br /> <span className="text-white/10 uppercase italic">Collection.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 lg:text-right">
               <p className="text-[#888888] text-lg font-light leading-relaxed max-w-sm ml-auto border-r-2 border-[#B89B5E]/30 pr-8">
                 Experience the pinnacle of horological artistry. Engineered for the extremes, worn for eternity.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar (Instrument Style) */}
      <div className="top-0 z-40 bg-[#0B0B0C]/90 backdrop-blur-xl border-b border-white/5 py-10">
        <div className="max-w-[1500px] mx-auto px-12 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center bg-white/5 p-1 rounded-full border border-white/5">
            {["All", "Classic", "Professional"].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-10 py-3 rounded-full text-[10px] tracking-[0.4em] uppercase transition-all duration-500 ${filter === cat ? 'bg-[#B89B5E] text-black font-bold' : 'text-[#888888] hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-4 text-[9px] tracking-[0.4em] text-[#888888] uppercase">
              <Filter size={14} className="text-[#B89B5E]" />
              <span className="border-b border-white/10 pb-1">Sort by Movement</span>
            </div>
          </div>
        </div>
      </div>

      {/* Watch Exhibition Grid */}
      <section className="py-40 px-12 max-w-[1500px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-48">
          <AnimatePresence mode='wait'>
            {filteredWatches.map((watch) => (
              <WatchExhibitionCard key={watch.id} watch={watch} />
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Material Education Section (Macro Focus) */}
      <section className="py-64 px-12 bg-black border-y border-white/5 overflow-hidden">
        <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32 items-center">
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-4">
               <span className="text-[10px] tracking-[0.6em] text-[#B89B5E] font-bold">0904L ALLOY</span>
               <h2 className="text-6xl md:text-8xl font-serif italic leading-none">The Alchemy of <span className="text-white/20">Steel.</span></h2>
            </div>
            <p className="text-[#888888] text-xl font-light leading-relaxed max-w-xl pl-12 border-l border-[#B89B5E]">
              Rolex uses Oystersteel for its watch cases. Specially developed for the aerospace industry, it is extremely resistant to corrosion and acquires an exceptional finish when polished.
            </p>
            <div className="pt-8">
              <button className="flex items-center gap-8 group">
                <span className="text-[11px] tracking-[0.4em] uppercase font-bold border-b border-[#B89B5E] pb-4 group-hover:pr-12 transition-all">Savoir-Faire Metals</span>
                <ChevronRight size={18} className="text-[#B89B5E]" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 relative">
             <div className="h-2 w-2 rounded-full bg-[#B89B5E] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 animate-pulse" />
             <div className="aspect-[4/5] bg-[#0B0B0C] relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=800" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-[2s]" />
             </div>
             <div className="aspect-[4/5] bg-[#0B0B0C] translate-y-20 relative group overflow-hidden">
                <img src="https://images.unsplash.com/photo-1730757679771-b53e798846cf?w=600" className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-100 transition-all duration-[2s]" />
             </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="py-40 px-12 text-center border-t border-white/5">
        <div className="font-serif text-4xl tracking-[1em] mb-12 opacity-40">ROLEX</div>
        <div className="flex justify-center gap-16 text-[9px] tracking-[0.6em] text-[#888888] uppercase mb-20 font-bold">
           <span className="hover:text-[#B89B5E] cursor-pointer">Privacy</span>
           <span className="hover:text-[#B89B5E] cursor-pointer">Terms</span>
           <span className="hover:text-[#B89B5E] cursor-pointer">Geneva</span>
        </div>
        <p className="text-[9px] tracking-[0.4em] text-white/10 uppercase">© 2026 ROLEX S.A. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}