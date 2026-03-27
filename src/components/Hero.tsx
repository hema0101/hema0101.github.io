import { motion } from "motion/react";
import { ArrowRight, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#3b494c 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}
      />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-cyan/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-cyan/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-headline text-primary-cyan tracking-[0.2em] text-sm uppercase mb-6"
        >
          Available for Opportunities
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-headline text-7xl md:text-9xl font-extrabold tracking-tighter text-on-surface mb-4 leading-none"
        >
          IBRAHIM <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan to-blue-400">
            SOLIMAN
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-body text-xl md:text-2xl text-on-surface-variant max-w-2xl mx-auto mb-12 font-light"
        >
          Engineering scalable cloud infrastructure and fluid digital experiences through <span className="text-primary-cyan font-medium">Kinetic Architecture</span>.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="bg-primary-cyan text-surface font-bold px-10 py-4 rounded-md text-lg hover:shadow-[0_0_30px_rgba(0,229,255,0.3)] transition-all active:scale-95 flex items-center gap-2 group">
            View Projects <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="ghost-border text-primary-cyan font-bold px-10 py-4 rounded-md text-lg hover:bg-surface-container-high transition-all active:scale-95 flex items-center gap-2">
            <Terminal size={20} /> GitHub
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-on-surface/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary-cyan rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
