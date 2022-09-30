import React from 'react';

import { Route, Routes, Navigate } from 'react-router-dom';

import { CommonNewsPage } from 'components/news/commonNewsPage/CommonNewsPage';
import { CurrentNews } from 'components/news/currentNews/CurrentNews';
import { HotNews } from 'components/news/hotNews/HotNews';
import { UserApiWarning } from 'components/userApiWarning/UserApiWarning';
import { Path } from 'enums';
import { ReturnComponentType } from 'types';

export const Pages = (): ReturnComponentType => {
  return (
    <Routes>
      <Route path={Path.Sports} element={<CommonNewsPage />} />
      <Route path={Path.Business} element={<CommonNewsPage />} />
      <Route path={Path.Politics} element={<CommonNewsPage />} />
      <Route path={Path.Health} element={<CommonNewsPage />} />
      <Route path={Path.Science} element={<CommonNewsPage />} />
      <Route path={Path.Technology} element={<CommonNewsPage />} />
      <Route path={Path.MainPage} element={<HotNews />} />
      <Route path={Path.NotFound} element={<h2>Not found</h2>} />
      <Route path={`${Path.News}/:id`} element={<CurrentNews />} />
      <Route path={`${Path.APIWarning}/:id`} element={<UserApiWarning />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
