"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import Image from "next/image";

const works = [
  { 
    title: "BagVerse Storefront", 
    desc: "An elite digital storefront featuring premium localized animations and high-performance cart engines.", 
    tags: ["Express", "MongoDB", "Tailwind"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/BagVerse",
    image: "/bagLogo.png" 
  },  
  { 
    title: "FoodNode", 
    desc: "A food video platform built with Next.js and Express.js. Users can watch and save food videos, while verified Food Partners can register using a free email OTP system to create, upload, and manage their own video content.", 
    tags: ["Nextjs", "Express", "MongDB","Tailwind"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/FoodNode",
    image: "/foodNode.png" 
  },  
  { 
    title: "Smart Call Book App", 
    desc: "About Smart Callbook is a modern, responsive contact management web application built with PHP, MySQL, HTML, CSS, and JavaScript. It provides secure authentication, animated card-based call notes, theme options, and a clean UI for creating, storing, and managing detailed call records efficiently.", 
    tags: ["JavaScript", "PHP","SQL", "CSS"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/Smart-Call-Book-App",
    image: "/SmartCallBook.png" 
  },  
  { 
    title: "Customer Segmentation App", 
    desc:" Customer Segmentation AI - ML-powered web app that classifies customers into strategic clusters using K-means algorithm. Input age, income & spending score to get instant segmentation with actionable insights. Built with Django, Python, Bootstrap & Chart.js. Perfect for marketing analytics! ",
    tags: ["Machine Learning", "Django"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/Customer-Segmentation-Ai-app",
    image: "/CutomerSegmentation.png"
  },
  { 
    title: "Heart Disease Prediction App", 
    desc:"An interactive Streamlit web application powered by XGBoost that predicts the likelihood of heart disease based on patient medical attributes.",
    tags: ["Machine Learning", "StreamLit"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/heart-disease-prediction-app",
    image: "/HeartDisease.png"
  },
  { 
    title: "Threadloom Engine", 
    desc: "A full-stack community platform built with Next.js, Prisma, and PostgreSQL. Features a hierarchical discussion system where users create niche Topics, engage via threaded Posts, and interact through nested Comments. Designed for high performance and seamless content discovery.", 
    tags: ["Next.js", "Prisma", "Tailwind"], 
    link: "#", 
    git: "https://github.com/WaleedAfridi-1/threadloom-community-engine",
    image: "/threadlome.png"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 max-w-7xl mx-auto space-y-20">
      <div className="space-y-3">
        <span className="text-[10px] font-bold uppercase text-accent-cyan tracking-[0.3em] font-mono block">
          02 / PROJECTS
        </span>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-luxury-gradient">
          My Recent Work
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {works.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative rounded-3xl premium-glass flex flex-col justify-between p-6 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] transition-all duration-500 overflow-hidden h-full"
          >
            <div>
              {/* Visual Canvas Panel */}
              <div className="w-full h-52 bg-bg-secondary/40 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-premium group-hover:border-text-main/10 transition-colors duration-500">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={`${item.title} preview`}
                    fill
                    sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
                    className="object-cover object-center lg:opacity-75 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-700 ease-out"
                    priority={idx === 0}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-linear-to-br from-accent-cyan/5 to-accent-purple/5 opacity-60">
                    <Code2 className="w-5 h-5 text-text-muted/30 group-hover:text-accent-cyan/60 transition-colors duration-500" />
                    <span className="text-[9px] text-text-muted font-mono tracking-[0.25em]">
                      {item.title.toUpperCase().replace(/\s+/g, "_")}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-bg-primary/40 to-transparent pointer-events-none" />
              </div>

              {/* Typography Asset details */}
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-lg font-bold tracking-tight text-text-main group-hover:text-accent-cyan transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="flex gap-3 items-center pt-1 text-text-muted">
                    <a 
                      href={item.git} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-text-main transition-colors duration-200" 
                      aria-label={`View source code for ${item.title}`}
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    </a>
                  </div>
                </div>
                <p className="text-text-muted font-normal text-sm leading-relaxed line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Modern Subtle Tech Badge Layout */}
            <div className="flex flex-wrap gap-1.5 mt-8 pt-4 border-t border-premium">
              {item.tags.map(t => (
                <span key={t} className="text-[9px] font-bold font-mono tracking-wider bg-bg-secondary border border-premium text-text-muted px-2.5 py-1 rounded-md">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* See All Projects Trigger Link */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center pt-4"
      >
        <a
          href="https://github.com/WaleedAfridi-1"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-bg-secondary border border-premium hover:border-accent-cyan/40 text-xs font-bold font-mono tracking-widest text-text-muted hover:text-text-main uppercase shadow-xs transition-all duration-300 overflow-hidden"
        >
          <span>See All Projects</span>
          <ArrowUpRight className="w-4 h-4 text-text-muted/60 group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          
          {/* Subtle Accent Glow Effect on Hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-accent-cyan/5 to-transparent pointer-events-none transition-opacity duration-500" />
        </a>
      </motion.div>
    </section>
  );
}