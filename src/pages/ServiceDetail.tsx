import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image as ImageIcon, Check, ArrowUpRight } from 'lucide-react';
import Problem from '../components/Problem';
import Guide from '../components/Guide';
import Plan from '../components/Plan';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import Success from '../components/Success';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';

export default function ServiceDetail() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const serviceName = slug?.replace(/-/g, ' ').toUpperCase() || 'SERVIZIO';

  return (
    <div className="pt-20 bg-primary-cream">
      {/* Service Detail Hero */}
      <section className="pt-20 pb-[120px] relative overflow-hidden bg-primary-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-eyebrow">Lorem Ipsum</span>
              <h1 className="text-[52px] md:text-[65px] leading-tight mb-8">
                Lorem ipsum <span className="italic font-serif text-primary-pink">dolor</span> <br />
                sit amet consectetur
              </h1>
              <div className="space-y-6 text-[18px] text-comp-cacao mb-10">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
              <div className="flex">
                <Link to="/prenota-una-call" className="btn-primary w-fit">
                  PRENOTA UNA CALL <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <div className="relative">
              <img 
                src="/assets/heroservizio.png" 
                alt="Service Detail" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Decorative script */}
              <div className="absolute -top-10 -right-10 script-text text-[120px] opacity-10">Lorem</div>
            </div>
          </div>
        </div>
      </section>
      
      <Problem />
      <Guide />
      <Plan />

      {/* Media Text Section - LA SOLUZIONE */}
      <section className="section-spacing bg-white relative overflow-hidden">
        {/* Decorative background elements for "respiro" */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-comp-cipria/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-pink/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
               <div className="relative z-10 overflow-hidden border border-comp-sabbia/20">
                 <img 
                   src="/assets/serviziosezione.png" 
                   alt="Service Solution" 
                   className="w-full h-auto"
                   referrerPolicy="no-referrer"
                 />
               </div>
               {/* Decorative script overlapping slightly */}
               <div className="absolute -bottom-10 -left-10 script-text text-[140px] text-primary-pink opacity-10 -rotate-6 z-0">Lorem</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 md:order-2"
            >
              <span className="label-eyebrow">Lorem Ipsum</span>
              <h2 className="text-[42px] md:text-[52px] leading-tight mb-8">
                Lorem <span className="italic font-serif">Ipsum dolor</span> <br />
                sit amet consec
              </h2>
              <div className="space-y-6 mb-12">
                <p className="text-comp-cacao/80 text-[18px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="space-y-5 pt-4">
                  {[1, 2, 3].map(i => (
                     <div key={i} className="flex gap-4 items-start group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-primary-cream flex items-center justify-center border border-comp-sabbia group-hover:border-primary-pink transition-colors">
                           <Check size={14} className="text-primary-pink" />
                        </div>
                        <div className="flex-1">
                          <span className="text-[15px] text-primary-night font-bold uppercase tracking-wider block mb-1">Lorem {i}</span>
                          <p className="text-[14px] text-comp-cacao/60">Lorem ipsum dolor sit amet consectetur adipiscing.</p>
                        </div>
                     </div>
                  ))}
                </div>
              </div>
              <div className="pt-6">
                <Link to="/prenota-una-call" className="btn-primary w-fit">
                  PRENOTA UNA CALL <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SocialProof />
      <Success />
      <FAQ />
      <FinalCTA />
      <Freebie />
    </div>
  );
}
