import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi';
import { FaPinterestP } from 'react-icons/fa';


const Contact = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Easter egg trigger
    if (name === 'name' && value.toLowerCase().includes('magic')) {
      setShowEasterEgg(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/movwazln', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setIsSubmitted(true);
        setShowEasterEgg(formData.name.toLowerCase().includes('magic'));

        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          setShowEasterEgg(false);
        }, 3000);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Failed to send. Please check your connection.');
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: "https://github.com/AdityaWagh06", label: "GitHub", color: "hover:text-gray-400" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/aditya-wagh25/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FiMail, href: "mailto:adityawagh2525@gmail.com", label: "Email", color: "hover:text-purple-400" },
    { icon: FaPinterestP, href: "https://pin.it/5d6e0fHpi", label: "Pinterest", color: "hover:text-red-400" }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have an idea? Want to collaborate? Or just want to say hi? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.3 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 peer"
                    placeholder="Your Name"
                  />
                  <label className="absolute left-4 top-3 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:top-1 peer-focus:text-purple-400">
                    Your Name
                  </label>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 peer"
                    placeholder="Your Email"
                  />
                  <label className="absolute left-4 top-3 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:top-1 peer-focus:text-purple-400">
                    Your Email
                  </label>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-transparent focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300 peer resize-none"
                    placeholder="Your Message"
                  />
                  <label className="absolute left-4 top-3 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:text-sm peer-focus:top-1 peer-focus:text-purple-400">
                    Your Message
                  </label>
                </motion.div>

                {/* Easter Egg */}
                {showEasterEgg && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-lg"
                  >
                    <p className="text-purple-200 text-sm">
                      🎉 You unlocked a secret: Aditya is also a storyteller 📖
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
                >
                  <FiSend className="w-4 h-4" />
                  Send Message
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="text-6xl mb-4"
                >
                  ✈️
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/70">
                  Thanks for reaching out! Let's build something cool together.
                </p>
              </motion.div>
            )}
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Text */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Create Something Amazing</h3>
              <p className="text-white/70 leading-relaxed">
                I'm always excited to work on projects that make a difference. 
                Whether it's building emotion-aware AI, crafting beautiful web experiences, 
                or solving complex problems with code, I'm here to help bring your ideas to life.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className={`p-4 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 ${social.color} group`}
                      title={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Fun Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-400/20"
            >
              <p className="text-white/80 italic text-center">
                "The best way to predict the future is to create it with empathy and innovation."
              </p>
              <p className="text-purple-300 text-sm text-center mt-2">- Aditya's Philosophy</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
