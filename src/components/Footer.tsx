'use client';

import { motion } from 'framer-motion';
import { FacebookIcon, InstagramIcon, TwitterIcon, YouTubeIcon } from './icons';

const Footer = () => {
  const footerLinks = {
    Company: ['About Us', 'Careers', 'Press', 'Blog'],
    Menu: ['Appetizers', 'Main Course', 'Desserts', 'Beverages'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  };

  const socialLinks = [
    { name: 'Facebook', icon: <FacebookIcon className="h-5 w-5" />, url: '#' },
    { name: 'Instagram', icon: <InstagramIcon className="h-5 w-5" />, url: '#' },
    { name: 'Twitter', icon: <TwitterIcon className="h-5 w-5" />, url: '#' },
    { name: 'YouTube', icon: <YouTubeIcon className="h-5 w-5" />, url: '#' },
  ];

  return (
    <footer className="bg-forest-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-white text-3xl font-bold mb-4">Mumbai Masala</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Modern Indian kitchen celebrating the flavours of Mumbai with warm hospitality and relaxed dining.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.2, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 bg-forest-800 rounded-full flex items-center justify-center hover:bg-sage-400 hover:text-forest-900 transition-colors"
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([title, links], sectionIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 text-lg">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link === 'Blog' ? '/blog' : '#'}
                      className="hover:text-sage-400 transition-colors hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm"
          >
            All rights reserved · 2026
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-sage-400 text-forest-900 w-12 h-12 rounded-full shadow-lg hover:bg-sage-500 transition-colors flex items-center justify-center z-50"
      >
        ↑
      </motion.button>
    </footer>
  );
};

export default Footer;
