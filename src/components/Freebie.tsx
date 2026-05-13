import React, { useState } from 'react';
import { Mail, User, Image as ImageIcon } from 'lucide-react';

export default function Freebie() {
  const [agreed, setAgreed] = useState(false);

  return (
    <section className="section-spacing bg-comp-crema border-t border-comp-sabbia/30">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
        {/* Left Column: Stock Image */}
        <div className="relative">
          <div className="max-w-[500px] mx-auto">
            <img 
              src="/assets/newsletter.png" 
              alt="Risorsa Gratuita" 
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Right Column: Content and Form */}
        <div>
          <span className="label-eyebrow">Risorsa Gratuita</span>
          <h2 className="text-[42px] leading-tight mb-6">
            Lorem ipsum <span className="italic font-serif text-primary-pink">dolor</span> <br />
            sit amet consectetur
          </h2>
          <p className="text-[18px] text-comp-cacao mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          <div className="bg-white p-10 rounded-[2rem] border border-comp-sabbia shadow-sm">
            <h4 className="font-bold text-[17px] text-primary-night mb-8">Scarica la guida gratuita</h4>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  placeholder="Il tuo nome" 
                  className="w-full bg-primary-cream border border-comp-sabbia rounded-full py-4 px-8 focus:outline-none focus:border-primary-pink transition-colors text-[15px]" 
                />
              </div>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="La tua email principale" 
                  className="w-full bg-primary-cream border border-comp-sabbia rounded-full py-4 px-8 focus:outline-none focus:border-primary-pink transition-colors text-[15px]" 
                />
              </div>

              <div className="flex items-start gap-3 mt-4 mb-6 px-4">
                <div className="relative flex items-center">
                  <input 
                    type="checkbox" 
                    id="privacy-consent"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 rounded border-comp-sabbia text-primary-pink focus:ring-primary-pink accent-primary-pink cursor-pointer appearance-none checked:bg-primary-pink border-2 checked:border-primary-pink transition-all" 
                  />
                  {agreed && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <label htmlFor="privacy-consent" className="text-[13px] text-comp-cacao cursor-pointer leading-tight select-none pt-0.5">
                  Acconsento al trattamento dei dati personali come descritto nella <a href="/privacy" className="underline hover:text-primary-pink transition-colors">Privacy Policy</a>
                </label>
              </div>

              <button 
                type="submit"
                disabled={!agreed}
                className={`btn-primary w-full py-4.5 ${!agreed ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                SCARICA ORA
              </button>
            </form>
            <p className="mt-6 text-[12px] text-comp-salvia text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Privacy garantita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
