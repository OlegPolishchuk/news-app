import React from 'react';

import s from './Header.module.scss';

import { Nav } from 'components/header/nav/Nav';
import { Search } from 'components/header/search/Search';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <span className={s.logo_item}>F</span>
        <span className={s.logo_item}>a</span>
        <span className={s.logo_item}>k</span>
        <span className={s.logo_item}>e</span>
        <span className={s.logo_text}>BBS</span>
      </div>
      <Nav />
      <Search />
    </header>
  );
};
