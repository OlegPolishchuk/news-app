import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://api.mediastack.com/v1/',
  params: {
    access_key: 'f454bbeafad79cf4e78719a650d8c4e6',
  },
});
