import React from 'react';
import { Camera, Heart, Coffee, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FinalCTA from '../components/FinalCTA';
import Freebie from '../components/Freebie';
import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-20 bg-primary-cream">
      {/* Hero Section */}
      <section className="pt-20 pb-[120px] relative overflow-hidden">
        <div className="container-custom relative z-10">
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
              <div className="space-y-6 text-[18px] text-comp-cacao">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="mt-10 flex">
                <Link to="/prenota-una-call" className="btn-primary w-fit">
                  PRENOTA UNA CALL <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <img 
                src="/assets/herochisono.png" 
                alt="About Hero" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Decorative script */}
              <div className="absolute -bottom-8 -right-8 script-text text-[100px] opacity-20">Lorem</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing bg-comp-crema">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="label-eyebrow">Lorem Ipsum</span>
            <h2 className="text-[42px] mb-20 text-center">Lorem ipsum <span className="text-primary-pink">dolor</span> sit</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Lorem Ipsum' },
              { icon: Coffee, title: 'Dolor Sit' },
              { icon: Globe, title: 'Amet Consectetur' },
              { icon: Camera, title: 'Adipiscing Elit' }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-comp-sabbia text-center flex flex-col items-center">
                <div className="w-14 h-14 bg-comp-cipria rounded-full flex items-center justify-center mb-6 text-primary-pink">
                  <v.icon size={24} />
                </div>
                <h3 className="font-semibold text-primary-night mb-4">{v.title}</h3>
                <p className="text-sm text-comp-cacao">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Sections */}
      <section className="section-spacing bg-primary-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="relative">
              <div className="bg-white">
                <img 
                  src="/assets/storia1.png" 
                  alt="Story 1" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div>
            <h2 className="text-[42px] leading-tight mb-8">
              Lorem ipsum <span className="text-primary-pink">dolor</span> <br />
              <span className="italic font-serif">sit amet</span>
            </h2>
              <p className="text-[18px] text-comp-cacao mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <div className="w-16 h-[1.5px] bg-primary-pink"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-comp-crema/40">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div className="relative md:order-2">
              <div className="bg-white">
                <img 
                  src="/assets/storia2.png" 
                  alt="Story 2" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:order-1">
            <h2 className="text-[42px] leading-tight mb-8">
              Lorem ipsum <span className="text-primary-pink">dolor</span> <br />
              <span className="italic font-serif">sit amet</span>
            </h2>
              <p className="text-[18px] text-comp-cacao mb-8">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="w-16 h-[1.5px] bg-primary-pink"></div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Freebie />
    </div>
  );
}
