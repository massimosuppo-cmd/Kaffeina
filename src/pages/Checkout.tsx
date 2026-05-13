import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ChevronRight, ShieldCheck, CreditCard, Apple, Wallet, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/shop/thank-you');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="pt-40 text-center bg-primary-cream min-h-screen">
        <h2 className="text-3xl font-serif italic text-primary-night mb-8">Il tuo carrello è vuoto</h2>
        <Link to="/shop" className="btn-primary inline-flex">Torna allo shop</Link>
      </div>
    );
  }

  return (
    <div className="pt-20 bg-primary-cream min-h-screen">
      <section className="section-spacing relative">
        <div className="container-custom max-w-6xl">
          <header className="mb-16">
             <div className="flex items-center gap-2 text-comp-salvia text-[10px] uppercase font-bold tracking-widest mb-4">
                <Link to="/shop/carrello" className="hover:text-primary-pink transition-colors">Carrello</Link>
                <ChevronRight size={12} />
                <span className="text-primary-night">Checkout</span>
             </div>
             <h1 className="text-[42px] font-serif italic text-primary-night flex items-center gap-4">
                Checkout Sicuro <Lock size={28} className="text-primary-pink" />
             </h1>
          </header>

          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Left Side: Forms */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-8">
              {/* Contact Info */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-comp-sabbia shadow-sm">
                <h2 className="text-[22px] font-bold text-primary-night mb-10 flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-comp-cipria flex items-center justify-center text-[14px] font-serif italic text-primary-pink border border-comp-sabbia">1</div>
                   Informazioni di contatto
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Email</label>
                    <input type="email" placeholder="lorem@ipsum.com" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" required />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Nome</label>
                    <input type="text" placeholder="Lorem" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Cognome</label>
                    <input type="text" placeholder="Ipsum" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" />
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-comp-sabbia shadow-sm">
                <h2 className="text-[22px] font-bold text-primary-night mb-10 flex items-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-comp-cipria flex items-center justify-center text-[14px] font-serif italic text-primary-pink border border-comp-sabbia">2</div>
                   Metodo di pagamento
                </h2>
                
                <div className="space-y-4">
                  {/* Credit Card */}
                  <div 
                    onClick={() => setPaymentMethod('card')}
                    className={`p-6 rounded-[2rem] border cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'card' ? 'border-primary-pink bg-primary-cream' : 'border-comp-sabbia hover:border-primary-pink/30'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'card' ? 'border-primary-pink bg-primary-pink' : 'border-comp-sabbia bg-white'}`}>
                        {paymentMethod === 'card' && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="font-bold text-[15px] tracking-tight text-primary-night uppercase">Carta di Credito</span>
                    </div>
                    <CreditCard size={20} className="text-comp-salvia" />
                  </div>

                  {/* PayPal */}
                  <div 
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-6 rounded-[2rem] border cursor-pointer transition-all flex items-center justify-between ${paymentMethod === 'paypal' ? 'border-primary-pink bg-primary-cream' : 'border-comp-sabbia hover:border-primary-pink/30'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${paymentMethod === 'paypal' ? 'border-primary-pink bg-primary-pink' : 'border-comp-sabbia bg-white'}`}>
                        {paymentMethod === 'paypal' && <div className="w-2 h-2 bg-white rounded-full" />}
                      </div>
                      <span className="font-bold text-[15px] tracking-tight text-primary-night uppercase">PayPal</span>
                    </div>
                    <div className="text-[12px] font-bold italic text-[#003087]">PayPal</div>
                  </div>

                  {/* Other Digital wallets */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <button className="h-14 bg-black text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-900 transition-colors">
                      <Apple size={20} /> Pay
                    </button>
                    <button className="h-14 bg-[#4285F4] text-white rounded-2xl flex items-center justify-center gap-2 hover:bg-[#357AE8] transition-colors">
                      G Pay
                    </button>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="mt-10 pt-10 border-t border-comp-sabbia space-y-6"
                  >
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Numero Carta</label>
                      <input type="text" placeholder="0000 0000 0000 0000" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">Scadenza</label>
                        <input type="text" placeholder="MM / YY" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-widest text-comp-salvia mb-3 ml-1">CVV</label>
                        <input type="text" placeholder="123" className="w-full h-14 bg-primary-cream border border-comp-sabbia rounded-2xl px-6 focus:border-primary-pink outline-none transition-colors text-primary-night" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Right Side: Order Summary Sidebar */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-white rounded-[3rem] p-10 border border-comp-sabbia shadow-xl sticky top-32">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-10 text-primary-night">Il tuo Ordine</h3>
                
                <div className="space-y-6 mb-10 max-h-[300px] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-comp-sabbia">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <div className="w-16 h-16 bg-comp-cipria rounded-2xl flex items-center justify-center shrink-0 border border-comp-sabbia text-[10px] font-bold text-primary-night italic font-serif">
                        {item.quantity}x
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-bold uppercase text-primary-night truncate">{item.name}</div>
                        <div className="text-[12px] text-comp-salvia italic">€{item.price.toFixed(2)}</div>
                      </div>
                      <div className="text-[14px] font-black text-primary-night">€{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 pt-8 border-t border-comp-sabbia mb-10 text-[14px]">
                  <div className="flex justify-between text-comp-salvia uppercase font-bold tracking-widest">
                    <span>Subtotale</span>
                    <span>€{cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-comp-salvia uppercase font-bold tracking-widest">
                    <span>Imposte e IVA</span>
                    <span>€0,00</span>
                  </div>
                  <div className="pt-6 border-t border-primary-night/10 flex justify-between items-center relative overflow-hidden">
                    <span className="text-sm font-bold uppercase tracking-widest text-primary-night relative z-10">TOTALE COMPLESSIVO</span>
                    <span className="text-[32px] font-serif italic text-primary-night relative z-10">€{cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className={`btn-primary w-full h-16 !bg-primary-pink !text-white flex justify-center group ${isProcessing ? 'opacity-70' : ''}`}
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-3">
                       <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                       <span>ELABORAZIONE...</span>
                    </div>
                  ) : (
                    <> COMPLETA ORDINE <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" /> </>
                  )}
                </button>

                <div className="mt-8 flex items-center justify-center gap-3 py-4 bg-primary-cream rounded-2xl border border-comp-sabbia">
                  <ShieldCheck size={18} className="text-comp-salvia" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-comp-salvia">Pagamento sicuro SSL 256-bit</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
