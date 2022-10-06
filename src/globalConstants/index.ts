import { Category } from 'types';

export const LIMIT_PAGE = 20;
export const MAX_PAGE_NUMBER = 180;
export const START_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 30;

export const DEFAULT_PAGINATION_OFFSET = 0;
export const DEFAULT_LANGUAGE = 'English';
export const DEFAULT_LANGUAGE_CODE = 'en';
export const DEFAULT_CATEGORIES = 'general';
export const DEFAULT_REGION = 'All';

export const CATEGORIES: Category[] = [
  'general',
  'sports',
  'business',
  'entertainment',
  'health',
  'science',
  'technology',
  'regional',
  'lifestyle',
  'programming',
  'world',
  'finance',
  'academia',
  'politics',
  'opinion',
  'food',
  'game',
];

export const REGIONS = [
  'Australia',
  'Canada',
  'China',
  'Finland',
  'South Korea',
  'Taiwan',
  'Thailand',
  'Vietnam',
  'United State',
  'German',
  'Zimbabwe',
  'Italy',
  'All',
];

export const REGIONS_CODE = {
  Australia: 'AS',
  Canada: 'CA',
  China: 'CN',
  Finland: 'FI',
  'South Korea': 'SK',
  Taiwan: 'TW',
  Thailand: 'TH',
  Vietnam: 'VIET',
  'United State': 'US',
  German: 'GB',
  Zimbabwe: 'ZW',
  Italy: 'IT',
};

export const LANGUAGES = [
  'Arabic',
  'Chinese',
  'Dutch',
  'English',
  'Finnish',
  'French',
  'German',
  'Hindi',
  'Italian',
  'Japanese',
  'Korean',
  'Malay',
  'Portuguese',
  'Russian',
  'Spanish',
];

export const LANGUAGES_CODE = {
  Arabic: 'ar',
  Chinese: 'zh',
  Dutch: 'nl',
  English: 'en',
  Finnish: 'fi',
  French: 'fr',
  German: 'de',
  Hindi: 'hi',
  Italian: 'it',
  Japanese: 'ja',
  Korean: 'ko',
  Malay: 'msa',
  Portuguese: 'pt',
  Russian: 'ru',
  Spanish: 'es',
};
