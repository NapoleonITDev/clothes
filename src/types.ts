export type Language = 'ru' | 'en';

export type LapelModel = 'notch' | 'peak' | 'shawl';

export type TrimColor = 'ivory' | 'cream' | 'beige' | 'taupe' | 'charcoal' | 'navy';

export type StitchColor = 'red' | 'blue' | 'green' | 'gold' | 'purple' | 'black';

export type Pattern = {
  id: string;
  name: string;
  nameEn: string;
  preview: string;
  file: string;
  tags: string[];
  tagsEn: string[];
  category: 'geometric' | 'texture' | 'literary' | 'abstract';
};

export type LapelConfig = {
  model: LapelModel;
  pattern: string;
  trimColor: TrimColor;
  stitchColor: StitchColor;
  gender: 'male' | 'female';
};

export type ProductVariant = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  descriptionEn: string;
  price: number;
  features: string[];
  featuresEn: string[];
  popular?: boolean;
};

export type Review = {
  id: string;
  author: string;
  rating: number;
  text: string;
  textEn: string;
  date: string;
  verified: boolean;
};

export type FAQItem = {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
  category: 'general' | 'shipping' | 'returns' | 'care';
};

export type ShareData = {
  url: string;
  title: string;
  description: string;
  image?: string;
};

export type WeeklyDrop = {
  endDate: string;
  patterns: string[];
  discount: number;
};
