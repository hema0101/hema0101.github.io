import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,229,255,0.05)] h-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          IBRAHIM SOLIMAN
        </div>
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          <a className="text-primary-container border-b-2 border-primary-container pb-1" href="#home">Home</a>
          <a className="text-on-surface/70 hover:text-primary-container transition-colors" href="#skills">Skills</a>
          <a className="text-on-surface/70 hover:text-primary-container transition-colors" href="#experience">Experience</a>
          <a className="text-on-surface/70 hover:text-primary-container transition-colors" href="#projects">Projects</a>
          <a className="text-on-surface/70 hover:text-primary-container transition-colors" href="#contact">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg transition-all active:scale-95 duration-200 text-primary-container hover:bg-surface-container-highest/40">
            <Terminal size={24} />
          </button>
          <a href="/ibrahim_soliman_cv.pdf" download>
            <button className="bg-primary-container text-surface font-bold px-6 py-2 rounded-md hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all active:scale-95">
              Resume
            </button>
          </a>
        </div>
      </nav>
    </header>
  );
}
