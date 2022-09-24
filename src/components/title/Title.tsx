import React from 'react';

import s from './Title.module.scss';

import { ReturnComponentType } from 'types';

type PropsType = {
  title: string;
};

export const Title = ({ title }: PropsType): ReturnComponentType => {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restTitle = titleWords.slice(1);

  return (
    <div className={s.title}>
      <h2 className={s.title_header}>
        <span>
          {firstWord}
          <span className={s.underline} />
        </span>
        {restTitle}
      </h2>
    </div>
  );
};
