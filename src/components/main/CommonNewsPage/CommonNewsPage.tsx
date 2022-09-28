import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import s from './CommonNewsPage.module.scss';

import { SingleNews } from 'components/main/news/SingleNews';
import { Title } from 'components/title/Title';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNewsByCategory } from 'store/reducers/actionCreators';
import { selectCurrentNews } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CommonNewsPage = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  const categoryName = currentPath.replace('/', '');

  const news = useAppSelector(selectCurrentNews);

  useEffect(() => {
    dispatch(fetchNewsByCategory({ category: categoryName }));
  }, [currentPath]);

  return (
    <section>
      <Title title={categoryName} />
      <div className={s.newsContainer}>
        {news.map(news => (
          <SingleNews key={news.id} article={news} type="small" />
        ))}
      </div>
    </section>
  );
};
