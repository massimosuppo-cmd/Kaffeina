import React from 'react';
import { motion } from 'motion/react';

export default function Problem() {
  const problems = [
    { title: 'Lorem Ipsum', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Dolor Sit', desc: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
    { title: 'Amet Consectetur', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section-spacing bg-comp-beige/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-pink/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-comp-sabbia/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="mb-24 max-w-3xl">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="label-eyebrow mb-4 block"
          >
            Lorem Ipsum
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[42px] md:text-[56px] leading-[1.1] mb-6 font-serif italic text-primary-night"
          >
            Lorem ipsum <span className="text-primary-pink">dolor</span> sit amet
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[18px] md:text-[20px] text-comp-cacao/80 max-w-2xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-comp-sabbia/30 bg-white shadow-sm rounded-[2rem] overflow-hidden"
        >
          {problems.map((p, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              className={`p-10 md:p-14 flex flex-col items-start relative group ${
                i < problems.length - 1 ? 'border-b md:border-b-0 md:border-r border-comp-sabbia/30' : ''
              }`}
            >
              <h3 className="font-serif italic text-[26px] md:text-[32px] text-primary-night mb-6 leading-tight">
                {p.title}
              </h3>
              <p className="text-[17px] leading-relaxed text-comp-cacao/80">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
