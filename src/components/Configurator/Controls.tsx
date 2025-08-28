import React from 'react';
import { motion } from 'framer-motion';
import { Language, LapelConfig, LapelModel, TrimColor, StitchColor } from '../../types';
import { t } from '../../data/translations';
import { PATTERNS } from '../../data/patterns';

interface ControlsProps {
  language: Language;
  config: LapelConfig;
  onConfigChange: (updates: Partial<LapelConfig>) => void;
}

const Controls: React.FC<ControlsProps> = ({
  language,
  config,
  onConfigChange
}) => {
  const handleModelChange = (model: LapelModel) => {
    onConfigChange({ model });
  };

  const handlePatternChange = (pattern: string) => {
    onConfigChange({ pattern });
  };

  const handleTrimColorChange = (trimColor: TrimColor) => {
    onConfigChange({ trimColor });
  };

  const handleStitchColorChange = (stitchColor: StitchColor) => {
    onConfigChange({ stitchColor });
  };

  const handleGenderChange = (gender: 'male' | 'female') => {
    onConfigChange({ gender });
  };

  return (
    <div className="space-y-8">
      {/* Gender Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
          {language === 'ru' ? 'Пол' : 'Gender'}
        </h3>
        <div className="flex gap-3">
          {[
            { value: 'male', label: language === 'ru' ? 'Мужской' : 'Male', icon: '👔' },
            { value: 'female', label: language === 'ru' ? 'Женский' : 'Female', icon: '👗' }
          ].map((option) => (
            <button
              key={option.value}
              onClick={() => handleGenderChange(option.value as 'male' | 'female')}
              className={`flex-1 px-6 py-4 rounded-xl border-2 transition-all duration-300 text-center group ${
                config.gender === option.value
                  ? 'border-accent-600 bg-accent-50 text-accent-700 shadow-lg'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-accent-300 hover:bg-accent-50/30'
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Lapel Model */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
          {t('configurator.model.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {([
            { model: 'notch', label: t('configurator.model.notch', language), icon: '📐' },
            { model: 'peak', label: t('configurator.model.peak', language), icon: '🔺' },
            { model: 'shawl', label: t('configurator.model.shawl', language), icon: '🌊' }
          ] as const).map((option) => (
            <button
              key={option.model}
              onClick={() => handleModelChange(option.model)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-center group ${
                config.model === option.model
                  ? 'border-primary-600 bg-primary-50 text-primary-700 shadow-lg scale-105'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300 hover:bg-primary-50/30 hover:scale-102'
              }`}
            >
              <div className="text-2xl mb-2">{option.icon}</div>
              <div className="text-sm font-medium">{option.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Pattern Selection */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
          {t('configurator.pattern.title', language)}
        </h3>
        <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto custom-scrollbar">
          {PATTERNS.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => handlePatternChange(pattern.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 text-left group ${
                config.pattern === pattern.id
                  ? 'border-green-600 bg-green-50 text-green-700 shadow-lg scale-105'
                  : 'border-gray-200 bg-white text-gray-700 hover:border-green-300 hover:bg-green-50/30 hover:scale-102'
              }`}
            >
              <div className="text-sm font-medium text-gray-900 mb-1">
                {language === 'ru' ? pattern.name : pattern.nameEn}
              </div>
              <div className="text-xs text-gray-500">
                {language === 'ru' ? pattern.tags[0] : pattern.tagsEn[0]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Trim Color */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
          {t('configurator.trim.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {(['ivory', 'cream', 'beige', 'taupe', 'charcoal', 'navy'] as TrimColor[]).map((color) => (
            <button
              key={color}
              onClick={() => handleTrimColorChange(color)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
                config.trimColor === color
                  ? 'border-purple-600 ring-2 ring-purple-200 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-purple-300 hover:scale-102'
              }`}
            >
              <div
                className="w-full h-8 rounded-lg border border-gray-300 mb-2"
                style={{ backgroundColor: getTrimColorHex(color) }}
              />
              <div className="text-xs text-gray-700 capitalize font-medium">
                {color}
              </div>
              {config.trimColor === color && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Stitch Color */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
          {t('configurator.stitch.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {(['red', 'blue', 'green', 'gold', 'purple', 'black'] as StitchColor[]).map((color) => (
            <button
              key={color}
              onClick={() => handleStitchColorChange(color)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
                config.stitchColor === color
                  ? 'border-orange-600 ring-2 ring-orange-200 shadow-lg scale-105'
                  : 'border-gray-200 hover:border-orange-300 hover:scale-102'
              }`}
            >
              <div
                className="w-full h-8 rounded-lg border border-gray-300 mb-2"
                style={{ backgroundColor: getStitchColorHex(color) }}
              />
              <div className="text-xs text-gray-700 capitalize font-medium">
                {color}
              </div>
              {config.stitchColor === color && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const getTrimColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    ivory: '#fffff0',
    cream: '#f5f5dc',
    beige: '#f5f5dc',
    taupe: '#483c32',
    charcoal: '#36454f',
    navy: '#000080'
  };
  return colorMap[color] || '#000000';
};

const getStitchColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    red: '#dc2626',
    blue: '#2563eb',
    green: '#16a34a',
    gold: '#ca8a04',
    purple: '#9333ea',
    black: '#000000'
  };
  return colorMap[color] || '#000000';
};

export default Controls;
