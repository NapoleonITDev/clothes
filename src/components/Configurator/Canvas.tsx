import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LapelConfig } from '../../types';
import { getPatternById } from '../../data/patterns';

interface CanvasProps {
  config: LapelConfig;
}

const Canvas: React.FC<CanvasProps> = ({ config }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [patternImage, setPatternImage] = useState<HTMLImageElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Загружаем изображение паттерна
  useEffect(() => {
    const pattern = getPatternById(config.pattern);
    if (!pattern) return;

    const img = new Image();
    img.onload = () => {
      setPatternImage(img);
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
    };
    img.src = pattern.file;
  }, [config.pattern]);

  // Отрисовываем лацкан при изменении конфигурации
  useEffect(() => {
    if (!canvasRef.current || !patternImage) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Очищаем canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем лацкан
    drawLapel(ctx, config, patternImage);
  }, [config, patternImage]);

  const drawLapel = (
    ctx: CanvasRenderingContext2D, 
    config: LapelConfig, 
    patternImg: HTMLImageElement
  ) => {
    const canvas = ctx.canvas;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Фон
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Рисуем жакет (упрощённая схема)
    drawJacket(ctx, centerX, centerY, config.gender);

    // Рисуем лацкан с паттерном
    drawLapelWithPattern(ctx, centerX, centerY, config, patternImg);

    // Рисуем детали
    drawDetails(ctx, centerX, centerY, config);
  };

  const drawJacket = (
    ctx: CanvasRenderingContext2D, 
    centerX: number, 
    centerY: number, 
    gender: 'male' | 'female'
  ) => {
    ctx.strokeStyle = '#374151';
    ctx.lineWidth = 2;
    ctx.fillStyle = '#ffffff';

    // Основная форма жакета
    ctx.beginPath();
    if (gender === 'male') {
      // Мужской жакет - более угловатый
      ctx.moveTo(centerX - 80, centerY - 120);
      ctx.lineTo(centerX + 80, centerY - 120);
      ctx.lineTo(centerX + 80, centerY + 80);
      ctx.lineTo(centerX - 80, centerY + 80);
      ctx.closePath();
    } else {
      // Женский жакет - более плавный
      ctx.moveTo(centerX - 70, centerY - 110);
      ctx.quadraticCurveTo(centerX, centerY - 130, centerX + 70, centerY - 110);
      ctx.lineTo(centerX + 70, centerY + 70);
      ctx.quadraticCurveTo(centerX, centerY + 90, centerX - 70, centerY + 70);
      ctx.closePath();
    }
    
    ctx.fill();
    ctx.stroke();
  };

  const drawLapelWithPattern = (
    ctx: CanvasRenderingContext2D, 
    centerX: number, 
    centerY: number, 
    config: LapelConfig, 
    patternImg: HTMLImageElement
  ) => {
    // Определяем форму лацкана в зависимости от модели
    let lapelPath: Path2D;
    
    switch (config.model) {
      case 'notch':
        lapelPath = createNotchLapel(centerX, centerY);
        break;
      case 'peak':
        lapelPath = createPeakLapel(centerX, centerY);
        break;
      case 'shawl':
        lapelPath = createShawlLapel(centerX, centerY);
        break;
      default:
        lapelPath = createNotchLapel(centerX, centerY);
    }

    // Создаём паттерн
    const pattern = ctx.createPattern(patternImg, 'repeat');
    if (pattern) {
      ctx.fillStyle = pattern;
      ctx.fill(lapelPath);
    }

    // Обводка лацкана
    ctx.strokeStyle = getTrimColor(config.trimColor);
    ctx.lineWidth = 3;
    ctx.stroke(lapelPath);
  };

  const createNotchLapel = (centerX: number, centerY: number): Path2D => {
    const path = new Path2D();
    path.moveTo(centerX - 60, centerY - 100);
    path.lineTo(centerX - 40, centerY - 80);
    path.lineTo(centerX - 20, centerY - 60);
    path.lineTo(centerX + 20, centerY - 60);
    path.lineTo(centerX + 40, centerY - 80);
    path.lineTo(centerX + 60, centerY - 100);
    path.lineTo(centerX + 60, centerY - 40);
    path.lineTo(centerX - 60, centerY - 40);
    path.closePath();
    return path;
  };

  const createPeakLapel = (centerX: number, centerY: number): Path2D => {
    const path = new Path2D();
    path.moveTo(centerX - 60, centerY - 100);
    path.lineTo(centerX - 30, centerY - 120);
    path.lineTo(centerX + 30, centerY - 120);
    path.lineTo(centerX + 60, centerY - 100);
    path.lineTo(centerX + 60, centerY - 40);
    path.lineTo(centerX - 60, centerY - 40);
    path.closePath();
    return path;
  };

  const createShawlLapel = (centerX: number, centerY: number): Path2D => {
    const path = new Path2D();
    path.moveTo(centerX - 60, centerY - 100);
    path.quadraticCurveTo(centerX, centerY - 130, centerX + 60, centerY - 100);
    path.lineTo(centerX + 60, centerY - 40);
    path.quadraticCurveTo(centerX, centerY - 70, centerX - 60, centerY - 40);
    path.closePath();
    return path;
  };

  const drawDetails = (
    ctx: CanvasRenderingContext2D, 
    centerX: number, 
    centerY: number, 
    config: LapelConfig
  ) => {
    // Петля бутоньерки
    ctx.strokeStyle = getStitchColor(config.stitchColor);
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(centerX, centerY - 20, 8, 0, Math.PI * 2);
    ctx.stroke();

    // Кнопки
    ctx.fillStyle = '#374151';
    ctx.beginPath();
    ctx.arc(centerX, centerY + 20, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(centerX, centerY + 40, 4, 0, Math.PI * 2);
    ctx.fill();
  };

  const getTrimColor = (color: string): string => {
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

  const getStitchColor = (color: string): string => {
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          {config.gender === 'male' ? 'Мужской' : 'Женский'} жакет - {config.model}
        </h3>
      </div>
      
      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent-600"></div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={400}
          height={300}
          className="w-full h-auto"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
      
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>Паттерн: {getPatternById(config.pattern)?.name}</p>
        <p>Кант: {config.trimColor}, Нитка: {config.stitchColor}</p>
      </div>
    </div>
  );
};

export default Canvas;
