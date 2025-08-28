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
      {/* Пол */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Пол
        </h3>
        <div className="flex gap-3">
          <button
            onClick={() => handleGenderChange('male')}
            className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
              config.gender === 'male'
                ? 'border-accent-600 bg-accent-50 text-accent-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-accent-300'
            }`}
          >
            {t('configurator.gender.male', language)}
          </button>
          <button
            onClick={() => handleGenderChange('female')}
            className={`px-4 py-2 rounded-lg border-2 transition-colors duration-200 ${
              config.gender === 'female'
                ? 'border-accent-600 bg-accent-50 text-accent-700'
                : 'border-gray-300 bg-white text-gray-700 hover:border-accent-300'
            }`}
          >
            {t('configurator.gender.female', language)}
          </button>
        </div>
      </div>

      {/* Модель лацкана */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t('configurator.model.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {(['notch', 'peak', 'shawl'] as LapelModel[]).map((model) => (
            <button
              key={model}
              onClick={() => handleModelChange(model)}
              className={`px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                config.model === model
                  ? 'border-accent-600 bg-accent-50 text-accent-700'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-accent-300'
              }`}
            >
              <div className="text-sm font-medium">
                {t(`configurator.model.${model}`, language)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Паттерн */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t('configurator.pattern.title', language)}
        </h3>
        <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
          {PATTERNS.map((pattern) => (
            <button
              key={pattern.id}
              onClick={() => handlePatternChange(pattern.id)}
              className={`p-3 rounded-lg border-2 transition-colors duration-200 text-left ${
                config.pattern === pattern.id
                  ? 'border-accent-600 bg-accent-50'
                  : 'border-gray-300 bg-white hover:border-accent-300'
              }`}
            >
              <div className="text-sm font-medium text-gray-900">
                {language === 'ru' ? pattern.name : pattern.nameEn}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                {language === 'ru' ? pattern.tags[0] : pattern.tagsEn[0]}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Цвет канта */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t('configurator.trim.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {(['ivory', 'cream', 'beige', 'taupe', 'charcoal', 'navy'] as TrimColor[]).map((color) => (
            <button
              key={color}
              onClick={() => handleTrimColorChange(color)}
              className={`relative p-4 rounded-lg border-2 transition-colors duration-200 ${
                config.trimColor === color
                  ? 'border-accent-600 ring-2 ring-accent-200'
                  : 'border-gray-300 hover:border-accent-300'
              }`}
            >
              <div 
                className="w-full h-8 rounded border border-gray-300"
                style={{ backgroundColor: getTrimColorHex(color) }}
              />
              <div className="text-xs text-gray-700 mt-2 capitalize">
                {color}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Цвет нитки */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {t('configurator.stitch.title', language)}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {(['red', 'blue', 'green', 'gold', 'purple', 'black'] as StitchColor[]).map((color) => (
            <button
              key={color}
              onClick={() => handleStitchColorChange(color)}
              className={`relative p-4 rounded-lg border-2 transition-colors duration-200 ${
                config.stitchColor === color
                  ? 'border-accent-600 ring-2 ring-accent-200'
                  : 'border-gray-300 hover:border-accent-300'
              }`}
            >
              <div 
                className="w-full h-8 rounded border border-gray-300"
                style={{ backgroundColor: getStitchColorHex(color) }}
              />
              <div className="text-xs text-gray-700 mt-2 capitalize">
                {color}
              </div>
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
