import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: 'Pinterest',
      iconText: 'P',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
      subServices: [
        { name: 'Management', path: '/servizio/pinterest-management' },
        { name: 'VIP Day', path: '/servizio/pinterest-vip-day' },
        { name: 'Express', path: '/servizio/pinterest-express' },
      ]
    },
    {
      title: 'Content Flow',
      iconText: 'CF',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
      subServices: [
        { name: 'Start', path: '/servizio/content-flow-start' },
        { name: 'Boost', path: '/servizio/content-flow-boost' },
        { name: 'Full Shot', path: '/servizio/content-flow-full-shot' },
      ]
    }
  ];

  return (
    <section className="section-spacing bg-white relative" id="servizi">
      <div className="container-custom relative z-10">
        <div className="mb-20">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-eyebrow mb-4 block"
          >
            Lorem Ipsum
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[56px] leading-[1.1] font-serif italic text-primary-night max-w-2xl"
          >
            Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
          </motion.h2>
        </div>

        <div className="flex flex-col gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="bg-white border-2 border-primary-pink/30 rounded-[2.5rem] p-8 md:p-14 overflow-hidden relative"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
                {/* Left Side: Info */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                  <div className="flex items-center gap-6 mb-8">
                    <h3 className="font-serif italic text-[36px] md:text-[48px] text-primary-night">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="text-[17px] md:text-[19px] leading-relaxed text-comp-cacao/80 mb-0">
                    {cat.desc}
                  </p>
                </div>

                {/* Right Side: Sub-services */}
                <div className="lg:w-1/2 flex flex-col justify-center gap-3">
                  {cat.subServices.map((sub, idx) => (
                    <Link
                      key={idx}
                      to={sub.path}
                      className="group flex items-center justify-between p-4 md:p-5 bg-comp-beige/20 border border-comp-sabbia/30 rounded-2xl hover:border-comp-sabbia transition-all duration-300"
                    >
                      <div className="flex flex-col">
                        <span className="text-[18px] md:text-[22px] font-serif italic text-primary-night">
                          Lorem ipsum {sub.name}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full border border-primary-night/20 flex items-center justify-center group-hover:bg-primary-night group-hover:text-white group-hover:border-primary-night transition-all duration-300">
                        <ArrowRight size={18} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
