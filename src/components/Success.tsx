import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Success() {
  return (
    <div className="section-spacing bg-comp-crema">
      <div className="container-custom">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="label-eyebrow">Lorem Ipsum</span>
          <h2 className="text-[42px] leading-tight mb-8">
            Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-4 p-8 bg-white rounded-2xl border border-comp-sabbia group hover:border-primary-pink transition-colors">
              <div className="w-10 h-10 bg-comp-crema rounded-full flex items-center justify-center group-hover:bg-primary-pink/10 transition-colors">
                <Sparkles size={18} className="text-primary-pink" />
              </div>
              <p className="font-semibold text-[17px] text-primary-night">Lorem ipsum dolor sit amet</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
