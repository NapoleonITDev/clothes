import { LapelConfig } from '../types';
import { getPatternById } from '../data/patterns';

const CANVAS_WIDTH = 1200;
const CANVAS_HEIGHT = 630;

export const generateSocialPreview = async (
  config: LapelConfig,
  patternName: string
): Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  canvas.width = CANVAS_WIDTH;
  canvas.height = CANVAS_HEIGHT;

  // Фон
  const gradient = ctx.createLinearGradient(0, 0, 0, CANVAS_HEIGHT);
  gradient.addColorStop(0, '#1f2937');
  gradient.addColorStop(1, '#374151');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // Заголовок
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Georgia, serif';
  ctx.textAlign = 'center';
  ctx.fillText('Лацканы с историей', CANVAS_WIDTH / 2, 120);

  // Подзаголовок
  ctx.fillStyle = '#d1d5db';
  ctx.font = '24px Inter, sans-serif';
  ctx.fillText('Секрет на подвороте', CANVAS_WIDTH / 2, 160);

  // Название паттерна
  ctx.fillStyle = '#f97316';
  ctx.font = 'bold 36px Inter, sans-serif';
  ctx.fillText(patternName, CANVAS_WIDTH / 2, 220);

  // Информация о конфигурации
  ctx.fillStyle = '#9ca3af';
  ctx.font = '20px Inter, sans-serif';
  const configText = `${config.model} • ${config.trimColor} • ${config.stitchColor}`;
  ctx.fillText(configText, CANVAS_WIDTH / 2, 260);

  // Декоративные элементы
  drawDecorativeElements(ctx);

  // Логотип/брендинг
  drawBranding(ctx);

  return canvas.toDataURL('image/png');
};

export const downloadPreview = (dataUrl: string, filename: string = 'lapel-preview.png'): void => {
  const link = document.createElement('a');
  link.download = filename;
  link.href = dataUrl;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const drawDecorativeElements = (ctx: CanvasRenderingContext2D): void => {
  // Геометрические фигуры
  ctx.strokeStyle = '#f97316';
  ctx.lineWidth = 2;
  
  // Круги
  ctx.beginPath();
  ctx.arc(100, 100, 30, 0, Math.PI * 2);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(CANVAS_WIDTH - 100, 100, 25, 0, Math.PI * 2);
  ctx.stroke();
  
  // Линии
  ctx.beginPath();
  ctx.moveTo(50, 400);
  ctx.lineTo(200, 400);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(CANVAS_WIDTH - 200, 400);
  ctx.lineTo(CANVAS_WIDTH - 50, 400);
  ctx.stroke();
  
  // Точки
  for (let i = 0; i < 5; i++) {
    ctx.beginPath();
    ctx.arc(150 + i * 40, 500, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#f97316';
    ctx.fill();
  }
};

const drawBranding = (ctx: CanvasRenderingContext2D): void => {
  // Made in EU
  ctx.fillStyle = '#6b7280';
  ctx.font = '16px Inter, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('Made in EU', CANVAS_WIDTH - 50, CANVAS_HEIGHT - 50);
  
  // Год
  ctx.textAlign = 'left';
  ctx.fillText('© 2024', 50, CANVAS_HEIGHT - 50);
};

export const generateThumbnail = async (
  config: LapelConfig,
  size: number = 300
): Promise<string> => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  if (!ctx) {
    throw new Error('Canvas context not available');
  }

  canvas.width = size;
  canvas.height = size;

  // Фон
  ctx.fillStyle = '#f8fafc';
  ctx.fillRect(0, 0, size, size);

  // Заголовок
  ctx.fillStyle = '#1f2937';
  ctx.font = `bold ${size / 8}px Inter, sans-serif`;
  ctx.textAlign = 'center';
  ctx.fillText('Лацкан', size / 2, size / 3);

  // Конфигурация
  ctx.fillStyle = '#6b7280';
  ctx.font = `${size / 12}px Inter, sans-serif`;
  ctx.fillText(`${config.model} • ${config.pattern}`, size / 2, size / 2);

  // Цвета
  ctx.fillStyle = `#${getTrimColorHex(config.trimColor)}`;
  ctx.fillRect(size / 4, size * 0.6, size / 8, size / 8);
  
  ctx.fillStyle = `#${getStitchColorHex(config.stitchColor)}`;
  ctx.fillRect(size * 0.7, size * 0.6, size / 8, size / 8);

  return canvas.toDataURL('image/png');
};

const getTrimColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    ivory: 'fffff0',
    cream: 'f5f5dc',
    beige: 'f5f5dc',
    taupe: '483c32',
    charcoal: '36454f',
    navy: '000080'
  };
  return colorMap[color] || '000000';
};

const getStitchColorHex = (color: string): string => {
  const colorMap: Record<string, string> = {
    red: 'dc2626',
    blue: '2563eb',
    green: '16a34a',
    gold: 'ca8a04',
    purple: '9333ea',
    black: '000000'
  };
  return colorMap[color] || '000000';
};
