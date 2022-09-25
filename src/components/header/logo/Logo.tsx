import React from 'react';

import s from './Logo.module.scss';

import { ReturnComponentType } from 'types';

export const Logo = (): ReturnComponentType => {
  return (
    <h1 className={s.logo}>
      <span className={s.logo_item}>F</span>
      <span className={s.logo_item}>a</span>
      <span className={s.logo_item}>k</span>
      <span className={s.logo_item}>e</span>
      <span className={s.logo_text}>
        <span className={s.logo_text_header}>BBS</span>
        <span className={s.logo_text_underline} />
      </span>
    </h1>
  );
};
