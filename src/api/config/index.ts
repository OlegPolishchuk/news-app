import axios from 'axios';

import { DEFAULT_LANGUAGE } from 'globalConstants';

export const instance = axios.create({
  baseURL: 'https://api.currentsapi.services/v1/',
  params: {
    apiKey: 'pUcz8WxOfLFkfyhnRaR9VZNVQ2C5_ZJKVYuHgv2CilMpmJ8d',
    language: DEFAULT_LANGUAGE,
  },
});
