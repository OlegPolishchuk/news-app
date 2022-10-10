import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';

export const Nav = (): ReturnComponentType => {
  return (
    <nav className={s.nav_wrapper}>
      <ul className={s.nav}>
        <NavLink
          to={Path.MainPage}
          end
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>General</li>
        </NavLink>
        <NavLink
          to={Path.Sports}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Sports</li>
        </NavLink>
        <NavLink
          to={Path.Business}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Business</li>
        </NavLink>
        <NavLink
          to={Path.Politics}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Politics</li>
        </NavLink>
        <NavLink
          to={Path.Health}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Health</li>
        </NavLink>
        <NavLink
          to={Path.Science}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Science</li>
        </NavLink>
        <NavLink
          to={Path.Technology}
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Technology</li>
        </NavLink>
      </ul>
    </nav>
  );
};
