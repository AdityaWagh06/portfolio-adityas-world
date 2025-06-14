
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const loadingTexts = [
    "Initializing Experience...",
    "Loading Portfolio...",
    "Almost Ready..."
  ];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-slate-50 light:via-purple-50 light:to-slate-50"
    >
      <div className="text-center">
        {/* Modern Loading Animation */}
        <motion.div
          className="relative mx-auto mb-8 w-32 h-32"
        >
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-blue-500"
          />
          
          {/* Middle ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-4 rounded-full border-4 border-transparent border-t-blue-400 border-l-purple-400"
          />
          
          {/* Inner circle */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
          />
          
          {/* Center dot */}
          <div className="absolute inset-12 rounded-full bg-white dark:bg-white light:bg-slate-900" />
        </motion.div>

        {/* Loading Text Animation */}
        <motion.div className="space-y-4">
          {loadingTexts.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.8,
                duration: 0.6
              }}
              className="text-xl font-light text-white dark:text-white light:text-slate-900"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Modern Progress Bar */}
        <motion.div className="mt-8 w-64 h-2 bg-white/20 dark:bg-white/20 light:bg-slate-900/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
