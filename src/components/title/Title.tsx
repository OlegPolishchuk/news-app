import React from 'react';

import s from './Title.module.scss';

import { ReturnComponentType } from 'types';

type PropsType = {
  title: string;
};

export const Title = ({ title }: PropsType): ReturnComponentType => {
  const titleWords = title.split(' ');
  const firstWord = titleWords[0];
  const restTitle = titleWords.slice(1).join(' ');

  return (
    <h2 className={s.title}>
      <span className={s.title_firstWord_wrapper}>
        <span className={s.title_firstWord}>{firstWord}</span>
        <span className={s.title_underline} />
      </span>
      {restTitle}
    </h2>
  );
};
