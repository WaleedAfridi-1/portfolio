"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      {/* Outer structural bounds */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Brand Core Identity */}
        <a href="#" className="text-lg font-bold tracking-[0.18em] text-text-main font-mono relative group">
          WALEED<span className="text-accent-cyan">.</span>
          <span className="absolute bottom-0 left-0 w-0 h-px bg-text-main transition-all duration-300 group-hover:w-full" />
        </a>

        {/* Floating Menu Pod (Desktop Only) */}
        <div className={`hidden md:flex items-center gap-1.5 px-2 py-1.5 rounded-full transition-all duration-500 ${
          scrolled ? "premium-glass shadow-[0_12px_40px_rgba(0,0,0,0.15)] pl-6" : "bg-transparent"
        }`}>
          <div className="flex items-center gap-8 mr-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-text-muted hover:text-text-main transition-colors duration-300 uppercase tracking-widest relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.75 bg-accent-purple rounded-full opacity-0 transition-all duration-300 group-hover:w-1 group-hover:opacity-100" />
              </a>
            ))}
          </div>

          {/* Controls Capsule */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="flex items-center gap-2 text-xs font-bold bg-text-main text-bg-primary hover:scale-[1.03] active:scale-[0.98] px-6 py-3 rounded-full transition-all duration-300 shadow-xl tracking-wider uppercase font-mono"
            >
              Contact <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Mobile Interactive Interface Trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="w-11 h-11 flex items-center justify-center rounded-full premium-glass text-text-muted hover:text-text-main transition-all"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Elite Micro-panel layout) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            className="absolute top-full left-4 right-4 mt-2 p-4 premium-glass rounded-3xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-4 rounded-2xl bg-bg-secondary/40">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-semibold tracking-widest text-text-muted hover:text-text-main py-2.5 transition-colors uppercase border-b border-premium last:border-0"
                >
                  {link.name}
                </motion.a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-xs font-bold bg-text-main text-bg-primary py-4 rounded-xl mt-4 tracking-widest uppercase font-mono"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}