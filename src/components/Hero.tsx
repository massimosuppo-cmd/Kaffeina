import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="pt-24 pb-20 md:pt-32 md:pb-32 bg-primary-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-16 text-center max-w-4xl mx-auto">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <span className="label-eyebrow">Lorem Ipsum</span>
            <h1 className="text-[48px] md:text-[65px] leading-[1.05] tracking-tight mb-8 relative inline-block mx-auto">
              Lorem ipsum dolor sit <br className="hidden md:block" /> amet 
              <span className="relative inline-block md:inline">
                {" "}consectetur <span className="text-primary-pink">adipiscing</span>
                <span className="absolute -top-12 -right-16 script-text text-[80px] opacity-20 hidden md:block text-primary-night">Strategia</span>
              </span>
            </h1>
            
            <p className="text-[18px] text-comp-cacao mb-10 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <Link to="/prenota-una-call" className="btn-primary">
                PRENOTA UNA CALL <ArrowUpRight size={18} />
              </Link>
              <Link to="/shop" className="text-primary-night font-bold text-[13px] uppercase tracking-widest hover:text-primary-pink transition-all flex items-center gap-1.5 group border-b border-transparent hover:border-primary-pink pb-0.5">
                VISITA LO SHOP <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Video Placeholder Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative w-full aspect-video bg-comp-cipria rounded-[2rem] border border-comp-sabbia flex items-center justify-center overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493723843671-1d655e8d717f?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center mix-blend-multiply opacity-20"></div>
            <button className="w-20 h-20 rounded-full bg-primary-night text-primary-cream flex items-center justify-center relative z-10 hover:bg-primary-pink hover:scale-110 transition-all duration-300 shadow-xl">
              <Play fill="currentColor" size={24} className="ml-1" />
            </button>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center text-primary-night/50">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 bg-primary-night/30 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-primary-night/30 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-primary-night/30 rounded-full"></div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-tighter">00:45 / 03:20</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
