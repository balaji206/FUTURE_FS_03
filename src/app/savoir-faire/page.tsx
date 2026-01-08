"use client";

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Settings, Shield, Zap, Target, Layers } from 'lucide-react';

export default function SavoirFaire() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main ref={containerRef} className="bg-[#0B0B0C] text-[#F5F5F2] min-h-screen selection:bg-[#B89B5E] overflow-hidden">
      
      {/* 1. BACK TO HOME COMPASS */}
      <nav className="fixed top-0 w-full z-50 mix-blend-difference px-12 py-12 flex justify-between items-center">
        <Link href="/">
          <motion.div 
           
            className="font-serif text-2xl tracking-[0.8em] cursor-pointer"
          >
            ROLEX
          </motion.div>
        </Link>
        <div className="flex items-center gap-4">
           <div className="h-[1px] w-12 bg-[#B89B5E]" />
           <span className="text-[10px] tracking-[0.5em] text-[#B89B5E] uppercase font-bold underline underline-offset-8">Savoir-Faire</span>
        </div>
      </nav>

      {/* 2. HERO: THE MECHANICAL REVEAL */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        {/* Background Blueprint Grid */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#B89B5E 0.5px, transparent 0.5px)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "1.2em" }}
            transition={{ duration: 2 }}
            className="text-[10px] uppercase text-[#B89B5E] font-bold mb-10"
          >
            The Art of Precision
          </motion.div>
          <h1 className="text-7xl md:text-[12vw] font-serif italic leading-[0.8] tracking-tighter mb-10">
            SAVOIR <br /> <span className="text-white/5 uppercase">FAIRE.</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[11px] tracking-[0.4em] text-[#888888] uppercase max-w-sm mx-auto"
          >
            Engineering the perpetual heart of a legacy.
          </motion.p>
        </div>

        {/* Floating HUD Line */}
        <motion.div 
          style={{ height: useTransform(smoothProgress, [0, 0.2], [0, 200]) }}
          className="absolute bottom-0 w-[1px] bg-[#B89B5E] z-10" 
        />
      </section>

      {/* 3. THE HEART: ASYMMETRIC BLUEPRINT */}
      <section className="py-64 px-12 max-w-[1600px] mx-auto relative">
        {/* Decorative Technical Label */}
        <div className="absolute top-40 left-12 text-[9px] tracking-[0.3em] text-white/10 uppercase rotate-90 origin-left">
          Internal Architecture — Calibre 3235
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] tracking-[0.5em] text-[#B89B5E] font-bold">01</span>
                <div className="h-[1px] w-8 bg-[#B89B5E]/30" />
                <span className="text-[10px] tracking-[0.4em] text-[#888888] uppercase">The Heart</span>
              </div>
              <h2 className="text-6xl font-serif italic leading-tight">Mastery in <br /> every <span className="text-[#B89B5E]">rotation.</span></h2>
            </div>
            <p className="text-xl text-[#888888] font-light leading-relaxed pl-12 border-l border-[#B89B5E]/40">
              Rolex movements are developed entirely in-house. A universe of mechanical complexity, where every single part is manufactured to tolerances measured in microns.
            </p>
            <button className="group flex items-center gap-8 py-4 px-8 border border-white/5 rounded-full hover:border-[#B89B5E] transition-all duration-700">
               <span className="text-[10px] tracking-[0.4em] uppercase font-bold">View Schematics</span>
               <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform text-[#B89B5E]" />
            </button>
          </div>

          <div className="lg:col-span-7 relative group">
            {/* HUD Corner Elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-[#B89B5E]/30" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b border-r border-[#B89B5E]/30" />
            
            <div className="aspect-video overflow-hidden bg-[#141414]">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1619361728853-2542f3864532?q=80&w=1200" 
                className="w-full h-full object-cover grayscale contrast-125 opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-[2s]" 
                alt="Movement"
              />
            </div>

            {/* Floating Spec Tags */}
            <div className="absolute -bottom-10 left-10 bg-[#0B0B0C] border border-white/10 p-6 flex flex-col gap-1">
               <span className="text-[8px] tracking-widest text-[#B89B5E] uppercase">Oscillator</span>
               <span className="text-xs uppercase font-light">Paramagnetic Blue Parachrom</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TECHNICAL PILLARS: THE HUD CARDS */}
      <section className="py-40 px-12 max-w-[1400px] mx-auto border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-white/5">
          {[
            { 
              icon: <Target size={24} />, 
              title: "Parachrom", 
              sub: "Magnetic Stability", 
              desc: "A hairspring ten times more precise than a traditional one in case of shocks." 
            },
            { 
              icon: <Layers size={24} />, 
              title: "Paraflex", 
              sub: "Shock Absorption", 
              desc: "An exclusive shock absorber that increases the resistance of the staff by 50%." 
            },
            { 
              icon: <Zap size={24} />, 
              title: "Chronergy", 
              sub: "Energy Efficiency", 
              desc: "The escapement combines high dependability with unparalleled energy efficiency." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#0B0B0C] p-16 group cursor-crosshair transition-colors hover:bg-white/[0.02]"
            >
              <div className="text-[#B89B5E] mb-12 opacity-40 group-hover:opacity-100 transition-opacity">
                {item.icon}
              </div>
              <span className="text-[9px] tracking-[0.4em] text-[#B89B5E] font-bold uppercase mb-4 block">{item.sub}</span>
              <h3 className="text-4xl font-serif italic mb-6">{item.title}</h3>
              <p className="text-sm text-[#888888] leading-relaxed font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. MINIMALIST FOOTER */}
      <footer className="py-32 px-12 border-t border-white/5 text-center">
        <div className="font-serif text-3xl tracking-[1em] mb-12 opacity-20">ROLEX</div>
        <p className="text-[9px] tracking-[0.5em] text-white/20 uppercase">© 2026 ROLEX S.A. PERPETUAL SAVOIR-FAIRE</p>
      </footer>
    </main>
  );
}