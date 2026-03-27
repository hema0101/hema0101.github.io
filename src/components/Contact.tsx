import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="font-headline text-5xl md:text-6xl font-extrabold tracking-tighter mb-8">
              Let's build the <br />
              next <span className="text-primary-cyan">infrastructure</span>.
            </h2>
            <p className="text-on-surface-variant text-lg mb-12 font-body">
              Ready to collaborate on complex systems or fluid interfaces. Reach out through any of these channels.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "ibrahimsoliman236@gmail.com" },
                { icon: Phone, label: "Phone", value: "+20 115 170 3160" },
                { icon: MapPin, label: "Location", value: "Qaliuobia, Egypt" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary-cyan group-hover:bg-primary-cyan group-hover:text-surface transition-all">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-body text-on-surface-variant">{item.label}</p>
                    <p className="text-lg font-bold">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-10 rounded-2xl glass-panel"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-cyan/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-cyan/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-on-surface-variant">Message</label>
                <textarea 
                  placeholder="Brief about your project..." 
                  rows={4}
                  className="w-full bg-surface-container-high border-none rounded-lg p-3 focus:ring-2 focus:ring-primary-cyan/50 text-on-surface placeholder:text-on-surface-variant/30 outline-none resize-none"
                />
              </div>
              <button className="w-full bg-primary-cyan text-surface font-black py-4 rounded-lg hover:bg-primary-cyan/90 transition-all active:scale-[0.98] tracking-widest">
                INITIALIZE PROTOCOL
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
