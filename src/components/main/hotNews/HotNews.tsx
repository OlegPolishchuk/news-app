import React from 'react';

import { News } from 'components/main/news/News';
import { NewsBox } from 'components/main/newsBox/NewsBox';
import { Title } from 'components/title/Title';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { selectMainNews, selectRestNews, selectSecondNews } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { newsSlicer } from 'utils/newsSlicer';

export const HotNews = (): ReturnComponentType => {
  const mainNews = useAppSelector(selectMainNews);
  const secondNews = useAppSelector(selectSecondNews);
  const restNews = useAppSelector(selectRestNews);

  const articlesForNewsBox = newsSlicer(restNews);

  return (
    <section>
      <Title title="Hot news" />
      <News article={mainNews} type="large" />
      <News article={secondNews} revers type="large" />
      {articlesForNewsBox.map((article, i) => (
        <NewsBox key={i} articles={article} />
      ))}
    </section>
  );
};
