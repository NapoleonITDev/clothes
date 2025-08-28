import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { 
  getInitialConfig, 
  getConfigFromURL, 
  getShareableLink,
  copyToClipboard 
} from '../urlState';

// Мокаем window.location
const mockLocation = {
  href: 'http://localhost:3000',
  search: '',
  pathname: '/',
  origin: 'http://localhost:3000'
};

Object.defineProperty(window, 'location', {
  value: mockLocation,
  writable: true
});

// Мокаем localStorage
const mockLocalStorage = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
  length: 0,
  key: vi.fn()
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
  writable: true
});

// Мокаем navigator.clipboard
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: vi.fn()
  },
  writable: true
});

describe('urlState', () => {
  beforeEach(() => {
    // Очищаем моки перед каждым тестом
    vi.clearAllMocks();
    mockLocation.search = '';
    mockLocalStorage.getItem.mockReturnValue(null);
  });

  afterEach(() => {
    // Восстанавливаем оригинальные значения
    mockLocation.search = '';
    mockLocalStorage.getItem.mockReturnValue(null);
  });

  describe('getInitialConfig', () => {
    it('should return default config when no URL params or localStorage', () => {
      const config = getInitialConfig();
      
      expect(config).toEqual({
        model: 'notch',
        pattern: 'geo01',
        trimColor: 'ivory',
        stitchColor: 'red',
        gender: 'male'
      });
    });

    it('should return config from URL when available', () => {
      mockLocation.search = '?model=peak&pattern=texture01&trim=navy&stitch=gold&gender=female';
      
      const config = getInitialConfig();
      
      expect(config).toEqual({
        model: 'peak',
        pattern: 'texture01',
        trimColor: 'navy',
        stitchColor: 'gold',
        gender: 'female'
      });
    });

    it('should return config from localStorage when URL is empty', () => {
      const storedConfig = {
        model: 'shawl',
        pattern: 'literary01',
        trimColor: 'taupe',
        stitchColor: 'purple',
        gender: 'male'
      };
      
      mockLocalStorage.getItem.mockReturnValue(JSON.stringify(storedConfig));
      
      const config = getInitialConfig();
      
      expect(config).toEqual(storedConfig);
    });
  });

  describe('getConfigFromURL', () => {
    it('should return null for invalid URL params', () => {
      mockLocation.search = '?invalid=value';
      
      const config = getConfigFromURL();
      
      expect(config).toBeNull();
    });

    it('should return null for missing required params', () => {
      mockLocation.search = '?model=peak&pattern=geo01';
      
      const config = getConfigFromURL();
      
      expect(config).toBeNull();
    });

    it('should return valid config for complete URL params', () => {
      mockLocation.search = '?model=peak&pattern=texture01&trim=navy&stitch=gold&gender=female';
      
      const config = getConfigFromURL();
      
      expect(config).toEqual({
        model: 'peak',
        pattern: 'texture01',
        trimColor: 'navy',
        stitchColor: 'gold',
        gender: 'female'
      });
    });

    it('should validate model values', () => {
      mockLocation.search = '?model=invalid&pattern=geo01&trim=ivory&stitch=red&gender=male';
      
      const config = getConfigFromURL();
      
      expect(config).toBeNull();
    });
  });

  describe('getShareableLink', () => {
    it('should generate correct shareable link', () => {
      const config = {
        model: 'peak' as const,
        pattern: 'texture01',
        trimColor: 'navy' as const,
        stitchColor: 'gold' as const,
        gender: 'female' as const
      };
      
      const link = getShareableLink(config);
      
      expect(link).toContain('model=peak');
      expect(link).toContain('pattern=texture01');
      expect(link).toContain('trim=navy');
      expect(link).toContain('stitch=gold');
      expect(link).toContain('gender=female');
    });
  });

  describe('copyToClipboard', () => {
    it('should use navigator.clipboard when available', async () => {
      const mockWriteText = vi.fn().mockResolvedValue(undefined);
      Object.defineProperty(navigator, 'clipboard', {
        value: { writeText: mockWriteText },
        writable: true
      });
      
      const result = await copyToClipboard('test text');
      
      expect(result).toBe(true);
      expect(mockWriteText).toHaveBeenCalledWith('test text');
    });

    it('should fallback to execCommand when clipboard is not available', async () => {
      // Мокаем execCommand
      const mockExecCommand = vi.fn().mockReturnValue(true);
      Object.defineProperty(document, 'execCommand', {
        value: mockExecCommand,
        writable: true
      });
      
      // Убираем clipboard
      Object.defineProperty(navigator, 'clipboard', {
        value: undefined,
        writable: true
      });
      
      const result = await copyToClipboard('test text');
      
      expect(result).toBe(true);
      expect(mockExecCommand).toHaveBeenCalledWith('copy');
    });
  });
});
