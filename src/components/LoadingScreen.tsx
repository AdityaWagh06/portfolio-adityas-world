
import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  const loadingTexts = [
    "Infusing Emotion...",
    "Rendering Innovation...",
    "Loading Aditya's World..."
  ];

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="text-center">
        {/* AI Brain Animation */}
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
          className="relative mx-auto mb-8"
        >
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-60"></div>
          <div className="absolute inset-0 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute inset-4 w-24 h-24 bg-white rounded-full opacity-90 flex items-center justify-center">
            <span className="text-3xl">🧠</span>
          </div>
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
              className="text-xl font-light text-white/80"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>

        {/* Progress Bar */}
        <motion.div className="mt-8 w-64 h-1 bg-white/20 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
