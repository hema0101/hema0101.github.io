export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 font-body text-sm tracking-wide">
        <div className="text-lg font-black text-on-surface font-headline">
          IBRAHIM SOLIMAN
        </div>
        
        <div className="flex gap-8">
          <a href="#" className="text-on-surface/50 hover:text-primary-cyan transition-all">GitHub</a>
          <a href="#" className="text-on-surface/50 hover:text-primary-cyan transition-all">LinkedIn</a>
          <a href="#" className="text-on-surface/50 hover:text-primary-cyan transition-all">Email</a>
        </div>
        
        <div className="text-on-surface/50 text-xs md:text-right">
          © 2024 Ibrahim Soliman. Built with Kinetic Architect.
        </div>
      </div>
    </footer>
  );
}
