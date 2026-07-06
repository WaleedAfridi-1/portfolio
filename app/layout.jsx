import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Creative Developer & Designer | Portfolio",
  description: "Premium personal portfolio showcasing high-end digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-bgPrimary text-gray-100 antialiased overflow-x-hidden relative font-sans">
        {/* Ambient Premium Background Glowing Orbs */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-accentCyan/10 blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-accentPurple/10 blur-[140px] animate-pulse-slow" />
          {/* Tech Grid Mesh Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[40px_40px]" />
        </div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="grow">{children}</main>
        </div>
      </body>
    </html>
  );
}