import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Send, Image as ImageIcon, MessageSquare, Check, ArrowRight, Clock, ChevronDown } from 'lucide-react';
import Freebie from '../components/Freebie';
import { motion } from 'motion/react';

export default function BookACall() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="pt-20 bg-primary-cream">
      {/* Hero Media-Text Section */}
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
                <div className="space-y-4 pt-4">
                  {[
                    "Lorem ipsum dolor sit amet",
                    "Consectetur adipiscing elit",
                    "Sed do eiusmod tempor"
                  ].map((text, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-comp-sabbia">
                        <Check size={16} className="text-primary-pink" />
                      </div>
                      <span className="text-[14px] text-primary-night font-bold uppercase tracking-widest">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="relative">
              <img 
                src="/assets/herocall.png" 
                alt="Book a Call" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
              {/* Decorative script */}
              <div className="absolute -top-10 -right-10 script-text text-[120px] opacity-10">Lorem</div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Placeholder Section */}
      <section className="section-spacing bg-comp-crema relative overflow-hidden">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-16">
            <span className="label-eyebrow">Scegli la tua data</span>
            <h2 className="text-[42px] font-serif italic text-primary-night"><span className="text-primary-pink">Calendario</span> Disponibilità</h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-comp-sabbia rounded-[3rem] p-1 shadow-xl relative"
          >
             {/* Mock Calendly Widget */}
            <div className="bg-primary-cream rounded-[2.8rem] min-h-[600px] flex flex-col items-center justify-center text-center p-12 border border-dashed border-comp-sabbia">
               <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mb-10 shadow-sm border border-comp-sabbia">
                  <Calendar size={40} className="text-primary-pink" />
               </div>
               <h3 className="text-2xl font-bold mb-6 text-primary-night uppercase tracking-widest">Seleziona una data per iniziare</h3>
               <p className="text-comp-cacao max-w-sm mb-12 italic font-serif">
                 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
               </p>
               <div className="flex gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="h-4 w-16 bg-comp-cipria rounded-full animate-pulse"></div>
                  ))}
               </div>
            </div>

            {/* Decorative script */}
            <div className="absolute -bottom-12 -left-12 script-text text-[100px] text-primary-pink opacity-10 rotate-12">Booking</div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-spacing bg-white relative overflow-hidden">
        <div className="container-custom">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-12 lg:col-span-5">
              <span className="label-eyebrow">Oppure scrivimi</span>
              <h2 className="text-[42px] leading-tight mb-8">
                Inviami un <span className="italic font-serif text-primary-pink">Messaggio</span>
              </h2>
              <p className="text-[16px] text-comp-cacao leading-relaxed mb-12">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-comp-cipria rounded-2xl flex items-center justify-center border border-comp-sabbia group-hover:bg-primary-night group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-1">Email Diretta</div>
                    <div className="text-[15px] font-bold text-primary-night">lorem@ipsum.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 bg-comp-cipria rounded-2xl flex items-center justify-center border border-comp-sabbia group-hover:bg-primary-night group-hover:text-white transition-all">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-1">Tempi di risposta</div>
                    <div className="text-[15px] font-bold text-primary-night italic">Entro 24 ore lavorative</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-12 lg:col-span-7">
              <div className="bg-primary-cream rounded-[4rem] p-10 md:p-16 border border-comp-sabbia shadow-lg relative">
                {formStatus === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-20"
                  >
                    <div className="w-24 h-24 bg-primary-night text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl">
                      <Check size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-night mb-4 uppercase tracking-widest">Messaggio Inviato!</h3>
                    <p className="text-comp-cacao italic font-serif">Ti risponderò prestissimo con tutte le informazioni.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Nome Completo</label>
                        <input 
                          type="text" 
                          required
                          placeholder="Lorem Ipsum" 
                          className="w-full h-14 bg-white border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" 
                        />
                      </div>
                      <div className="relative group">
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Servizio</label>
                        <div className="relative">
                          <select 
                            required
                            className="w-full h-14 bg-white border border-comp-sabbia rounded-2xl px-6 pr-12 focus:border-primary-pink outline-none transition-all text-primary-night appearance-none cursor-pointer hover:shadow-md"
                          >
                            <option value="" disabled selected>Seleziona un servizio</option>
                            <option value="pinterest">Pinterest</option>
                            <option value="content-flow">Content Flow</option>
                          </select>
                          <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-comp-salvia group-focus-within:text-primary-pink group-focus-within:rotate-180 transition-all duration-300">
                            <ChevronDown size={20} />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Tua migliore Email</label>
                      <input 
                        type="email" 
                        required
                        placeholder="lorem@ipsum.com" 
                        className="w-full h-14 bg-white border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" 
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Come posso aiutarti?</label>
                      <textarea 
                        required
                        placeholder="Raccontami la tua visione..." 
                        rows={4}
                        className="w-full bg-white border border-comp-sabbia rounded-2xl p-6 focus:border-primary-pink outline-none transition-colors resize-none text-primary-night"
                      ></textarea>
                    </div>
                    <div className="flex items-start gap-3 ml-1">
                      <input 
                        type="checkbox" 
                        required 
                        id="privacy"
                        className="mt-1 w-4 h-4 rounded border-comp-sabbia text-primary-pink focus:ring-primary-pink cursor-pointer"
                      />
                      <label htmlFor="privacy" className="text-[13px] text-comp-cacao leading-snug cursor-pointer">
                        Dichiaro di aver letto la <Link to="/privacy-policy" className="text-primary-night font-bold hover:text-primary-pink underline underline-offset-4">Privacy Policy</Link> e acconsento al trattamento dei miei dati personali.
                      </label>
                    </div>
                    <button 
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className={`btn-primary w-full h-16 flex justify-center !bg-primary-night !text-white hover:!bg-primary-pink group ${formStatus === 'sending' ? 'opacity-70' : ''}`}
                    >
                      {formStatus === 'sending' ? 'INVIANDO...' : (
                        <> INVIA IL MESSAGGIO <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" /> </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Freebie title="TI ASPETTO IN CALL!" />
    </div>
  );
}
