import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center px-6">
      <div className="premium-glass max-w-md w-full p-8 rounded-[30px] text-center border border-premium space-y-6">
        <div className="mx-auto w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <h2 className="text-3xl font-black tracking-tight text-text-main">
            Thank You!
          </h2>
          <p className="text-text-muted text-sm">
            Your message has successfully routed to the PostgreSQL server. I appreciate your connection.
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 bg-text-main text-bg-primary font-bold text-xs px-8 py-4 rounded-full transition-all duration-300 tracking-wider uppercase font-mono hover:scale-[1.02] cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Base
        </Link>
      </div>
    </section>
  );
}