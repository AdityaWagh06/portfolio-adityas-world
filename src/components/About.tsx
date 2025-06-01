
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const funFacts = [
    "Built an emotion-based chatbot",
    "Reads books like 5 AM Club",
    "Dreams of solving human problems with tech",
    "Believes AI should understand feelings"
  ];

  const personalityData = [
    { skill: 'Creativity', value: 95 },
    { skill: 'Empathy', value: 88 },
    { skill: 'Logic', value: 92 },
    { skill: 'Humor', value: 78 }
  ];

  return (
    <section id="about" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Photo/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center text-8xl shadow-2xl"
              >
                👨‍💻
              </motion.div>
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-xl opacity-30 -z-10"></div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Description */}
            <div className="text-lg text-white/80 leading-relaxed">
              <p className="mb-4">
                I'm a curious and empathetic developer who believes technology should 
                understand and enhance human emotions. My journey in AI and web development 
                is driven by a passion for creating solutions that genuinely matter.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the intersection of 
                psychology and technology, reading about human behavior, or dreaming 
                up the next emotion-aware application.
              </p>
            </div>

            {/* Fun Facts Carousel */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Fun Facts</h3>
              <div className="space-y-2">
                {funFacts.map((fact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3 text-white/70"
                  >
                    <span className="text-purple-400">✨</span>
                    <span>{fact}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personality Radar */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-300">Personality Radar</h3>
              <div className="space-y-3">
                {personalityData.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, width: 0 }}
                    animate={inView ? { opacity: 1, width: "100%" } : { opacity: 0, width: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-white/80">{item.skill}</span>
                      <span className="text-purple-400">{item.value}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${item.value}%` } : { width: 0 }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 0.8 }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
