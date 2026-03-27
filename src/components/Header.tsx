import { motion } from "motion/react";
import { Terminal } from "lucide-react";

export default function Header() {
  const navItems = [
    { name: "Home", href: "#home", active: true },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl border-b border-white/5 h-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 h-full">
        <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
          IBRAHIM SOLIMAN
        </div>
        
        <div className="hidden md:flex items-center gap-8 font-headline tracking-tight">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`transition-colors relative py-1 ${
                item.active 
                  ? "text-primary-cyan border-b-2 border-primary-cyan" 
                  : "text-on-surface/70 hover:text-primary-cyan"
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="text-primary-cyan hover:bg-surface-container-high/40 p-2 rounded-lg transition-all active:scale-95 duration-200">
            <Terminal size={20} />
          </button>
          <button className="bg-primary-cyan text-surface font-bold px-6 py-2 rounded-md hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all active:scale-95">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}
