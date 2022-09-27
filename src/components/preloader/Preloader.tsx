import React from 'react';

import s from './Preloader.module.scss';

import { ReturnComponentType } from 'types';

export const Preloader = (): ReturnComponentType => {
  return (
    <div className={s.preloader_wrapper}>
      <div className={s.lds_dual_ring} />
    </div>
  );
};
