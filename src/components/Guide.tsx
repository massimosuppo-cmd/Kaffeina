import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Guide() {
  return (
    <section className="section-spacing bg-primary-night text-primary-cream relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-comp-salvia/5 rounded-full blur-3xl -z-0"></div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image/Visual */}
          <div className="relative">
            <div className="max-w-full relative">
              <img 
                src="/assets/guida.png" 
                alt="Chi ti accompagna" 
                className="w-full h-auto block"
              />
            </div>
            
          </div>

          {/* Text Content */}
          <div>
            <span className="label-eyebrow text-primary-pink">Lorem Ipsum</span>
            <h2 className="text-[42px] text-primary-cream leading-tight mb-8">
              Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
            </h2>
            
            <div className="space-y-6 mb-10 text-primary-cream/80 text-[18px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur', 'Adipiscing Elit'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary-pink shrink-0" />
                  <span className="text-[18px] font-serif italic text-primary-cream">{item}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
