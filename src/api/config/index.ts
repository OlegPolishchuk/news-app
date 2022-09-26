import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://api.currentsapi.services/v1/',
  params: {
    apiKey: 'pUcz8WxOfLFkfyhnRaR9VZNVQ2C5_ZJKVYuHgv2CilMpmJ8d',
  },
});
