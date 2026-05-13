import React, { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const faqs = [
    { q: 'Lorem ipsum dolor sit amet?', a: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { q: 'Consectetur adipiscing elit?', a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { q: 'Sed do eiusmod tempor?', a: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { q: 'Labore et dolore magna?', a: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { q: 'Amet consectetur adipiscing?', a: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-spacing bg-primary-cream">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <span className="label-eyebrow">FAQ</span>
            <h2 className="text-[32px] md:text-[42px] leading-tight mb-8 whitespace-nowrap">
              Lorem ipsum <span className="italic font-serif text-primary-pink">dolor</span> sit
            </h2>
            
            <div className="p-10 bg-comp-crema rounded-[2rem] border border-comp-sabbia">
              <h3 className="font-semibold text-[20px] text-primary-night mb-4">Hai altre domande?</h3>
              <p className="text-comp-cacao mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
              <a href="/prenota-una-call" className="btn-secondary w-full text-center block">
                PRENOTA UNA CALL
              </a>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-comp-sabbia">
                <button 
                  className="w-full py-6 flex justify-between items-center text-left transition-colors duration-300 group"
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  <span className={`text-[17px] font-semibold tracking-wide ${activeIndex === i ? 'text-primary-pink' : 'text-primary-night group-hover:text-primary-pink'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown size={20} className={`text-comp-salvia transition-transform duration-300 ${activeIndex === i ? 'rotate-180 text-primary-pink' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-comp-cacao text-[17px] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
