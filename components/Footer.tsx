"use client";

export default function Footer() {
  return (
    <footer className="border-t border-premium py-12 px-6 bg-bg-secondary/40 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] font-mono font-semibold tracking-widest text-text-muted/60 uppercase">
        <p>
          &copy; {new Date().getFullYear()} WALEED. All Rights Reserved.
        </p>
        <p className="text-right text-text-muted/40 sm:text-right">
          Designed & Developed by Waleed Afridi.
        </p>
      </div>
    </footer>
  );
}