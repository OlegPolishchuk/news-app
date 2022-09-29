import React from 'react';

import { useParams } from 'react-router-dom';

import { GoBackButton } from 'components/goBackButton/GoBackButton';
import { Title } from 'components/title/Title';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { selectNewsById } from 'store/selectors/currentNews/selectNewsById';
import { ReturnComponentType } from 'types';

export const CurrentNews = (): ReturnComponentType => {
  const { id } = useParams();

  const news = useAppSelector(selectNewsById(id as string));

  return (
    <div>
      <GoBackButton />
      <Title title="Current news" />

      <h2>{news.title}</h2>
    </div>
  );
};
