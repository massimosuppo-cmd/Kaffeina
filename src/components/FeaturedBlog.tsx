import React from 'react';
import { Link } from 'react-router-dom';
import { Image as ImageIcon, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function FeaturedBlog() {
  const articles = [
    {
      id: 1,
      slug: "lorem-ipsum-post-1",
      title: "Lorem Ipsum Dolor Sit Amet Consectetur",
      description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      category: "DESIGN",
      date: "10 Maggio 2024",
      image: "https://images.unsplash.com/photo-1493723843671-1d655e8d717f?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      slug: "lorem-ipsum-post-2",
      title: "Adipiscing Elit Sed Do Eiusmod Tempor",
      description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.",
      category: "STRATEGY",
      date: "8 Maggio 2024",
      image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      slug: "lorem-ipsum-post-3",
      title: "Incididunt Ut Labore Et Dolore Magna",
      description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      category: "DIGITAL",
      date: "5 Maggio 2024",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="section-spacing bg-primary-cream relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div className="max-w-2xl">
            <span className="label-eyebrow">The Blog</span>
            <h2 className="text-[42px] md:text-[56px] leading-[1.1] text-primary-night font-serif italic mb-6">
              Lorem Ipsum <span className="text-primary-pink">Journal</span>
            </h2>
            <p className="text-[18px] text-comp-cacao">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </div>
          <Link to="/blog" className="btn-secondary whitespace-nowrap">
            LEGGI TUTTO IL BLOG <ArrowUpRight size={18} className="ml-2" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-[2.5rem] border border-comp-sabbia bg-white transition-all hover:shadow-xl hover:-translate-y-1"
            >
              <Link to={`/blog/${article.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/11] bg-comp-cipria relative overflow-hidden border-b border-comp-sabbia">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold tracking-widest text-primary-night">
                    {article.category}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-1">
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
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-0 -translate-x-1/2 w-64 h-64 bg-comp-cipria/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/3 right-0 translate-x-1/2 w-80 h-80 bg-primary-pink/5 rounded-full blur-3xl opacity-50"></div>
    </section>
  );
}
