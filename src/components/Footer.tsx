export default function Footer() {
  return (
    <footer className="bg-surface w-full py-12 border-t border-outline-variant/15">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-6 font-body text-sm tracking-wide">
        <div className="text-lg font-black text-on-surface font-headline">
          IBRAHIM SOLIMAN
        </div>
        <div className="flex gap-8">
          <a className="text-on-surface/50 hover:text-primary-container transition-all opacity-80 hover:opacity-100" href="#">GitHub</a>
          <a className="text-on-surface/50 hover:text-primary-container transition-all opacity-80 hover:opacity-100" href="#">LinkedIn</a>
          <a className="text-on-surface/50 hover:text-primary-container transition-all opacity-80 hover:opacity-100" href="#">Email</a>
        </div>
        <div className="text-on-surface/50 text-xs md:text-right">
          © {new Date().getFullYear()} Ibrahim Soliman. Built with Kinetic Architect.
        </div>
      </div>
    </footer>
  );
}
