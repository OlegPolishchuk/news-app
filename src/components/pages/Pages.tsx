import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Business } from 'components/main/business/Business';
import { Health } from 'components/main/health/Health';
import { HotNews } from 'components/main/hotNews/HotNews';
import { Politics } from 'components/main/politics/Politics';
import { Science } from 'components/main/science/Science';
import { Sports } from 'components/main/sports/Sports';
import { Technology } from 'components/main/technology/Technology';
import { Path } from 'enums';
import { ReturnComponentType } from 'types';

export const Pages = (): ReturnComponentType => {
  return (
    <Routes>
      <Route path={Path.Sports} element={<Sports />} />
      <Route path={Path.Business} element={<Business />} />
      <Route path={Path.Politics} element={<Politics />} />
      <Route path={Path.Health} element={<Health />} />
      <Route path={Path.Science} element={<Science />} />
      <Route path={Path.Technology} element={<Technology />} />
      <Route path={Path.MainPage} element={<HotNews />} />
      <Route path={Path.NotFound} element={<h2>Not found</h2>} />
    </Routes>
  );
};
