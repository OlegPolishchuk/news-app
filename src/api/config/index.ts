import axios from 'axios';

import { DEFAULT_LANGUAGE_CODE } from 'globalConstants';

export const instance = axios.create({
  baseURL: 'https://api.currentsapi.services/v1/',
  params: {
    apiKey: process.env.REACT_APP_API_KEY,
    language: DEFAULT_LANGUAGE_CODE,
  },
});
