
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Star } from 'lucide-react';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left: Brand & Quote */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left mb-6 md:mb-0"
            >
              <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                <span className="text-lg font-semibold text-white">
                  Built with
                </span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-red-400" />
                </motion.div>
                <span className="text-lg font-semibold text-white">
                  &
                </span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Brain className="w-5 h-5 text-purple-400" />
                </motion.div>
                <span className="text-lg font-semibold text-white">
                  by Aditya Wagh
                </span>
              </div>
              <p className="text-white/60 text-sm">
                Emotionally Engineered • Humanly Crafted
              </p>
            </motion.div>

            {/* Right: Navigation & Theme */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              {/* Navigation Links */}
              <div className="flex gap-6">
                {navLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Hidden Sparkle Easter Egg */}
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                title="Something magical awaits..."
              >
                <Star className="w-5 h-5 text-yellow-400" />
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-6 border-t border-white/10 text-center"
          >
            <p className="text-white/50 text-sm">
              © 2025 Aditya Wagh. All rights reserved. • 
              <span className="text-purple-400"> Crafted with React & Emotion</span>
            </p>
          </motion.div>
        </div>

        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-purple-500/10 to-transparent blur-3xl"></div>
      </footer>

      {/* Hidden Journal Modal */}
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-md w-full border border-purple-400/30 shadow-2xl"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-white mb-4">Secret Unlocked!</h3>
              <div className="space-y-4 text-white/80">
                <p><strong>Dev Journey:</strong> Started with curiosity, evolved with empathy</p>
                <p><strong>Favorite Quote:</strong> "Code with heart, debug with patience"</p>
                <p><strong>Future Goal:</strong> Build AI that truly understands human emotions</p>
                <p><strong>Fun Fact:</strong> Dreams in Python and thinks in emotions 🤖❤️</p>
              </div>
              <motion.button
                onClick={() => setShowModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
              >
                Close Journal
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Footer;
