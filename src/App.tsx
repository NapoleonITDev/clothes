import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Language, LapelConfig } from './types';
import { getInitialConfig } from './lib/urlState';
import LanguageToggle from './components/LanguageToggle';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Configurator from './components/Configurator';
import WhySection from './components/WhySection';
import HowSection from './components/HowSection';
import WeeklyDrop from './components/WeeklyDrop';
import DesignBattles from './components/DesignBattles';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [language, setLanguage] = useState<Language>('ru');
  const [config, setConfig] = useState<LapelConfig>(getInitialConfig());

  // Обновляем язык при изменении
  useEffect(() => {
    // Можно добавить сохранение языка в localStorage
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-white">
      {/* Language Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle language={language} onLanguageChange={setLanguage} />
      </div>

      {/* Header */}
      <Header language={language} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero language={language} />

        {/* Gallery Section */}
        <Gallery language={language} />

        {/* Configurator Section */}
        <Configurator
          language={language}
          config={config}
          onConfigChange={setConfig}
        />

        {/* Why Section */}
        <WhySection language={language} />

        {/* How Section */}
        <HowSection language={language} />

        {/* Weekly Drop Section */}
        <WeeklyDrop language={language} />

        {/* Design Battles Section */}
        <DesignBattles language={language} />

        {/* Reviews Section */}
        <Reviews language={language} />

        {/* Pricing Section */}
        <Pricing language={language} />

        {/* FAQ Section */}
        <FAQ language={language} />

        {/* Contact Section */}
        <Contact language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}

export default App;
