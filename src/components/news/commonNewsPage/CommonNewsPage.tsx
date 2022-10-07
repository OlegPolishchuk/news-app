import React, { useEffect, useState } from 'react';

import { useLocation, useSearchParams } from 'react-router-dom';

import s from 'components/news/commonNewsPage/CommonNewsPage.module.scss';
import { SingleNews } from 'components/news/singleNews/SingleNews';
import { Pagination } from 'components/pagination/Pagination';
import { Title } from 'components/title/Title';
import { MAX_PAGE_NUMBER } from 'globalConstants';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNewsWithParams } from 'store/reducers/actionCreators';
import { setRequestParamsPageNumber } from 'store/reducers/NewsSlice';
import { selectCurrentNews, selectRequestParams } from 'store/selectors';
import { RequestParams, ReturnComponentType } from 'types';

export const CommonNewsPage = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  const setSearchParams = useSearchParams()[1];

  const news = useAppSelector(selectCurrentNews);
  const { page_number } = useAppSelector(selectRequestParams);
  const { category } = useAppSelector(selectRequestParams);
  const { keywords } = useAppSelector(selectRequestParams);

  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = MAX_PAGE_NUMBER;
  const categoryName = currentPath.replace('/', '');

  const handlePageClick = (pageNumber: number): void => {
    dispatch(setRequestParamsPageNumber(pageNumber));

    setCurrentPage(pageNumber - 1);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const params = {
      page_number,
      keywords,
      category: categoryName,
    } as RequestParams;

    setSearchParams({ page_number: `${page_number}` });
    dispatch(fetchNewsWithParams(params));
  }, [currentPath, page_number, category]);

  return (
    <section>
      <Title title={categoryName} />
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onClickCallback={handlePageClick}
      />
      <div className={s.newsContainer}>
        {news.map(news => (
          <SingleNews key={news.id} article={news} type="small" />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        onClickCallback={handlePageClick}
      />
    </section>
  );
};
