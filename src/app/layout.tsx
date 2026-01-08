import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rolex — Time, Refined.",
  description: "The 2026 Digital Experience",
  icons: {
    // Reference the file directly from the public folder root
    icon: "/rol.jpg", 
    // If you add an apple-specific icon later:
    apple: "/rol.jpg", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}



{/* <h2 className="text-6xl md:text-[10vw] font-serif italic tracking-tighter mix-blend-difference text-white">Perpetual</h2>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-[1px] w-12 bg-[#B89B5E]" />
              <span className="text-[10px] tracking-[1em] text-[#B89B5E] uppercase font-bold">Precision</span>
              <div className="h-[1px] w-12 bg-[#B89B5E]" />
            </div> */}

      //       <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center">
      //   <div className="absolute inset-0 z-0">
      //     <motion.img initial={{ scale: 1.1, opacity: 0 }} animate={{ scale: 1, opacity: 0.5 }} transition={{ duration: 2.5 }} src="https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=2000" className="w-full h-full object-cover contrast-125" />
      //   </div>
      //   <div className="relative z-10 space-y-12 px-4">
      //     <p className="text-[11px] tracking-[1.2em] text-[#B89B5E] uppercase font-bold mb-8">The Perpetual Spirit</p>
      //     <h1 className="text-7xl md:text-[12vw] font-serif leading-[0.8] tracking-tighter">MASTER <br /> <span className="text-white/20 italic">OF TIME.</span></h1>
      //     <MoveDown size={18} className="text-[#B89B5E] animate-bounce mx-auto" strokeWidth={1} />
      //   </div>
      // </section>