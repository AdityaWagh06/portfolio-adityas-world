
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiFilter } from 'react-icons/fi';

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Fake News Detection",
      description: "AI-powered system using BERT for detecting misinformation with 93% accuracy",
      tech: ["BERT", "HuggingFace", "Python", "Machine Learning"],
      category: "AI/ML",
      special: "93% accuracy rate with advanced NLP",
      github: "#",
      demo: "#"
    },
    {
      title: "AI Cover Letter Generator",
      description: "Personalized cover letter generation using Gemini API and FastAPI",
      tech: ["Gemini API", "FastAPI", "Python", "AI"],
      category: "AI/ML",
      special: "Personalized content with emotion analysis",
      github: "#",
      demo: "#"
    },
    {
      title: "Facial Emotion Recognition",
      description: "Real-time emotion detection using CNN and OpenCV",
      tech: ["CNN", "OpenCV", "TensorFlow", "Computer Vision"],
      category: "AI/ML",
      special: "Real-time processing with high accuracy",
      github: "#",
      demo: "#"
    },
    {
      title: "Emotional Support Chatbot",
      description: "Empathetic AI chatbot using Transformers for emotional support",
      tech: ["Transformers", "Streamlit", "NLP", "Psychology"],
      category: "AI/ML",
      special: "Emotion-aware responses with therapeutic approach",
      github: "#",
      demo: "#"
    },
    {
      title: "EdTech Skill Platform",
      description: "Full-stack learning platform with interactive skill tracking",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      category: "Web Dev",
      special: "Gamified learning with progress tracking",
      github: "#",
      demo: "#"
    },
    {
      title: "Smart OCR Excel Generator",
      description: "Automated data extraction from images to Excel using OCR",
      tech: ["Python", "Tesseract", "OpenCV", "Pandas"],
      category: "Tools",
      special: "99% text extraction accuracy",
      github: "#",
      demo: "#"
    }
  ];

  const categories = ['All', 'AI/ML', 'Web Dev', 'Tools'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" ref={ref} className="py-20 relative">
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
              Projects
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A collection of passion projects that blend emotion with technology
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <FiFilter className="inline mr-2" />
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-300"></div>
              
              <div className="relative">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Special Feature */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  className="mb-4 p-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg border border-purple-400/20"
                >
                  <p className="text-sm text-purple-200">
                    ✨ <strong>What makes it special:</strong> {project.special}
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-white/10 hover:bg-white/20 rounded-lg transition-colors duration-200 text-sm"
                  >
                    <FiGithub className="w-4 h-4" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg transition-all duration-200 text-sm"
                  >
                    <FiExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
