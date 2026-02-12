'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const menuItems = [
  {
    id: 1,
    name: 'Chickpea & Veg Curry with Naan',
    price: '₹420',
    imageSrc:
      'https://images.unsplash.com/photo-1560260330-727f7f5c0277?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Chickpea and vegetable curry served in a bowl',
    description: 'Popular',
  },
  {
    id: 2,
    name: 'Masala Dosa & Sambar',
    price: '₹280',
    imageSrc:
      'https://images.unsplash.com/photo-1694849789325-914b71ab4075?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Masala dosa with sambar served on a wooden plate',
    description: 'South Indian',
  },
  {
    id: 3,
    name: 'Paneer Tikka Platter',
    price: '₹340',
    imageSrc:
      'https://images.unsplash.com/photo-1757715376287-90f24dac4593?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Paneer tikka with fresh herbs on a plate',
    description: 'Tandoor',
  },
  {
    id: 4,
    name: 'Chole Bhature',
    price: '₹260',
    imageSrc:
      'https://images.unsplash.com/photo-1640542509430-f529fdfce835?auto=format&fit=crop&w=900&q=80',
    imageAlt: 'Chickpea curry served with Indian breads',
    description: 'Street Favorite',
  },
];

const FavoriteMenu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="menu"
      className="pt-8 pb-24 md:pt-10 bg-forest-900 scroll-mt-32 md:scroll-mt-40"
      ref={ref}
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Favourite Menu
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Explore our most loved dishes, prepared with authentic recipes and fresh ingredients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-forest-800/80 border border-white/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
            >
              <div className="relative h-64 bg-forest-900/40 overflow-hidden">
                <motion.img
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500"
                  whileHover={{ scale: 1.08 }}
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest-900/60 via-transparent" />
                <div className="absolute top-4 right-4 bg-white/95 px-3 py-1 rounded-full text-sm font-semibold text-forest-800 shadow-sm">
                  {item.description}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sage-400 transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-sage-400">{item.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-forest-900 text-white p-3 rounded-full hover:bg-sage-400 hover:text-forest-900 transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-forest-900 px-8 py-3 rounded-full hover:bg-sage-400 hover:text-forest-900 transition-colors text-lg font-semibold shadow-md"
          >
            View All
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FavoriteMenu;
