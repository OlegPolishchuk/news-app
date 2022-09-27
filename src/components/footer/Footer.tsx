import React from 'react';

import s from './Footer.module.scss';

import { ReturnComponentType } from 'types';

export const Footer = (): ReturnComponentType => {
  return (
    <footer className={s.footer}>
      <span>Copyright 2022</span>
    </footer>
  );
};
