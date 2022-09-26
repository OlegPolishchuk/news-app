import React from 'react';

import weatherUrl from '../../../assets/icons/sun.png';

import s from './Weather.module.scss';

import { ReturnComponentType } from 'types';

export const Weather = (): ReturnComponentType => {
  const bgStyle = { backgroundImage: `url(${weatherUrl})` };

  return (
    <div className={s.weatherWidget} style={bgStyle}>
      <h3 className={s.weatherWidget_title}>
        25<span className={s.weatherWidget_c}>&#8451;</span>
      </h3>
    </div>
  );
};
