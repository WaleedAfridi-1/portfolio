"use client";
import { motion } from "framer-motion";
import { ArrowDown, Layers, Terminal, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden">
      
      {/* Luxury Cinematic Ambient Illumination Setup */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-accent-cyan/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-(--glow-opacity) animate-mesh" />
      <div className="absolute bottom-[0%] right-[-5%] w-[50vw] h-[50vw] bg-accent-purple/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen opacity-(--glow-opacity)" />

      {/* Main Structural Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* Left Editorial Copy Base */}
        <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
          
          {/* Status Capsule Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 premium-glass px-4 py-2 rounded-full text-[10px] font-bold text-accent-cyan tracking-[0.2em] uppercase font-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            Open to New Opportunities
          </motion.div>

          {/* Elegant Monolithic Typography */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-xs font-bold tracking-[0.4em] text-text-muted uppercase font-mono"
            >
              MERN Stack Developer | Data Science Enthusiast
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[0.95] text-luxury-gradient"
            >
              Waleed Afridi<span className="text-accent-cyan">.</span>
            </motion.h1>
          </div>

          {/* Highly Structured Professional Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-text-muted text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed"
          >
            I build modern, responsive web applications with the MERN stack and explore Data Science using Python.
          </motion.p>

          {/* Premium Call to Action Array */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4"
          >
            <a
              href="#projects"
              className="group bg-text-main text-bg-primary font-bold px-9 py-4 rounded-full transition-all duration-400 text-xs tracking-widest uppercase shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:scale-[1.03] active:scale-[0.98]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="premium-glass text-text-main hover:bg-text-main/5 font-bold px-9 py-4 rounded-full transition-all duration-400 text-xs tracking-widest uppercase"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, rotateY: 30, scale: 0.95 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-80 h-80 sm:w-105 sm:h-105 rounded-[40px] premium-glass flex items-center justify-center p-8 shadow-[0_30px_100px_rgba(0,0,0,0.4)] group preserve-3d"
          >
            {/* Absolute Ambient Backlight for the Card */}
            <div className="absolute inset-0 bg-linear-to-br from-accent-cyan/10 via-transparent to-accent-purple/10 rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Interactive Inner Complex Geometry Framework */}
            <div className="w-full h-full relative border border-premium rounded-[28px] p-6 overflow-hidden flex flex-col justify-between bg-bg-secondary/20">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center">
                  <Terminal className="w-4 h-4 text-accent-cyan" />
                </div>
                <div className="text-[10px] font-mono text-text-muted tracking-widest uppercase">Available for Work</div>
              </div>

              {/* Central Geometric Visualizer */}
              <div className="my-auto py-10 flex flex-col items-center justify-center relative">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                  className="absolute w-44 h-44 border border-dashed border-text-muted/10 rounded-full flex items-center justify-center"
                />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                  className="w-32 h-32 border border-premium rounded-full flex items-center justify-center p-4 relative bg-bg-primary/30"
                >
                  <Layers className="w-8 h-8 text-accent-purple group-hover:scale-110 transition-transform duration-500" />
                </motion.div>
              </div>

              <div className="flex justify-between items-center text-xs font-mono text-text-muted">
                <span>Karachi, Pakistan</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-accent-cyan" />React • Next.js</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Section Transition Anchor */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="p-3 border border-premium rounded-full bg-bg-secondary/80 cursor-pointer hover:border-text-main/30 transition-colors shadow-2xl"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ArrowDown className="w-3.5 h-3.5 text-text-muted" />
        </motion.div>
      </div>
    </section>
  );
}