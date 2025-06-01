<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
=======

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD
=======
  const { theme, toggleTheme } = useTheme();
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
<<<<<<< HEAD
          ? 'bg-black/20 backdrop-blur-md border-b border-white/10' 
=======
          ? 'bg-black/20 dark:bg-black/20 light:bg-white/20 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-900/10' 
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            &lt;Adi.Dev /&gt;
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
<<<<<<< HEAD
                className="relative text-white/80 hover:text-white transition-colors duration-200 group"
=======
                className="relative text-white/80 dark:text-white/80 light:text-slate-900/80 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors duration-200 group"
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
<<<<<<< HEAD

            {/* GitHub Star Button */}
            <motion.a
              href="https://github.com/AdityaWagh06/portfolio-adityas-world.git"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
            >
              ⭐ Star on GitHub
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              {mobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
=======
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/10 dark:bg-white/10 light:bg-slate-900/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-900/20 transition-colors text-white dark:text-white light:text-slate-900"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/10 dark:bg-white/10 light:bg-slate-900/10 backdrop-blur-sm hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-900/20 transition-colors text-white dark:text-white light:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? 'auto' : 0
        }}
<<<<<<< HEAD
        className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/10 overflow-hidden"
=======
        className="md:hidden bg-black/30 dark:bg-black/30 light:bg-white/30 backdrop-blur-md border-t border-white/10 dark:border-white/10 light:border-slate-900/10 overflow-hidden"
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
<<<<<<< HEAD
              className="block text-white/80 hover:text-white transition-colors duration-200"
=======
              className="block text-white/80 dark:text-white/80 light:text-slate-900/80 hover:text-white dark:hover:text-white light:hover:text-slate-900 transition-colors duration-200"
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
            >
              {item.name}
            </a>
          ))}
<<<<<<< HEAD
          {/* GitHub Star Button - Mobile */}
          <a
            href="https://github.com/AdityaWagh06/portfolio-adityas-world.git"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center px-4 py-2 rounded-full text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 transition-all"
          >
            ⭐ Star on GitHub
          </a>
=======
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
