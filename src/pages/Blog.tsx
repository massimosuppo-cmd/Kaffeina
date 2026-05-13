import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ChevronRight, Calendar, User } from 'lucide-react';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';

export default function Blog() {
  const categories = ["TUTTI", "PINTEREST", "STRATEGIA", "CONTENT FLOW", "DIGITAL"];
  const articles = [
    {
      id: 1,
      slug: "lorem-ipsum-post-1",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      category: "CATEGORY 01",
      date: "10 Maggio 2024",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e8d717f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      slug: "lorem-ipsum-post-2",
      title: "Adipiscing Elit Sed Do Eiusmod Tempor",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      category: "CATEGORY 02",
      date: "8 Maggio 2024",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      slug: "lorem-ipsum-post-3",
      title: "Incididunt Ut Labore Et Dolore Magna",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      category: "CATEGORY 03",
      date: "5 Maggio 2024",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 4,
      slug: "lorem-ipsum-post-4",
      title: "Quis Autem Vel Eum Iure Reprehenderit",
      description: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
      category: "CATEGORY 01",
      date: "2 Maggio 2024",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 5,
      slug: "lorem-ipsum-post-5",
      title: "Temporibus Autem Quibusdam Et Aut",
      description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta.",
      category: "CATEGORY 02",
      date: "28 Aprile 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 6,
      slug: "lorem-ipsum-post-6",
      title: "Itaque Earum Rerum Hic Tenetur A Sapiente",
      description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
      category: "CATEGORY 03",
      date: "25 Aprile 2024",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="pt-20 bg-primary-cream">
      {/* Blog Hero */}
      <section className="section-spacing relative overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="label-eyebrow">Il mio Journal</span>
            <h1 className="text-[52px] md:text-[65px] leading-tight mb-8">
              Lorem ipsum <span className="italic font-serif text-primary-pink">dolor</span> sit amet
            </h1>
            <p className="text-[18px] text-comp-cacao max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-comp-cipria/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-0 translate-x-1/2 w-80 h-80 bg-primary-pink/5 rounded-full blur-3xl"></div>
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

      {/* Blog Grid */}
      <section className="pb-24 relative">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <motion.article 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-comp-sabbia bg-white transition-all hover:shadow-xl hover:-translate-y-1 shadow-sm"
              >
                <Link to={`/blog/${article.slug}`} className="flex flex-col h-full">
                  <div className="aspect-[16/11] bg-comp-cipria relative overflow-hidden border-b border-comp-sabbia">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    {/* Category tag */}
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest text-primary-night">
                      {article.category}
                    </div>
                  </div>
                  
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-[11px] text-comp-salvia uppercase tracking-widest mb-4">
                      <div className="flex items-center gap-1.5"><Calendar size={12} /> {article.date}</div>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-night mb-4 group-hover:text-primary-pink transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-[15px] text-comp-cacao line-clamp-3 mb-8 leading-relaxed italic">
                      {article.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-primary-night font-bold text-[13px] tracking-widest">
                      LEGGI TUTTO <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-20 flex justify-center items-center gap-4">
            {[1, 2, 3].map((num) => (
              <button 
                key={num}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  num === 1 
                  ? 'bg-primary-night text-white shadow-lg' 
                  : 'bg-white border border-comp-sabbia text-comp-cacao hover:border-primary-pink hover:text-primary-pink'
                }`}
              >
                {num}
              </button>
            ))}
            <button className="w-12 h-12 rounded-full bg-white border border-comp-sabbia text-comp-cacao flex items-center justify-center hover:border-primary-pink hover:text-primary-pink transition-all">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <FinalCTA />
      <Freebie />
    </div>
  );
}
