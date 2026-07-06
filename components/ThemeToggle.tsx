"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(savedTheme);
    if (savedTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  };

  if (!mounted) return <div className="w-11 h-11 rounded-full premium-glass opacity-0" />;

  return (
    <motion.button
      whileTap={{ scale: 0.92 }}
      whileHover={{ scale: 1.04 }}
      onClick={toggleTheme}
      className="p-3 rounded-full premium-glass text-text-muted hover:text-text-main transition-all duration-300 relative overflow-hidden cursor-pointer w-11 h-11 flex items-center justify-center group"
      aria-label="Toggle Interface Theme"
    >
      {/* Subtle Button Background Hover Glow */}
      <div className="absolute inset-0 bg-linear-to-tr from-accent-cyan/10 to-accent-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="dark-icon"
            initial={{ y: 15, opacity: 0, rotate: 40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: -40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Moon className="w-[18px] h-[18px] text-accent-purple" />
          </motion.div>
        ) : (
          <motion.div
            key="light-icon"
            initial={{ y: 15, opacity: 0, rotate: -40 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -15, opacity: 0, rotate: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Sun className="w-[18px] h-[18px] text-accent-cyan" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}