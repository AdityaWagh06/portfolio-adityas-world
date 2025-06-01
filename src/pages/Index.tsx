
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';
<<<<<<< HEAD

const Index = () => {
  const [loading, setLoading] = useState(true);
=======
import { useTheme } from '../contexts/ThemeContext';

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
<<<<<<< HEAD
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
=======
    <div className={`relative min-h-screen transition-all duration-500 overflow-x-hidden ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 text-slate-900'
    }`}>
      {/* Animated background particles */}
      <div className="fixed inset-0 pointer-events-none">
        <div className={`absolute inset-0 ${
          theme === 'dark' 
            ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]' 
            : 'bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.05),transparent_50%)]'
        }`}></div>
        <div className={`absolute top-1/4 left-1/4 w-64 h-64 ${
          theme === 'dark' ? 'bg-purple-500/10' : 'bg-purple-500/5'
        } rounded-full blur-3xl animate-pulse`}></div>
        <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${
          theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
        } rounded-full blur-3xl animate-pulse delay-1000`}></div>
>>>>>>> 879109783e40d7de65a02fde090c14884dc9e028
      </div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
