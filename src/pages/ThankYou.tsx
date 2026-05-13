import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Download, ArrowRight, Instagram, Mail, Layout } from 'lucide-react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { motion } from 'motion/react';

export default function ThankYou() {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowConfetti(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-primary-cream">
      {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={300} gravity={0.08} colors={['#C72853', '#102F30', '#F8F5F4', '#D4B89D']} />}
      
      <section className="section-spacing relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-comp-cipria rounded-full -z-10 blur-3xl opacity-30"></div>
        
        <div className="container-custom max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 1.2 }}
            className="w-28 h-28 bg-primary-night text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl relative"
          >
            <CheckCircle2 size={56} />
            <div className="absolute inset-0 rounded-full border-2 border-primary-pink animate-ping opacity-20"></div>
          </motion.div>
          
          <div className="inline-block px-6 py-2 bg-comp-cipria text-primary-pink text-[11px] font-bold uppercase tracking-[0.2em] rounded-full mb-8 border border-comp-sabbia">
            Ordine Completato con Successo
          </div>
          
          <h1 className="text-[42px] md:text-[58px] leading-tight mb-8 font-serif italic text-primary-night">
            Lorem Ipsum <span className="text-primary-pink">Gratitude!</span>
          </h1>
          
          <p className="text-[18px] text-comp-cacao mb-12 max-w-2xl mx-auto leading-relaxed italic font-serif">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          {/* Order Details Preview */}
          <div className="bg-white border border-comp-sabbia rounded-[3rem] p-10 md:p-16 mb-16 text-left shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-comp-crema rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-comp-sabbia pb-8 gap-6 relative z-10">
              <div>
                <div className="text-[10px] font-bold text-comp-salvia uppercase tracking-widest mb-2">Numero Ordine</div>
                <div className="text-[18px] font-bold text-primary-night tracking-tight">#KAF-94821LZ</div>
              </div>
              <div className="md:text-right">
                <div className="text-[10px] font-bold text-comp-salvia uppercase tracking-widest mb-2">Data Acquisto</div>
                <div className="text-[18px] font-bold text-primary-night">{new Date().toLocaleDateString('it-IT')}</div>
              </div>
            </div>

            <div className="space-y-6 relative z-10">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.2em] text-comp-salvia mb-6">I tuoi download</h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-primary-cream rounded-2xl border border-comp-sabbia hover:border-primary-pink transition-all cursor-pointer group/item">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-comp-sabbia group-hover/item:text-primary-pink transition-colors">
                      <Download size={22} />
                    </div>
                    <div className="flex-1">
                      <div className="text-[14px] font-bold uppercase tracking-wider text-primary-night">Lorem Ipsum Resource {i}</div>
                      <div className="text-[12px] text-comp-salvia italic">Pronto per il download</div>
                    </div>
                    <ArrowRight size={18} className="text-comp-beige group-hover/item:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-2xl mx-auto">
            <Link to="/shop" className="btn-primary w-full flex justify-center !bg-primary-night !text-white hover:!bg-primary-pink">
              CONTINUA SHOPPING
            </Link>
            <Link to="/" className="btn-secondary w-full flex justify-center">
              TORNA ALLA HOME
            </Link>
          </div>

          {/* Social Proof / Sharing */}
          <div className="pt-16 border-t border-comp-sabbia">
            <p className="text-[13px] font-serif italic text-comp-cacao mb-8 underline underline-offset-8">Taggami nelle tue storie! @kaffeinavirtualassistant</p>
            <div className="flex justify-center gap-8">
              {[Instagram, Mail, Layout].map((Icon, i) => (
                <a key={i} href="#" className="w-14 h-14 rounded-full border border-comp-sabbia bg-white flex items-center justify-center hover:bg-primary-night hover:text-white transition-all shadow-sm">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
