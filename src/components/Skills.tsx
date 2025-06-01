
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: 95, projects: 8 },
        { name: "JavaScript", level: 88, projects: 6 },
        { name: "C++", level: 82, projects: 4 },
        { name: "Java", level: 75, projects: 3 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React", level: 90, projects: 5 },
        { name: "Node.js", level: 85, projects: 4 },
        { name: "TailwindCSS", level: 92, projects: 6 },
        { name: "Express", level: 80, projects: 3 }
      ]
    },
    {
      title: "AI/ML",
      skills: [
        { name: "TensorFlow", level: 88, projects: 5 },
        { name: "OpenCV", level: 85, projects: 4 },
        { name: "Scikit-learn", level: 80, projects: 3 },
        { name: "Gemini API", level: 75, projects: 2 }
      ]
    },
    {
      title: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 85, projects: 4 },
        { name: "Git", level: 90, projects: 10 },
        { name: "VS Code", level: 95, projects: 10 },
        { name: "MySQL", level: 78, projects: 3 }
      ]
    }
  ];

  const learningSkills = [
    "TypeScript", "Next.js", "Research Writing", "GraphQL"
  ];

  return (
    <section id="skills" ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A galaxy of technologies I've mastered and am passionate about
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 
                        }}
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                      />
                    </div>
                    
                    <div className="text-xs text-white/60">
                      Used in {skill.projects} projects
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Learning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-full text-purple-200 font-medium cursor-pointer hover:border-purple-400/60 transition-all duration-300"
              >
                🌟 {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
