import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import Problem from '../components/Problem';
import SocialProof from '../components/SocialProof';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Freebie from '../components/Freebie';
import { motion } from 'motion/react';

export default function ContentFlow() {
  const plans = [
    { 
      name: 'START', 
      slug: 'content-flow-start', 
      price: 'Lorem Ipsum', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.',
      cta: 'SCOPRI START',
      features: ['Feature 1', 'Feature 2', 'Feature 3'] 
    },
    { 
      name: 'BOOST', 
      slug: 'content-flow-boost', 
      price: 'Lorem Ipsum', 
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
      cta: 'SCOPRI BOOST',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'] 
    },
    { 
      name: 'FULL SHOT', 
      slug: 'content-flow-full-shot', 
      price: 'Lorem Ipsum', 
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
      cta: 'SCOPRI FULL SHOT',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4', 'Feature 5'] 
    }
  ];

  return (
    <div className="pt-20 bg-primary-cream">
      {/* Content Flow Hero */}
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
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
                src="/assets/herocontentflow.png" 
                alt="Content Flow Strategy" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Decorative script */}
              <div className="absolute -top-10 -right-10 script-text text-[120px] opacity-10">Lorem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - replaced with Problem component as in Home */}
      <Problem />

      {/* Plans Section */}
      <section className="section-spacing bg-primary-cream">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="label-eyebrow">Lorem Ipsum</span>
            <h2 className="text-[42px]">Lorem ipsum <span className="text-primary-pink">dolor</span> sit</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <div 
                key={i} 
                className="group p-10 rounded-[2rem] border bg-white border-comp-sabbia text-primary-night flex flex-col hover:bg-primary-night hover:text-primary-cream transition-all duration-300"
              >
                <span className="text-[12px] font-bold uppercase tracking-widest mb-4 text-primary-pink">
                  {plan.name}
                </span>
                <div className="text-[32px] font-serif italic mb-4">{plan.price}</div>
                <p className="text-[15px] text-comp-cacao/80 mb-8 leading-relaxed group-hover:text-primary-cream/70">
                  {plan.description}
                </p>
                <div className="h-[1px] w-full mb-8 bg-comp-sabbia group-hover:bg-primary-cream/10 transition-colors"></div>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[15px]">
                      <CheckCircle2 size={16} className="text-primary-pink shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={`/servizio/${plan.slug}`}
                  className="w-full py-4 rounded-full font-bold text-center text-[14px] transition-all border border-primary-night hover:shadow-lg group-hover:bg-primary-pink group-hover:text-white group-hover:border-primary-pink"
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SocialProof />
      <FAQ />
      <FinalCTA />
      <Freebie />
    </div>
  );
}
