'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { toast } from 'sonner';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Expert Chefs' },
    { number: '100+', label: 'Signature Dishes' },
    { number: '10k+', label: 'Happy Customers' },
  ];

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4"
            >
              <span className="text-sage-400 text-sm uppercase tracking-wider font-semibold">
                Our Story
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Let's Talk About
              <br />
              Mumbai Masala
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Mumbai Masala is a neighbourhood restaurant in the heart of Mumbai, built around seasonal Indian
                ingredients, open-fire and tandoor cooking, and the warmth of shared tables. Every plate that leaves
                our kitchen is crafted to feel both familiar and a little unexpected.
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sage-400">✓</span>
                  <span>Locally sourced produce from trusted farmers and partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sage-400">✓</span>
                  <span>Slow-cooked sauces and broths made fresh in-house every day.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-sage-400">✓</span>
                  <span>Thoughtfully designed space that feels cozy for two or lively for a group.</span>
                </li>
              </ul>
            </div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              type="button"
              aria-disabled="true"
              onClick={() =>
                toast.info('Detailed story page is under construction.', {
                  description: 'For now, you can explore the rest of the site.',
                })
              }
              className="mt-8 bg-sage-400/60 text-forest-900/80 px-8 py-3 rounded-full font-semibold uppercase text-sm cursor-not-allowed"
            >
              Read More
            </motion.button>
          </motion.div>

          {/* Right Side - Open Kitchen Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100">
              {/* Content */}
              <div className="px-8 py-8 space-y-4 text-forest-900">
                <div className="inline-flex items-center gap-2 rounded-full bg-forest-900/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-forest-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Open kitchen, all day
                </div>

                <h3 className="text-xl font-semibold">Crafted in the open</h3>
                <p className="text-sm text-gray-600">
                  Watch dishes move from flame to plate in a single glance. Our open kitchen keeps every
                  detail honest, intentional, and beautifully simple.
                </p>

                <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-medium text-gray-700">
                  <span className="rounded-full bg-forest-900/5 px-3 py-1">Seasonal menu</span>
                  <span className="rounded-full bg-forest-900/5 px-3 py-1">Charcoal grill</span>
                  <span className="rounded-full bg-forest-900/5 px-3 py-1">Tasting counter</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="rounded-2xl bg-white text-center text-forest-900 shadow-sm border border-gray-100 px-4 py-6"
            >
              <div className="text-2xl md:text-3xl font-bold text-black">{stat.number}</div>
              <div className="mt-1 text-xs md:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
