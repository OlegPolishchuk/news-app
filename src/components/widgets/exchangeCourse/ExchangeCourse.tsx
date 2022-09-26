import React from 'react';

import s from './ExchangeCourse.module.scss';

import { ReturnComponentType } from 'types';

export const ExchangeCourse = (): ReturnComponentType => {
  return (
    <div className={s.exchangeCourse}>
      <p>
        euro: <span className={s.exchangeCourse_grown}>+2.1235</span>
      </p>
      <p>
        dollar: <span className={s.exchangeCourse_drop}>-1.4567</span>
      </p>
    </div>
  );
};
