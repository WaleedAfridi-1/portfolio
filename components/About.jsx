"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* Left Editorial Frame */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4 lg:sticky lg:top-32"
        >
          <span className="text-[10px] uppercase font-bold text-accent-purple tracking-[0.3em] block font-mono">
            01 / ABOUT ME
          </span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.05] text-luxury-gradient">
            Building Modern Web Applications with Clean Code.
          </h2>
          <div className="w-12 h-px bg-accent-cyan/40 pt-2" />
        </motion.div>

        {/* Right Ultra-Clean Narrative Layout */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 text-text-muted font-normal leading-relaxed space-y-8 text-base sm:text-lg"
        >
          <p className="first-letter:text-5xl first-letter:font-black first-letter:text-accent-cyan first-letter:mr-3 first-letter:float-left first-letter:leading-none">
            I'm a Software Developer and Computer Science student who enjoys building modern, responsive, and user-friendly web applications. I work across both frontend and backend technologies, creating scalable solutions with a strong focus on clean code, performance, and great user experience.
          </p>
          <p>
            Alongside web development, I'm expanding my skills in Data Science using Python, NumPy, Pandas, Matplotlib, and Scikit-Learn. I enjoy analyzing data, creating meaningful visualizations, and continuously learning new technologies to build better software.
          </p>

          {/* Premium Tech Micro-Grid */}
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-premium">
            <div>
              <h4 className="text-xs font-bold font-mono text-text-main tracking-wider uppercase mb-1">Development</h4>
              <p className="text-xs text-text-muted">Next.js, React, Express.js, MongoDB, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="text-xs font-bold font-mono text-text-main tracking-wider uppercase mb-1">Data Science</h4>
              <p className="text-xs text-text-muted">Python, NumPy, Pandas, Matplotlib, Scikit-Learn</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}