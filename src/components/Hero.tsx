'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] xl:min-h-screen overflow-hidden bg-linear-to-b from-forest-900 via-forest-800 to-forest-900"
    >
      <div className="container mx-auto px-6 pt-24 pb-8 md:pt-28 md:pb-10 xl:pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white z-10"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-forest-800/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sage-300 mb-4"
            >
              <span>🍃</span>
              <span>Welcome</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
            >
              A taste of Mumbai
              <br />
              flavours
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-sm font-medium text-sage-300 mb-4"
            >
              By Chef Ananya Rao
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-gray-200 text-base md:text-lg mb-10 max-w-xl leading-relaxed"
            >
              Comfort dishes inspired by Mumbai street food and family kitchens – crafted with
              seasonal ingredients, gentle spice, and a lot of care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#menu"
                className="inline-flex items-center justify-center bg-sage-400 text-forest-900 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-sage-500 transition-all hover:scale-105"
              >
                Let's Eat
              </a>
              <a
                href="#book-table"
                className="inline-flex items-center justify-center border border-white/70 text-white px-8 py-3 rounded-full hover:bg-white hover:text-forest-800 transition-all"
              >
                Book a Table
              </a>
            </motion.div>

            {/* Decorative Coffee Cup */}
            {/* (Previously a coffee cup badge here; removed for a cleaner hero composition.) */}
          </motion.div>

          {/* Right Content - Food Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            whileHover={{ scale: 1.02, rotate: -1 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Food Circle */}
              <div className="w-full max-w-lg mx-auto aspect-square rounded-[2.5rem] bg-tan-400 flex items-center justify-center shadow-2xl overflow-hidden">
                <div className="relative w-4/5 h-4/5 rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <motion.img
                    src="https://images.unsplash.com/photo-1560260330-727f7f5c0277?auto=format&fit=crop&w=1000&q=80"
                    alt="Chickpea and vegetable curry served in a bowl"
                    loading="lazy"
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
              </div>

              {/* Rating Badge (desktop only to avoid clipping on small screens) */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute bottom-6 right-6 hidden md:block bg-white/95 rounded-2xl px-4 py-3 shadow-xl"
              >
                <div className="text-left">
                  <div className="text-[11px] font-semibold uppercase tracking-wide text-gray-500">
                    Popular pick
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="text-sm font-semibold text-forest-900">4.5</span>
                    <span className="text-xs text-yellow-400">★★★★☆</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-forest-700 rounded-full opacity-25 blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>

      {/* Ambient floating blob (subtle, left side only) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.8, x: -80, y: -40 }}
        animate={{ opacity: 0.6, scale: 1, x: -40, y: -20 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-forest-700/40 blur-3xl"
      />
    </section>
  );
};

export default Hero;
