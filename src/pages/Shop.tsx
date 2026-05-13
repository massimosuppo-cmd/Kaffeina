import React from 'react';
import { ShoppingCart, Image as ImageIcon, Star, Plus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';

export default function Shop() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = React.useState<number | null>(null);

  const categories = ["TUTTI", "PINTEREST TEMPLATES", "CORSI ONLINE", "GUIDE & PDF"];
  
  const products = [
    {
      id: 1,
      name: "Lorem Ipsum Kit",
      slug: "lorem-ipsum-1",
      category: "CATEGORY 01",
      price: 29.00,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Dolor Sit Amet",
      slug: "dolor-sit-amet-2",
      category: "CATEGORY 02",
      price: 19.00,
      description: "Sed do eiusmod tempor incididunt ut labore et dolore.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Consectetur Kit",
      slug: "consectetur-3",
      category: "CATEGORY 03",
      price: 149.00,
      description: "Ut enim ad minim veniam, quis nostrud exercitation.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      name: "Adipiscing Volutpat",
      slug: "adipiscing-4",
      category: "CATEGORY 01",
      price: 39.00,
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      name: "Eiusmod Tempor",
      slug: "eiusmod-5",
      category: "CATEGORY 02",
      price: 49.00,
      description: "Excepteur sint occaecat cupidatat non proident.",
      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      name: "Labore Et Dolore",
      slug: "labore-6",
      category: "CATEGORY 03",
      price: 199.00,
      description: "Sunt in culpa qui officia deserunt mollit anim id est.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div className="pt-20 bg-primary-cream">
      {/* Shop Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-eyebrow">Digital Shop</span>
            <h1 className="text-[52px] md:text-[65px] leading-tight mb-8">
              Lorem <span className="italic font-serif">Ipsum Store</span>
            </h1>
            <p className="text-[18px] text-comp-cacao max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="pb-16 relative">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-8 py-2.5 rounded-full text-[12px] font-bold tracking-widest transition-all ${
                  i === 0 
                  ? 'bg-primary-night text-white shadow-md' 
                  : 'bg-white border border-comp-sabbia text-comp-cacao hover:border-primary-pink hover:text-primary-pink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="pb-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col bg-white border border-comp-sabbia rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all"
              >
                <Link to={`/prodotto/${product.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/11] bg-comp-cipria relative overflow-hidden border-b border-comp-sabbia w-full">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    {/* Badge */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest text-primary-night">
                      {product.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col items-center text-center flex-1">
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-primary-pink text-primary-pink" />
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold text-primary-night mb-3 group-hover:text-primary-pink transition-colors leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-[15px] text-comp-cacao mb-8 line-clamp-2 italic">
                      {product.description}
                    </p>
                    <div className="text-[20px] font-normal text-primary-night mb-8 mt-auto">
                      €{product.price.toFixed(2)}
                    </div>
                    
                    <button 
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={addedId === product.id}
                      className={`w-full py-4 rounded-full flex items-center justify-center gap-3 font-bold text-[12px] tracking-widest transition-all ${
                        addedId === product.id 
                        ? 'bg-comp-salvia text-white' 
                        : 'bg-primary-night text-white hover:bg-primary-pink'
                      }`}
                    >
                      {addedId === product.id ? (
                        <>
                          <Check size={16} /> AGGIUNTO!
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={16} /> AGGIUNGI AL CARRELLO
                        </>
                      )}
                    </button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
      <Freebie />
    </div>
  );
}
