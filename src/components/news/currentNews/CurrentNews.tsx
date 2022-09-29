import React from 'react';

import { GoBackButton } from 'components/goBackButton/GoBackButton';
import { Title } from 'components/title/Title';
import { ReturnComponentType } from 'types';

export const CurrentNews = (): ReturnComponentType => {
  return (
    <div>
      <GoBackButton />
      <Title title="Current news" />
    </div>
  );
};
