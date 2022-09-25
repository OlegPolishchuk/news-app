import React from 'react';

import s from './Header.module.scss';

import { Logo } from 'components/header/logo/Logo';
import { Nav } from 'components/header/nav/Nav';
import { Search } from 'components/header/search/Search';
import { TodayDate } from 'components/widgets/TodayDate/Date';
import { Weather } from 'components/widgets/weather/Weather';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
  return (
    <header className={s.header}>
      <div className={s.header_mainHeader}>
        <Logo />
        <Nav />
        <Search />
      </div>
      <div className={s.header_widgets}>
        <TodayDate />
        <Weather />
        <div className={s.header_widget_exchangeCourse} />
      </div>
    </header>
  );
};
