import React, { useEffect } from 'react';

import s from './SearchNews.module.scss';

import { SingleNews } from 'components/news/singleNews/SingleNews';
import { Title } from 'components/title/Title';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchNewsWithParams } from 'store/reducers/actionCreators';
import { selectCurrentNews, selectSearchParamsKeywords } from 'store/selectors';
import { RequestParams, ReturnComponentType } from 'types';
import { findSearchingWord } from 'utils/findSearchingWord';

export const SearchNews = React.memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const keywords = useAppSelector(selectSearchParamsKeywords);
  const news = useAppSelector(selectCurrentNews);

  const processedKeywords = keywords.replaceAll(' ', '%');

  const highlightedNews = findSearchingWord(news, processedKeywords, 'highlight');

  useEffect(() => {
    dispatch(fetchNewsWithParams({ keywords: processedKeywords } as RequestParams));
  }, [keywords]);

  return (
    <>
      <Title title="Searching news" />
      <div className={s.searchNews}>
        {highlightedNews.map(news => (
          <SingleNews article={news} type="small" key={news.id} isSearching />
        ))}
      </div>
    </>
  );
});
