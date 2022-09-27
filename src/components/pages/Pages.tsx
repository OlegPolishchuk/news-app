import React from 'react';

import { Routes, Route } from 'react-router-dom';

import { Business } from 'components/main/business/Business';
import { Health } from 'components/main/health/Health';
import { HotNews } from 'components/main/hotNews/HotNews';
import { Politics } from 'components/main/politics/Politics';
import { Science } from 'components/main/science/Science';
import { Sports } from 'components/main/sports/Sports';
import { Technology } from 'components/main/technology/Technology';
import { ReturnComponentType } from 'types';

export const Pages = (): ReturnComponentType => {
  return (
    <Routes>
      <Route path="sports" element={<Sports />} />
      <Route path="business" element={<Business />} />
      <Route path="politics" element={<Politics />} />
      <Route path="health" element={<Health />} />
      <Route path="science" element={<Science />} />
      <Route path="technology" element={<Technology />} />
      <Route path="/" element={<HotNews />} />
      <Route path="404" element={<h2>Not found</h2>} />
    </Routes>
  );
};
