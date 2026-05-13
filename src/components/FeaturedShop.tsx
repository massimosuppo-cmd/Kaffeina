import React from 'react';
import { ShoppingCart, Image as ImageIcon, Star, Plus, Check, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export default function FeaturedShop() {
  const { addToCart } = useCart();
  const [addedId, setAddedId] = React.useState<number | null>(null);

  const bestSellers = [
    {
      id: 1,
      name: "Lorem Ipsum Kit",
      slug: "lorem-ipsum-kit-1",
      category: "CATEGORY 01",
      price: 29.00,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Dolor Sit Amet Guide",
      slug: "dolor-sit-amet-2",
      category: "CATEGORY 02",
      price: 19.00,
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Consectetur Adipiscing",
      slug: "consectetur-adipiscing-3",
      category: "CATEGORY 03",
      price: 149.00,
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
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
    <section className="section-spacing bg-white relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="label-eyebrow">Featured Products</span>
            <h2 className="text-[42px] md:text-[56px] leading-[1.1] text-primary-night font-serif italic mb-6">
              Lorem Ipsum <span className="text-primary-pink">Dolor</span>
            </h2>
            <p className="text-[18px] text-comp-cacao">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
          <Link to="/shop" className="btn-secondary whitespace-nowrap">
            VAI ALLO SHOP <ArrowUpRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bestSellers.map((product, i) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col bg-white border border-comp-sabbia rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <Link to={`/prodotto/${product.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/11] bg-comp-cipria relative overflow-hidden border-b border-comp-sabbia w-full">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
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
  );
}
