import { weatherInstance } from 'api/weather/config';
import { WeatherResponse } from 'types/responses/weatherResponse';

export class WeatherAPI {
  static getWeather(city: string): Promise<WeatherResponse> {
    return weatherInstance
      .get(`https://api.weatherstack.com/current?`, {
        params: {
          query: city,
        },
      })
      .then(res => res.data);
  }
}
