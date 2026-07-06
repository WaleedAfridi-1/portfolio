"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";
import {saveMessage} from "../app/actions/contact";

export default function Contact() {
  const [isPending, setIsPending] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; error?: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Success controller state

  const handleClientAction = async (formData: FormData) => {
    setIsPending(true);
    setStatus(null);

    const result = await saveMessage(formData);

    setIsPending(false);
    if (result?.error) {
      setStatus({ error: result.error });
    } else {
      setIsSubmitted(true); // Is se niche form hide ho jaye ga aur thank you screen ajaye gi
    }
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-3">
        <span className="text-[10px] font-bold uppercase text-accent-cyan tracking-[0.3em] font-mono block">
          04 / CONTACT ME
        </span>
        <h2 className="text-4xl font-black tracking-tight text-luxury-gradient">
          Let's Connect
        </h2>
        <p className="text-text-muted font-normal max-w-sm mx-auto text-sm">
          Whether you have a project, a job opportunity, or just want to say hello, feel free to send me a message. I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Info Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 space-y-4"
        >
          <div className="premium-glass p-5 rounded-[20px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-cyan/5 border border-accent-cyan/10 flex items-center justify-center text-accent-cyan">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[9px] font-mono font-bold text-text-muted/60 uppercase tracking-widest">Secure Comms</h4>
              <p className="text-sm font-semibold text-text-main">waleedafridi170@gmail.com</p>
            </div>
          </div>

          <div className="premium-glass p-5 rounded-[20px] flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-accent-purple/5 border border-accent-purple/10 flex items-center justify-center text-accent-purple">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-[9px] font-mono font-bold text-text-muted/60 uppercase tracking-widest">Base Coordinates</h4>
              <p className="text-sm font-semibold text-text-main">Karachi, Pakistan</p>
            </div>
          </div>
        </motion.div>

        {/* Dynamic Form Engine OR Thank You Wrapper */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 premium-glass p-8 rounded-[30px] min-h-100 flex flex-col justify-center"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              // FORM INTERFACE
              <motion.form
                key="contact-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                action={handleClientAction} 
                className="space-y-6 w-full"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-text-muted/70 tracking-wider uppercase">Name</label>
                    <input name="name" required type="text" className="w-full bg-bg-secondary border border-premium rounded-xl px-4 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-all font-medium" placeholder="e.g. Waleed Afridi" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold font-mono text-text-muted/70 tracking-wider uppercase">Email</label>
                    <input name="email" required type="email" className="w-full bg-bg-secondary border border-premium rounded-xl px-4 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-all font-medium" placeholder="e.g. name@domain.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold font-mono text-text-muted/70 tracking-wider uppercase">Message</label>
                  <textarea name="message" required rows={5} className="w-full bg-bg-secondary border border-premium rounded-xl px-4 py-3.5 text-sm text-text-main focus:outline-none focus:border-accent-cyan/40 focus:ring-1 focus:ring-accent-cyan/20 transition-all font-medium resize-none" placeholder="Detail your infrastructure or dataset requirements..." />
                </div>

                {status?.error && (
                  <p className="text-rose-400 text-xs font-mono">⚠  Error: {status.error}</p>
                )}
                
                <button 
                  type="submit" 
                  disabled={isPending}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-text-main text-bg-primary font-bold text-xs px-8 py-4 rounded-full transition-all duration-300 tracking-wider uppercase font-mono hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                >
                  {isPending ? (
                    <>Routing... <Loader2 className="w-3.5 h-3.5 animate-spin" /></>
                  ) : (
                    <>Send Message <Send className="w-3.5 h-3.5 stroke-[2.5]" /></>
                  )}
                </button>
              </motion.form>
            ) : (
              // PRE-STAGE: THANK YOU INTERFACE
              <motion.div
                key="success-screen"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center space-y-6 py-10"
              >
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-text-main tracking-tight">Message Sent Successfully!</h3>
                  <p className="text-text-muted text-sm max-w-sm mx-auto">
                     Thank you for reaching out! I've received your message and will get back to you as soon as possible. I appreciate your time and look forward to connecting with you.
                  </p>
                </div>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent-cyan border border-accent-cyan/20 hover:bg-accent-cyan/5 px-6 py-3 rounded-full transition-all"
                >
                  Back to Contact Form
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}