"use client";
import { motion } from "framer-motion";
import { Cpu, Database, Layout, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Layout,
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
    level: 85,
  },
  {
    title: "React & Next.js",
    icon: Cpu,
    skills: ["React", "Next.js"],
    level: 70,
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: ["Node.js", "Express.js", "MongoDB"],
    level: 70,
  },
  {
    title: "Data Science",
    icon: BarChart3,
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn"],
    level: 75,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 border-y border-premium bg-bg-secondary/20 relative">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        <div className="text-center space-y-3">
          <span className="text-[10px] font-bold uppercase text-accent-purple tracking-[0.3em] font-mono block">
            03 / SKILLS
          </span>
          <h2 className="text-4xl font-black tracking-tight text-luxury-gradient">
            Technical Skills
          </h2>
          <p className="text-text-muted max-w-md mx-auto text-sm font-normal">
            Technologies and tools I use to build modern web applications and analyze data.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="premium-glass p-7 rounded-3xl relative group hover:border-accent-cyan/20 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-bg-secondary border border-premium text-accent-cyan flex items-center justify-center group-hover:text-accent-purple group-hover:border-accent-purple/20 transition-all duration-300">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="text-md font-bold tracking-tight text-text-main">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {cat.skills.map(s => (
                    <span key={s} className="text-xs bg-bg-secondary/60 border border-premium px-3 py-1 rounded-lg text-text-muted font-normal">
                      {s}
                    </span>
                  ))}
                </div>

                {/* Minimalist Metrics Sliders */}
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    <span>Skill Level</span>
                    <span>{cat.level}%</span>
                  </div>
                  <div className="w-full h-0.5 bg-border-premium rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${cat.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full bg-linear-to-r from-accent-cyan to-accent-purple"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}