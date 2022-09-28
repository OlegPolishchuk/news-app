import React, { useLayoutEffect } from 'react';

import { SingleNews } from 'components/main/news/SingleNews';
import { NewsBox } from 'components/main/newsBox/NewsBox';
import { Title } from 'components/title/Title';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNews } from 'store/reducers/actionCreators';
import { selectMainNews, selectRestNews, selectSecondNews } from 'store/selectors';
import { ReturnComponentType } from 'types';
import { newsSlicer } from 'utils/newsSlicer';

export const HotNews = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const mainNews = useAppSelector(selectMainNews);
  const secondNews = useAppSelector(selectSecondNews);
  const restNews = useAppSelector(selectRestNews);

  const articlesForNewsBox = newsSlicer(restNews);

  useLayoutEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <section>
      <Title title="Hot news" />
      <SingleNews article={mainNews} type="large" />
      <SingleNews article={secondNews} revers type="large" />
      {articlesForNewsBox.map((article, i) => (
        <NewsBox key={i.toString()} news={article} />
      ))}
    </section>
  );
};
