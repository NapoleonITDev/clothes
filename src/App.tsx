import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from './types';
import { getInitialConfig } from './lib/urlState';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Configurator from './components/Configurator';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const [language, setLanguage] = useState<Language>('ru');
  const [config, setConfig] = useState(getInitialConfig());

  useEffect(() => {
    // Применяем начальную конфигурацию из URL
    const initialConfig = getInitialConfig();
    setConfig(initialConfig);
  }, []);

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="min-h-screen bg-white">
      <LanguageToggle 
        currentLanguage={language} 
        onLanguageChange={handleLanguageChange} 
      />
      
      <Header language={language} />
      
      <main>
        <Hero language={language} />
        <Gallery language={language} />
        <Configurator 
          language={language} 
          config={config} 
          onConfigChange={setConfig} 
        />
        <WhySection language={language} />
        <HowSection language={language} />
        <Reviews language={language} />
        <Pricing language={language} />
        <FAQ language={language} />
        <Contact language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
}

export default App;
