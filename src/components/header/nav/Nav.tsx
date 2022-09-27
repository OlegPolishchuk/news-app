import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';

import { ReturnComponentType } from 'types';

export const Nav = (): ReturnComponentType => {
  return (
    <nav>
      <ul className={s.nav}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>General</li>
        </NavLink>
        <NavLink to="/sports" className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>Sports</li>
        </NavLink>
        <NavLink to="/business" className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>Business</li>
        </NavLink>
        <NavLink to="/politics" className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>Politics</li>
        </NavLink>
        <NavLink to="/health" className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>Health</li>
        </NavLink>
        <NavLink to="/science" className={({ isActive }) => (isActive ? s.active : '')}>
          <li className={s.nav_item}>Science</li>
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => (isActive ? s.active : '')}
        >
          <li className={s.nav_item}>Technology</li>
        </NavLink>
      </ul>
    </nav>
  );
};
