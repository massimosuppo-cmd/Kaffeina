import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image as ImageIcon, Clock, Calendar, ChevronLeft, Quote, ChevronRight } from 'lucide-react';
import Freebie from '../components/Freebie';
import FinalCTA from '../components/FinalCTA';
import { motion } from 'motion/react';

export default function BlogPost() {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const relatedArticles = [
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
      {/* Blog Post Header */}
      <article className="max-w-4xl mx-auto px-6 py-16">
        <Link to="/blog" className="flex items-center gap-2 text-comp-salvia hover:text-primary-pink mb-12 text-[12px] font-bold tracking-widest transition-all">
          <ChevronLeft size={16} /> TORNA AL BLOG
        </Link>
        
        <header className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <span className="px-4 py-2 bg-primary-pink text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
              LOREM CATEGORY
            </span>
            <div className="flex items-center gap-4 text-comp-salvia text-[10px] uppercase font-bold tracking-widest">
              <div className="flex items-center gap-1.5"><Calendar size={12} /> 10 MAGGIO 2024</div>
              <div className="flex items-center gap-1.5"><Clock size={12} /> 5 MIN READ</div>
            </div>
          </div>
          
          <h1 className="text-[42px] md:text-[52px] leading-tight mb-10">
            Lorem ipsum dolor sit amet <span className="italic font-serif">consectetur adipiscing</span> elit sed do eiusmod
          </h1>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-comp-cipria flex items-center justify-center text-primary-night font-serif italic text-xl border border-comp-sabbia">K</div>
            <div>
              <div className="text-[14px] font-bold text-primary-night uppercase tracking-wider">Kaffeina</div>
              <div className="text-[12px] text-comp-salvia uppercase tracking-widest font-medium">Digital Assistant</div>
            </div>
          </div>
        </header>

        {/* Cover Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="aspect-video w-full bg-comp-cipria rounded-[3rem] mb-20 flex items-center justify-center border border-comp-sabbia relative overflow-hidden shadow-sm"
        >
          <img 
            src="https://images.unsplash.com/photo-1493723843671-1d655e8d717f?auto=format&fit=crop&q=80&w=1200" 
            alt="Cover" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 script-text text-[150px] opacity-10 pointer-events-none">Journal</div>
        </motion.div>

        {/* Content Section 1 */}
        <div className="max-w-2xl mx-auto space-y-10 mb-20 text-[18px] text-comp-cacao leading-relaxed">
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:italic first-letter:mr-3 first-letter:float-left first-letter:text-primary-pink">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          
          <h2 className="text-[32px] font-serif italic text-primary-night pt-6">Lorem Ipsum Subtitle</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>

        {/* Inner Image with decorative caption */}
        <div className="max-w-3xl mx-auto mb-20 px-4 md:px-0">
          <div className="aspect-[16/9] w-full bg-white rounded-[2.5rem] mb-6 flex items-center justify-center border border-comp-sabbia overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&q=80&w=1000" 
              alt="Detail" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <p className="text-center italic font-serif text-comp-salvia text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
        </div>

        {/* Content Section 2 (List/Steps) */}
        <div className="max-w-2xl mx-auto space-y-12 mb-20">
          <h3 className="text-[28px] font-bold text-primary-night">3 Step per il tuo successo</h3>
          <div className="space-y-10">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex gap-8">
                <div className="w-12 h-12 rounded-full bg-comp-cipria border border-comp-sabbia text-primary-pink flex items-center justify-center text-[18px] font-serif italic shrink-0">
                  {step}
                </div>
                <div className="space-y-4">
                  <h4 className="text-[18px] font-bold text-primary-night uppercase tracking-wider">Lorem Ipsum Step</h4>
                  <p className="text-[16px] text-comp-cacao leading-relaxed italic">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Quote/Highlight Box */}
        <div className="max-w-3xl mx-auto p-12 md:p-16 bg-primary-night rounded-[3rem] mb-20 text-center relative overflow-hidden group">
          <Quote className="absolute top-8 left-8 text-primary-pink/20 w-16 h-16" />
          <div className="relative z-10 text-[20px] md:text-[28px] font-serif italic text-primary-cream leading-relaxed">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
          </div>
        </div>

        {/* Final Conclusion Content */}
        <div className="max-w-2xl mx-auto space-y-8 text-[18px] text-comp-cacao leading-relaxed mb-20">
          <p>
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
        
        {/* Share Section */}
        <div className="max-w-2xl mx-auto pt-10 border-t border-comp-sabbia flex items-center justify-between">
          <div className="text-[12px] font-bold uppercase tracking-widest text-comp-salvia">Condividi questo articolo</div>
          <div className="flex gap-4">
             {[1, 2, 3].map(i => <div key={i} className="w-9 h-9 rounded-full bg-white border border-comp-sabbia flex items-center justify-center hover:bg-primary-pink hover:border-primary-pink transition-colors cursor-pointer group">
               <div className="w-4 h-4 bg-primary-night group-hover:bg-white rounded-sm"></div>
             </div>)}
          </div>
        </div>
      </article>

      {/* Related Articles Section */}
      <section className="bg-white py-24 border-t border-comp-sabbia">
        <div className="container-custom">
          <div className="mb-16">
            <span className="label-eyebrow">Journal</span>
            <h2 className="text-[36px] md:text-[48px] font-serif italic text-primary-night">Articoli <span className="text-primary-pink">Correlati</span></h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((article, i) => (
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
        </div>
      </section>

      <FinalCTA />
      <Freebie />
    </div>
  );
}
