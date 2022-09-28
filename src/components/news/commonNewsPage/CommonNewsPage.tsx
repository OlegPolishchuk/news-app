import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import s from 'components/news/commonNewsPage/CommonNewsPage.module.scss';
import { SingleNews } from 'components/news/singleNews/SingleNews';
import { Pagination } from 'components/pagination/Pagination';
import { Title } from 'components/title/Title';
import { MAX_PAGE_COUNT } from 'globalConstants';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNewsByCategory } from 'store/reducers/actionCreators';
import { selectCurrentNews, selectRequestParams } from 'store/selectors';
import { ReturnComponentType } from 'types';

export const CommonNewsPage = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  const categoryName = currentPath.replace('/', '');

  const news = useAppSelector(selectCurrentNews);
  const requestParams = useAppSelector(selectRequestParams);

  const pageCount = MAX_PAGE_COUNT;

  const handlePageClick = (pageNumber: number): void => {
    const params = { ...requestParams, page_number: pageNumber };

    console.log(pageNumber);
    console.log(params);
    // dispatch(fetchNewsByCategory(params));
  };

  useEffect(() => {
    const params = { ...requestParams, category: categoryName };

    dispatch(fetchNewsByCategory(params));
  }, [currentPath]);

  return (
    <section>
      <Title title={categoryName} />
      <Pagination pageCount={pageCount} onClickCallback={handlePageClick} />
      <div className={s.newsContainer}>
        {news.map(news => (
          <SingleNews key={news.id} article={news} type="small" />
        ))}
      </div>
      <Pagination pageCount={pageCount} onClickCallback={handlePageClick} />
    </section>
  );
};
