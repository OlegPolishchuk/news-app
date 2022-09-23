import React from 'react';

import s from './Search.module.scss';

import { ReturnComponentType } from 'types';

export const Search = (): ReturnComponentType => {
  return <input className={s.search} type="text" placeholder="search" />;
};
