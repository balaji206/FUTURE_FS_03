"use client";

import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';

export default function Retailers() {
  const BOUTIQUES = [
    { city: "Geneva", address: "Rue de la Fontaine 3", status: "Open" },
    { city: "Paris", address: "Place Vendôme 9", status: "Open" },
    { city: "London", address: "New Bond Street 100", status: "Appointment only" },
  ];

  return (
    <div className="bg-[#0B0B0C] text-[#F5F5F2] min-h-screen pt-40 px-12">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
        
        {/* Contact Side */}
        <div className="lg:col-span-5 space-y-12">
          <span className="text-[10px] tracking-[0.5em] text-[#B89B5E] font-bold">BOUTIQUE FINDER</span>
          <h1 className="text-6xl md:text-8xl font-serif italic">Find a <br /> Retailer.</h1>
          <p className="text-[#888888] text-lg font-light leading-relaxed">
            Rolex watches are sold only by Official Rolex Retailers. With the necessary skills and technical know-how, they help you make the choice that will last a lifetime.
          </p>
          
          <div className="relative border-b border-white/10 pb-4 flex items-center justify-between">
            <input 
              type="text" 
              placeholder="ENTER CITY OR POSTCODE" 
              className="bg-transparent text-xs tracking-widest uppercase focus:outline-none w-full"
            />
            <MapPin size={18} className="text-[#B89B5E]" />
          </div>
        </div>

        {/* Listing Side */}
        <div className="lg:col-span-7 space-y-4">
          {BOUTIQUES.map((store, i) => (
            <div 
              key={i} 
              className="p-12 border border-white/5 hover:border-[#B89B5E]/40 transition-all group flex justify-between items-center bg-white/[0.01]"
            >
              <div className="space-y-4">
                <h3 className="text-3xl font-serif italic">{store.city}</h3>
                <div className="space-y-1 text-[10px] tracking-widest text-[#888888] uppercase">
                  <p>{store.address}</p>
                  <p className="text-[#B89B5E]">{store.status}</p>
                </div>
              </div>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-[#B89B5E] group-hover:border-[#B89B5E] transition-all">
                <ArrowUpRight size={18} className="group-hover:text-black" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}