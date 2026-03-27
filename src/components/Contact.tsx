import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">
              Let's build the <br/>next <span className="text-primary-container">infrastructure</span>.
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 font-body">Ready to collaborate on complex systems or fluid interfaces. Reach out through any of these channels.</p>
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-surface transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-body text-on-surface-variant">Email</p>
                  <p className="text-lg font-bold">ibrahimsoliman236@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-surface transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-body text-on-surface-variant">Phone</p>
                  <p className="text-lg font-bold">+20 115 170 3160</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-container group-hover:bg-primary-container group-hover:text-surface transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-body text-on-surface-variant">Location</p>
                  <p className="text-lg font-bold">Qaliuobia, Egypt</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-10 rounded-2xl glass-panel">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-outline">Name</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded p-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none" placeholder="John Doe" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-outline">Email</label>
                  <input className="w-full bg-surface-container-lowest border-none rounded p-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none" placeholder="john@example.com" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-outline">Message</label>
                <textarea className="w-full bg-surface-container-lowest border-none rounded p-3 focus:ring-2 focus:ring-primary-container/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none" placeholder="Brief about your project..." rows={4}></textarea>
              </div>
              <button className="w-full bg-primary-container text-surface font-black py-4 rounded hover:bg-cyan-400 transition-all active:scale-[0.98]">
                INITIALIZE PROTOCOL
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
