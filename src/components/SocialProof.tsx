import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialProof() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    { name: 'Lorem Ipsum', role: 'Dolor Sit', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.' },
    { name: 'Dolor Sit', role: 'Amet Consectetur', text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { name: 'Amet Consectetur', role: 'Adipiscing Elit', text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
    { name: 'Adipiscing Elit', role: 'Sed Do', text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
    { name: 'Sed Do', role: 'Eiusmod Tempor', text: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.' },
    { name: 'Eiusmod Tempor', role: 'Labore Et', text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = React.useState(0);

  React.useEffect(() => {
    const calculateDistance = () => {
      if (scrollRef.current) {
        setScrollDistance(scrollRef.current.scrollWidth - window.innerWidth);
      }
    };

    calculateDistance();
    window.addEventListener('resize', calculateDistance);
    return () => window.removeEventListener('resize', calculateDistance);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen flex flex-col pt-20 md:pt-32 overflow-hidden">
        <div className="container-custom mb-10 md:mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="label-eyebrow mb-4 block"
            >
              Lorem Ipsum
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[32px] md:text-[56px] leading-[1.1] font-serif italic text-primary-night"
            >
              Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
            </motion.h2>
          </div>
        </div>

        <div className="flex">
          <motion.div 
            ref={scrollRef}
            style={{ x }}
            className="flex gap-6 md:gap-10 px-4 md:px-20 w-max"
          >
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-[320px] md:w-[450px] h-[280px] md:h-[320px] bg-comp-beige/20 border border-comp-sabbia/20 rounded-[2.5rem] p-8 md:p-14 relative flex flex-col justify-between"
              >
                <Quote className="absolute top-8 right-8 md:top-10 md:right-10 w-10 h-10 md:w-12 md:h-12 text-primary-pink/5" />
                
                <div className="relative z-10">
                  <p className="font-serif italic text-[20px] md:text-[26px] text-primary-night leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                <div className="mt-6 md:mt-8 flex items-center gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-comp-cipria flex items-center justify-center font-bold text-primary-night text-xs md:text-sm">
                    {t.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-bold text-[12px] md:text-[13px] uppercase tracking-wider text-primary-night">{t.name}</h4>
                    <p className="text-[11px] md:text-[12px] text-comp-cacao/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="container-custom mt-20 text-center relative z-20"
        >
          <Link to="/prenota-una-call" className="btn-primary inline-flex">
            PRENOTA UNA CALL <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
