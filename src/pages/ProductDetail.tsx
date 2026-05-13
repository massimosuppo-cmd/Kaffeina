import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image as ImageIcon, ShoppingCart, Star, Check, ArrowLeft, Plus, Minus, Shovel as ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';

export default function ProductDetail() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [relatedAddedId, setRelatedAddedId] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Mock product data based on slug
  const product = {
    id: 12345,
    name: 'Lorem Ipsum Product Title',
    category: 'CATEGORY 01',
    price: slug?.includes('corso') ? 149.00 : 29.00,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  };

  const relatedProducts = [
    { 
      id: 1, 
      name: 'Lorem Ipsum Kit', 
      price: 29.00, 
      slug: 'lorem-ipsum-1',
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 2, 
      name: 'Dolor Sit Amet', 
      price: 19.00, 
      slug: 'dolor-sit-amet-2',
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: 3, 
      name: 'Consectetur Kit', 
      price: 149.00, 
      slug: 'consectetur-3',
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
    },
  ];

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
      slug: slug || ''
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleRelatedAddToCart = (e: React.MouseEvent, p: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: 1,
      slug: p.slug
    });
    setRelatedAddedId(p.id);
    setTimeout(() => setRelatedAddedId(null), 2000);
  };

  return (
    <div className="pt-20 bg-primary-cream">
      <section className="section-spacing relative">
        <div className="container-custom">
          <Link to="/shop" className="inline-flex items-center gap-2 text-comp-salvia hover:text-primary-pink mb-12 text-[12px] font-bold uppercase tracking-widest transition-all">
            <ArrowLeft size={14} /> TORNA ALLO SHOP
          </Link>

          <div className="grid md:grid-cols-2 gap-20 items-start">
            {/* Product Image */}
            <div className="sticky top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="aspect-square bg-comp-cipria rounded-[3rem] flex items-center justify-center overflow-hidden border border-comp-sabbia relative shadow-sm"
              >
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur px-5 py-2 rounded-full flex items-center gap-2 border border-comp-sabbia">
                  <Star size={14} className="fill-primary-pink text-primary-pink" />
                  <span className="text-[12px] font-bold text-primary-night uppercase">5.0 Recensioni</span>
                </div>
              </motion.div>
              <div className="grid grid-cols-4 gap-4 mt-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-white rounded-2xl border border-comp-sabbia flex items-center justify-center cursor-pointer hover:border-primary-pink/50 transition-all group">
                    <ImageIcon size={24} className="text-comp-beige group-hover:text-primary-pink transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <span className="label-eyebrow">{product.category}</span>
              <h1 className="text-[42px] leading-tight mb-4 text-primary-night">
                {product.name}
              </h1>
              <div className="text-[28px] font-normal text-primary-night mb-8">€{product.price.toFixed(2)}</div>
              
              <div className="space-y-6 mb-10 text-comp-cacao text-[16px] leading-relaxed">
                <p>{product.description}</p>
              </div>

              <div className="space-y-4 mb-12">
                {['Lorem ipsum dolor sit amet', 'Consectetur adipiscing elit', 'Sed do eiusmod tempor'].map((f, i) => (
                  <div key={i} className="flex gap-4 items-center">
                    <div className="w-6 h-6 rounded-full bg-comp-cipria flex items-center justify-center border border-comp-sabbia">
                      <Check size={14} className="text-primary-pink" />
                    </div>
                    <span className="text-[15px] text-comp-cacao">{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <div className="flex items-center border border-comp-sabbia rounded-full p-2 bg-white grow-0 shrink-0">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-comp-cipria transition-colors text-primary-night"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-12 text-center font-bold text-primary-night">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-comp-cipria transition-colors text-primary-night"
                  >
                    <Plus size={18} />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  disabled={added}
                  className={`flex-1 h-14 rounded-full flex items-center justify-center gap-3 font-bold tracking-widest text-[12px] transition-all ${
                    added ? 'bg-comp-salvia text-white' : 'bg-primary-night text-white hover:bg-primary-pink'
                  }`}
                >
                  {added ? (
                    <> <Check size={20} /> AGGIUNTO! </>
                  ) : (
                    <> <ShoppingCart size={20} /> AGGIUNGI AL CARRELLO </>
                  )}
                </button>
              </div>

              <div className="p-8 bg-comp-crema border border-comp-sabbia rounded-[2.5rem]">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck size={20} className="text-primary-pink" />
                  <span className="text-[13px] font-bold uppercase tracking-widest">Download Immediato</span>
                </div>
                <p className="text-[14px] text-comp-salvia italic leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="pb-24 pt-10 bg-primary-cream relative overflow-hidden">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-[32px] font-serif italic text-primary-night">Potrebbe servirti anche...</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <Link to={`/prodotto/${p.slug}`} key={p.id} className="bg-white border border-comp-sabbia rounded-[2.5rem] overflow-hidden flex flex-col hover:shadow-xl transition-all group shadow-sm">
                <div className="aspect-[16/11] bg-comp-cipria flex items-center justify-center relative overflow-hidden border-b border-comp-sabbia">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex flex-col items-center text-center">
                  <h3 className="text-[17px] font-bold text-primary-night mb-2 group-hover:text-primary-pink transition-colors">{p.name}</h3>
                  <div className="text-[18px] font-normal text-primary-night mb-6">€{p.price.toFixed(2)}</div>
                  <button 
                    onClick={(e) => handleRelatedAddToCart(e, p)}
                    disabled={relatedAddedId === p.id}
                    className={`w-full py-3 rounded-full flex items-center justify-center gap-2 font-bold text-[10px] tracking-widest transition-all ${
                      relatedAddedId === p.id ? 'bg-comp-salvia text-white' : 'bg-primary-night text-white hover:bg-primary-pink'
                    }`}
                  >
                    {relatedAddedId === p.id ? <Check size={14} /> : <Plus size={14} />}
                    {relatedAddedId === p.id ? 'AGGIUNTO' : 'AGGIUNGI'}
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Freebie title="HAVE QUESTIONS?" />
    </div>
  );
}
