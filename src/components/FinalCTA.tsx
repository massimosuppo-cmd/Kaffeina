import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="section-spacing bg-primary-cream">
      <div className="container-custom">
        <div className="bg-primary-night p-16 md:p-24 rounded-[3rem] text-center flex flex-col items-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pink/10 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-comp-salvia/10 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative z-10 w-full max-w-3xl">
            <h2 className="text-[42px] md:text-[52px] text-primary-cream leading-tight mb-8">
              Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
            </h2>
            <p className="text-[18px] text-primary-cream/80 mb-12 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/prenota-una-call" className="btn-primary">
                PRENOTA UNA CALL <ArrowUpRight size={18} />
              </a>
            </div>
            
            <p className="mt-8 text-[14px] text-primary-cream/60">
              *Lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
