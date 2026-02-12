"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { toast } from "sonner";

const locations = [
  {
    id: 1,
    title: 'Mumbai Masala - Bandra',
    subtitle: 'Bandra West',
    distance: 'Linking Road, Bandra West, Mumbai',
    icon: '📍',
  },
  {
    id: 2,
    title: 'Mumbai Masala - Powai',
    subtitle: 'Powai',
    distance: 'Hiranandani Gardens, Powai, Mumbai',
    icon: '📍',
  },
];

const Locations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed || !emailRegex.test(trimmed)) {
      toast.error("Please enter a valid email address.", {
        description: "We use your email only to send occasional updates.",
      });
      return;
    }

    // In a real app you would POST trimmed to your newsletter API here.
    toast.success("Subscribed to Mumbai Masala updates!", {
      description: "You’ll hear from us about new menus and special events.",
    });

    setEmail("");
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-forest-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Visit Our Locations
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Find us at any of our convenient locations across the city
          </p>
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative bg-forest-800/80 rounded-2xl p-8 md:p-12 shadow-xl mb-12 overflow-hidden"
        >
          {/* Decorative Map Background */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full bg-linear-to-br from-sage-400 to-forest-700" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.2 }}
                className="relative"
              >
                {/* Floating location label */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 2.4, delay: index * 0.3 }}
                  className="absolute -top-6 left-1/2 -translate-x-1/2"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-forest-900/95 px-4 py-1 shadow-lg border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-sage-400 shadow-[0_0_0_4px_rgba(127,166,141,0.35)]" />
                    <span className="text-xs font-semibold uppercase tracking-wide text-sage-200">
                      {location.subtitle}
                    </span>
                  </div>
                </motion.div>

                <div className="bg-forest-900/60 backdrop-blur rounded-xl p-6 hover:shadow-lg transition-shadow mt-6 border border-white/5">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {location.title}
                  </h3>
                  <p className="text-lg text-sage-400 font-semibold mb-2">
                    {location.subtitle}
                  </p>
                  <div className="text-gray-300 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{location.distance}</span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full bg-sage-400 text-forest-900 py-3 rounded-lg hover:bg-sage-500 transition-colors font-semibold"
                  >
                    View Location
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="bg-forest-800 rounded-2xl p-8 md:p-12 text-center shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for exclusive offers, new menu items, and special events
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            noValidate
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 rounded-lg bg-white text-forest-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sage-400"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-sage-400 text-forest-900 px-8 py-4 rounded-lg hover:bg-sage-500 transition-colors font-semibold whitespace-nowrap"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Locations;
