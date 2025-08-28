import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Copy, Download, Check, X } from 'lucide-react';
import { Language, LapelConfig } from '../../types';
import { t } from '../../data/translations';
import { getShareableLink, copyToClipboard } from '../../lib/urlState';
import { generateSocialPreview, downloadPreview } from '../../lib/canvasPreview';
import { getPatternById } from '../../data/patterns';

interface ShareProps {
  language: Language;
  config: LapelConfig;
}

const Share: React.FC<ShareProps> = ({ language, config }) => {
  const [showShareModal, setShowShareModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isGeneratingPreview, setIsGeneratingPreview] = useState(false);
  const [previewDataUrl, setPreviewDataUrl] = useState<string>('');

  const handleShare = async () => {
    const shareableLink = getShareableLink(config);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: language === 'ru' ? 'Мой дизайн лацкана' : 'My lapel design',
          text: language === 'ru' ? 'Посмотрите на мой уникальный дизайн лацкана!' : 'Check out my unique lapel design!',
          url: shareableLink,
        });
      } catch (error) {
        // Fallback к копированию ссылки
        await copyLink(shareableLink);
      }
    } else {
      // Fallback для браузеров без Web Share API
      await copyLink(shareableLink);
    }
  };

  const copyLink = async (link: string) => {
    const success = await copyToClipboard(link);
    if (success) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
  };

  const generatePreview = async () => {
    setIsGeneratingPreview(true);
    try {
      const pattern = getPatternById(config.pattern);
      const patternName = language === 'ru' ? pattern?.name : pattern?.nameEn;
      
      if (patternName) {
        const preview = await generateSocialPreview(config, patternName);
        setPreviewDataUrl(preview);
      }
    } catch (error) {
      console.error('Error generating preview:', error);
    } finally {
      setIsGeneratingPreview(false);
    }
  };

  const handleDownloadPreview = () => {
    if (previewDataUrl) {
      const pattern = getPatternById(config.pattern);
      const filename = `lapel-${config.model}-${config.pattern}-preview.png`;
      downloadPreview(previewDataUrl, filename);
    }
  };

  return (
    <>
      {/* Кнопка поделиться */}
      <motion.button
        onClick={() => setShowShareModal(true)}
        className="btn-primary w-full flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Share2 size={20} />
        <span>{t('configurator.share', language)}</span>
      </motion.button>

      {/* Уведомление об успешном копировании */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2"
          >
            <Check size={20} />
            <span>{t('configurator.share.success', language)}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Модальное окно шаринга */}
      <AnimatePresence>
        {showShareModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowShareModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Заголовок */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">
                  {language === 'ru' ? 'Поделиться дизайном' : 'Share Design'}
                </h3>
                <button
                  onClick={() => setShowShareModal(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Содержимое */}
              <div className="p-6 space-y-6">
                {/* Ссылка */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {language === 'ru' ? 'Ссылка на дизайн:' : 'Design link:'}
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={getShareableLink(config)}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm"
                    />
                    <button
                      onClick={() => copyLink(getShareableLink(config))}
                      className="px-3 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
                    >
                      <Copy size={16} />
                    </button>
                  </div>
                </div>

                {/* Быстрые действия */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    {language === 'ru' ? 'Быстрые действия:' : 'Quick actions:'}
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={handleShare}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Share2 size={16} />
                      <span className="text-sm">
                        {language === 'ru' ? 'Поделиться' : 'Share'}
                      </span>
                    </button>
                    <button
                      onClick={generatePreview}
                      disabled={isGeneratingPreview}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                      {isGeneratingPreview ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      ) : (
                        <Download size={16} />
                      )}
                      <span className="text-sm">
                        {language === 'ru' ? 'Превью' : 'Preview'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Превью для соцсетей */}
                {previewDataUrl && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      {language === 'ru' ? 'Превью для соцсетей:' : 'Social media preview:'}
                    </h4>
                    <div className="relative">
                      <img
                        src={previewDataUrl}
                        alt="Preview"
                        className="w-full rounded-lg border border-gray-200"
                      />
                      <button
                        onClick={handleDownloadPreview}
                        className="absolute top-2 right-2 bg-accent-600 text-white p-2 rounded-full hover:bg-accent-700 transition-colors"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                )}

                {/* Социальные сети */}
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    {language === 'ru' ? 'Поделиться в:' : 'Share on:'}
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: 'Telegram', color: 'bg-blue-500', icon: '📱' },
                      { name: 'WhatsApp', color: 'bg-green-500', icon: '📱' },
                      { name: 'Twitter', color: 'bg-blue-400', icon: '🐦' }
                    ].map((social) => (
                      <button
                        key={social.name}
                        onClick={() => {
                          const link = getShareableLink(config);
                          const text = language === 'ru' 
                            ? 'Посмотрите на мой уникальный дизайн лацкана!' 
                            : 'Check out my unique lapel design!';
                          const url = `${social.name === 'Twitter' ? 'https://twitter.com/intent/tweet' : 'https://wa.me'}?text=${encodeURIComponent(text + ' ' + link)}`;
                          window.open(url, '_blank');
                        }}
                        className={`${social.color} text-white p-3 rounded-lg hover:opacity-90 transition-opacity`}
                      >
                        <div className="text-center">
                          <div className="text-lg mb-1">{social.icon}</div>
                          <div className="text-xs">{social.name}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Share;
