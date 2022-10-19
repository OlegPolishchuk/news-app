import React, { useEffect, useState } from 'react';

import s from './Header.module.scss';

import { Logo } from 'components/header/logo/Logo';
import { Nav } from 'components/header/nav/Nav';
import { Search } from 'components/header/search/Search';
import { ToggleBtn } from 'components/ToggleBtn/ToggleBtn';
import { ExchangeCourse } from 'components/widgets/exchangeCourse/ExchangeCourse';
import { TodayDate } from 'components/widgets/TodayDate/Date';
import { Weather } from 'components/widgets/weather/Weather';
import { ReturnComponentType } from 'types';
import { getWindowSize } from 'utils';

const LargeScreenSize = 992;

export const Header = React.memo((): ReturnComponentType => {
  console.log(`header rendered`);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isToggleMenuBtnShow, setIsToggleMenuBtnShow] = useState(false);

  const handleToggleMenuBtnClick = (): void => {
    setIsToggleMenuBtnShow(!isToggleMenuBtnShow);
  };

  const handleNavItemClick = (): void => {
    if (windowSize.innerHeight <= LargeScreenSize) {
      setIsToggleMenuBtnShow(!isToggleMenuBtnShow);
    }
  };

  useEffect(() => {
    const handleWindowResize = (): void => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleWindowResize);

    return window.removeEventListener('resize', handleWindowResize);
  }, []);

  return (
    <header className={s.header}>
      <div className={s.header_mainHeader}>
        <Logo />
        <Nav
          isMenuShowOnSmallScreen={isToggleMenuBtnShow}
          menuItemClickCallback={handleNavItemClick}
        />
        <Search />
        <ToggleBtn wrapped={isToggleMenuBtnShow} toggle={handleToggleMenuBtnClick} />
      </div>
      <div className={s.header_widgets}>
        <TodayDate />
        <Weather />
        <ExchangeCourse />
      </div>
    </header>
  );
});
