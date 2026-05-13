import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus, ArrowRight, Trash2, Image as ImageIcon, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, addToCart } = useCart();
  const [addedId, setAddedId] = useState<number | null>(null);

  const suggestions = [
    { id: 201, name: 'Lorem Ipsum Guide', price: 19.00, slug: 'prodotto-lorem-201' },
    { id: 202, name: 'Lorem Ipsum Templates', price: 24.00, slug: 'prodotto-lorem-202' },
    { id: 203, name: 'Lorem Ipsum Presets', price: 15.00, slug: 'prodotto-lorem-203' },
  ];

  const handleAddSuggestion = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      slug: product.slug
    });
    setAddedId(product.id);
    setTimeout(() => setAddedId(null), 2000);
  };

  return (
    <div className="pt-20 bg-primary-cream min-h-screen">
      <section className="section-spacing relative">
        <div className="container-custom max-w-5xl">
          <header className="text-center mb-16">
            <span className="label-eyebrow">Shopping bag</span>
            <h1 className="text-[42px] font-serif italic text-primary-night">Il tuo Carrello</h1>
          </header>
          
          {cart.length === 0 ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 bg-comp-crema rounded-[3rem] border border-comp-sabbia"
            >
              <div className="w-20 h-20 bg-white rounded-full mx-auto mb-8 flex items-center justify-center border border-comp-sabbia text-comp-salvia">
                <ShoppingCart size={32} />
              </div>
              <p className="text-[20px] text-comp-cacao mb-8 italic font-serif">Il tuo carrello è ancora vuoto</p>
              <Link to="/shop" className="btn-primary inline-flex">
                TORNA ALLO SHOP
              </Link>
            </motion.div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12 items-start">
              {/* Product List */}
              <div className="lg:col-span-2 space-y-6">
                <AnimatePresence>
                  {cart.map((item) => (
                    <motion.div 
                      key={item.id} 
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="p-8 bg-white rounded-[2rem] border border-comp-sabbia flex gap-6 md:gap-10 relative overflow-hidden group shadow-sm"
                    >
                      <div className="w-24 h-24 bg-comp-cipria/30 rounded-[1.5rem] flex items-center justify-center shrink-0 border border-comp-sabbia transition-transform group-hover:scale-105">
                        <ImageIcon className="text-comp-beige" size={32} />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-[17px] font-bold text-primary-night mb-1">{item.name}</h3>
                            <div className="text-[14px] font-normal text-comp-cacao">€{item.price.toFixed(2)}</div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)} 
                            className="text-comp-salvia hover:text-primary-pink transition-colors p-1"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                        <div className="flex items-center gap-4 mt-6">
                          <div className="flex items-center border border-comp-sabbia rounded-full p-1.5 bg-primary-cream">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors text-primary-night"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-10 text-center text-sm font-bold text-primary-night">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors text-primary-night"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Suggestions Section */}
                <div className="pt-12">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="h-[1px] flex-1 bg-comp-sabbia"></div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-comp-salvia">Forse ti serve anche...</span>
                    <div className="h-[1px] flex-1 bg-comp-sabbia"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestions.map((p) => (
                      <div key={p.id} className="bg-white border border-comp-sabbia rounded-[2rem] overflow-hidden flex flex-col items-center text-center group hover:shadow-lg transition-all shadow-sm">
                        <div className="w-full h-32 bg-comp-cipria flex items-center justify-center border-b border-comp-sabbia group-hover:scale-105 transition-transform duration-500">
                          <ImageIcon size={28} className="text-primary-night/10" />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                          <h4 className="text-[14px] font-bold text-primary-night mb-1">{p.name}</h4>
                          <div className="text-[14px] font-normal text-primary-night mb-4">€{p.price.toFixed(2)}</div>
                          <button 
                            onClick={() => handleAddSuggestion(p)}
                            className={`px-6 py-2.5 rounded-full flex items-center justify-center gap-2 text-[10px] font-bold tracking-widest transition-all ${
                              addedId === p.id 
                              ? 'bg-comp-salvia text-white' 
                              : 'bg-primary-cream border border-comp-sabbia text-primary-night hover:bg-primary-night hover:text-white'
                            }`}
                          >
                            {addedId === p.id ? <Check size={14} /> : <Plus size={14} />}
                            {addedId === p.id ? 'AGGIUNTO' : 'AGGIUNGI'}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Summary Sidebar */}
              <div className="sticky top-32">
                <div className="bg-primary-night text-primary-cream rounded-[3rem] p-10 shadow-xl overflow-hidden relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-pink/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                  
                  <h3 className="text-xl font-bold uppercase tracking-widest mb-10 relative z-10">Riepilogo</h3>
                  <div className="space-y-6 mb-12 relative z-10 text-[15px]">
                    <div className="flex justify-between items-center text-primary-cream/60">
                      <span>Subtotale</span>
                      <span className="font-normal">€{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-primary-cream/60">
                      <span>Download</span>
                      <span className="text-primary-pink uppercase font-bold text-[11px] tracking-widest">Immediato</span>
                    </div>
                    <div className="pt-6 border-t border-primary-cream/10 flex justify-between items-center">
                      <span className="text-sm font-bold uppercase tracking-widest">Totale</span>
                      <span className="text-2xl font-normal">€{cartTotal.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Link to="/shop/checkout" className="btn-primary w-full relative z-10 !bg-primary-pink !text-white flex justify-center group">
                    CHECKOUT <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                  
                  <div className="mt-8 text-center relative z-10">
                    <Link to="/shop" className="text-[12px] font-bold uppercase tracking-widest text-primary-cream/40 hover:text-primary-pink transition-colors">
                      Continua lo shopping
                    </Link>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-white border border-comp-sabbia rounded-[2rem] flex items-center justify-center gap-4">
                   <div className="w-8 h-8 rounded-full bg-comp-crema flex items-center justify-center"><Check size={14} className="text-primary-pink" /></div>
                   <span className="text-[13px] text-comp-cacao leading-tight font-medium uppercase tracking-widest italic font-serif">Secure SSL Checkout</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

