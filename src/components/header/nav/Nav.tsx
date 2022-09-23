import React from 'react';

import s from './Nav.module.scss';

import { ReturnComponentType } from 'types';

export const Nav = (): ReturnComponentType => {
  return (
    <nav>
      <ul className={s.nav}>
        <li className={s.nav_item}>General</li>
        <li className={s.nav_item}>Sports</li>
        <li className={s.nav_item}>Business</li>
        <li className={s.nav_item}>Entertainment</li>
        <li className={s.nav_item}>Health</li>
        <li className={s.nav_item}>Science</li>
        <li className={s.nav_item}>Technology</li>
      </ul>
    </nav>
  );
};
