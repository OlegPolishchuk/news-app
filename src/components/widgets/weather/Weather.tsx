import React, { useEffect, useState } from 'react';

import s from './Weather.module.scss';

import { WeatherAPI } from 'api/weather';
import weather_icon from 'assets/icons/sun.png';
import { ReturnComponentType } from 'types';
import { WeatherResponse } from 'types/responses/weatherResponse';

export const Weather = (): ReturnComponentType => {
  const [data, setData] = useState<WeatherResponse>({
    location: {},
    current: {
      temperature: 0,
      weather_icons: [''],
      weather_descriptions: [''],
    },
  } as WeatherResponse);

  const imgSrc = data.current.weather_icons[0].length
    ? data.current.weather_icons[0]
    : weather_icon;

  useEffect(() => {
    (async () => {
      try {
        const res = await WeatherAPI.getWeather('Minsk');

        setData(res);
      } catch (e) {
        console.warn(e);
      }
    })();
  }, []);

  return (
    <div className={s.weatherWidget}>
      <h3 className={s.weatherWidget_title}>
        <img src={imgSrc} alt={data.current.weather_descriptions[0]} />
        {data.current.temperature}
        <span className={s.weatherWidget_c}>&#8451;</span>
      </h3>
    </div>
  );
};
