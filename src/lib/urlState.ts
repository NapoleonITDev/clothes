import { LapelConfig } from '../types';

const URL_PARAMS = {
  MODEL: 'model',
  PATTERN: 'pattern',
  TRIM: 'trim',
  STITCH: 'stitch',
  GENDER: 'gender'
} as const;

const STORAGE_KEY = 'lapelConfig';

export const getInitialConfig = (): LapelConfig => {
  // Сначала пытаемся получить из URL
  const urlConfig = getConfigFromURL();
  if (urlConfig) {
    saveConfigToStorage(urlConfig);
    return urlConfig;
  }

  // Затем из localStorage
  const storageConfig = getConfigFromStorage();
  if (storageConfig) {
    return storageConfig;
  }

  // Дефолтная конфигурация
  return {
    model: 'notch',
    pattern: 'geo01',
    trimColor: 'ivory',
    stitchColor: 'red',
    gender: 'male'
  };
};

export const getConfigFromURL = (): LapelConfig | null => {
  const urlParams = new URLSearchParams(window.location.search);
  
  const model = urlParams.get(URL_PARAMS.MODEL) as LapelConfig['model'];
  const pattern = urlParams.get(URL_PARAMS.PATTERN);
  const trimColor = urlParams.get(URL_PARAMS.TRIM) as LapelConfig['trimColor'];
  const stitchColor = urlParams.get(URL_PARAMS.STITCH) as LapelConfig['stitchColor'];
  const gender = urlParams.get(URL_PARAMS.GENDER) as LapelConfig['gender'];

  if (!model || !pattern || !trimColor || !stitchColor || !gender) {
    return null;
  }

  // Валидация значений
  const validModels: LapelConfig['model'][] = ['notch', 'peak', 'shawl'];
  const validTrimColors: LapelConfig['trimColor'][] = ['ivory', 'cream', 'beige', 'taupe', 'charcoal', 'navy'];
  const validStitchColors: LapelConfig['stitchColor'][] = ['red', 'blue', 'green', 'gold', 'purple', 'black'];
  const validGenders: LapelConfig['gender'][] = ['male', 'female'];

  if (!validModels.includes(model) || 
      !validTrimColors.includes(trimColor) || 
      !validStitchColors.includes(stitchColor) || 
      !validGenders.includes(gender)) {
    return null;
  }

  return { model, pattern, trimColor, stitchColor, gender };
};

export const getConfigFromStorage = (): LapelConfig | null => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    
    const config = JSON.parse(stored) as LapelConfig;
    
    // Валидация сохранённой конфигурации
    if (isValidConfig(config)) {
      return config;
    }
    
    return null;
  } catch {
    return null;
  }
};

export const saveConfigToStorage = (config: LapelConfig): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // Игнорируем ошибки localStorage
  }
};

export const updateURL = (config: LapelConfig): void => {
  const url = new URL(window.location.href);
  
  url.searchParams.set(URL_PARAMS.MODEL, config.model);
  url.searchParams.set(URL_PARAMS.PATTERN, config.pattern);
  url.searchParams.set(URL_PARAMS.TRIM, config.trimColor);
  url.searchParams.set(URL_PARAMS.STITCH, config.stitchColor);
  url.searchParams.set(URL_PARAMS.GENDER, config.gender);

  // Обновляем URL без перезагрузки страницы
  window.history.replaceState({}, '', url.toString());
};

export const getShareableLink = (config: LapelConfig): string => {
  const url = new URL(window.location.origin + window.location.pathname);
  
  url.searchParams.set(URL_PARAMS.MODEL, config.model);
  url.searchParams.set(URL_PARAMS.PATTERN, config.pattern);
  url.searchParams.set(URL_PARAMS.TRIM, config.trimColor);
  url.searchParams.set(URL_PARAMS.STITCH, config.stitchColor);
  url.searchParams.set(URL_PARAMS.GENDER, config.gender);

  return url.toString();
};

export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    } else {
      // Fallback для небезопасного контекста
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const result = document.execCommand('copy');
      document.body.removeChild(textArea);
      return result;
    }
  } catch {
    return false;
  }
};

const isValidConfig = (config: any): config is LapelConfig => {
  return (
    config &&
    typeof config === 'object' &&
    typeof config.model === 'string' &&
    typeof config.pattern === 'string' &&
    typeof config.trimColor === 'string' &&
    typeof config.stitchColor === 'string' &&
    typeof config.gender === 'string'
  );
};
