import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Pin as Pinterest, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-night pt-24 pb-12 text-primary-cream">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <img src="/assets/logo.png" alt="Kaffeina Logo" className="h-14 md:h-16 w-auto object-contain brightness-0 invert" />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex gap-4">
              {[Instagram, Linkedin, Pinterest, Mail].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-primary-cream hover:bg-primary-pink hover:text-white hover:border-primary-pink transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[14px] uppercase tracking-widest text-primary-cream mb-8">Navigazione</h4>
            <ul className="space-y-4">
              {['Home', 'Chi sono', 'Pinterest Specialist', 'Content Flow', 'Blog'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="text-white/70 hover:text-white transition-colors text-[15px]">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[14px] uppercase tracking-widest text-primary-cream mb-8">Risorse</h4>
            <ul className="space-y-4">
              {['Shop', 'Freebie', 'Contatti', 'Privacy Policy', 'Cookie Policy'].map((item, idx) => (
                <li key={idx}>
                  <Link to="#" className="text-white/70 hover:text-white transition-colors text-[15px]">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[14px] uppercase tracking-widest text-primary-cream mb-8">Newsletter</h4>
            <p className="text-white/80 text-[15px] mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="La tua email" 
                className="w-full bg-white/10 border border-white/20 rounded-full py-3.5 px-6 text-[14px] text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-primary-cream text-primary-night w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-pink hover:text-white transition-colors">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-[13px]">
            © {new Date().getFullYear()} Kaffeina Virtual Assistant. Lorem ipsum dolor sit amet.
          </p>
          <p className="text-white/60 text-[13px]">
            P.IVA Lorem Ipsum | Design by Lorem
          </p>
        </div>
      </div>
    </footer>
  );
}
