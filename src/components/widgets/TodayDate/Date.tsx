import React from 'react';

import s from './Date.module.scss';

import { ReturnComponentType } from 'types';

const MONTHS = [
  'January ',
  'February ',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const TodayDate = (): ReturnComponentType => {
  const date = new Date();
  const year = date.getFullYear();
  const month = MONTHS[date.getMonth()];
  const dateOfDay = date.getDate();
  const dayOfTheWeek = DAYS[date.getDay()];

  return (
    <div className={s.dateWidget}>
      <time className={s.dateWidget_date}>
        {dayOfTheWeek}, {month} {dateOfDay}, {year}
      </time>
      <p className={s.dateWidget_title}>Today &apos;s paper</p>
    </div>
  );
};
