import axios from 'axios';

export const weatherInstance = axios.create({
  baseURL: 'http://api.weatherstack.com/',
  params: {
    access_key: process.env.REACT_APP_WEATHER_API_KEY,
  },
});
