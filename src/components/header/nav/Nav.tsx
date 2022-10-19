import React from 'react';

import { NavLink } from 'react-router-dom';

import s from './Nav.module.scss';

import { Path } from 'enums';
import { ReturnComponentType } from 'types';

interface Props {
  isMenuShowOnSmallScreen?: boolean;
}

export const Nav = ({ isMenuShowOnSmallScreen }: Props): ReturnComponentType => {
  const showMenuClassName = isMenuShowOnSmallScreen ? s.nav_wrapper : s.nav_wrapper_hide;

  return (
    <nav className={`${s.nav_wrapper} ${showMenuClassName}`}>
      <ul className={s.nav}>
        <li className={s.nav_item}>
          <NavLink
            to={Path.MainPage}
            end
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            General
          </NavLink>
        </li>

        <li className={s.nav_item}>
          <NavLink
            to={Path.Sports}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Sports
          </NavLink>
        </li>

        <li className={s.nav_item}>
          <NavLink
            to={Path.Business}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Business
          </NavLink>
        </li>

        <li className={s.nav_item}>
          <NavLink
            to={Path.Politics}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Politics
          </NavLink>
        </li>

        <li className={s.nav_item}>
          {' '}
          <NavLink
            to={Path.Health}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Health{' '}
          </NavLink>
        </li>

        <li className={s.nav_item}>
          {' '}
          <NavLink
            to={Path.Science}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Science{' '}
          </NavLink>
        </li>

        <li className={s.nav_item}>
          <NavLink
            to={Path.Technology}
            className={({ isActive }) => (isActive ? s.active : '')}
          >
            Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
