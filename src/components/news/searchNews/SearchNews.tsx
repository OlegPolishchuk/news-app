import React, { useEffect } from 'react';

import s from './SearchNews.module.scss';

import { SingleNews } from 'components/news/singleNews/SingleNews';
import { Title } from 'components/title/Title';
import { useAppDispatch, useAppSelector } from 'hooks';
import { fetchNewsWithParams } from 'store/reducers/actionCreators';
import {
  selectCurrentNews,
  selectSearchParamsCategory,
  selectSearchParamsCountry,
  selectSearchParamsKeywords,
  selectSearchParamsLanguage,
} from 'store/selectors';
import { RequestParams, ReturnComponentType } from 'types';
import { findSearchingWord } from 'utils/findSearchingWord';

export const SearchNews = React.memo((): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const keywords = useAppSelector(selectSearchParamsKeywords);
  const category = useAppSelector(selectSearchParamsCategory);
  const country = useAppSelector(selectSearchParamsCountry);
  const language = useAppSelector(selectSearchParamsLanguage);
  const news = useAppSelector(selectCurrentNews);

  const processedKeywords = keywords.replaceAll(' ', '%');

  const highlightedNews =
    keywords !== '' ? findSearchingWord(news, processedKeywords, 'highlight') : news;

  useEffect(() => {
    const params = {
      keywords: processedKeywords,
      country,
      category,
      language,
    };

    dispatch(fetchNewsWithParams(params as RequestParams));
  }, [keywords, country, category, language]);

  return (
    <>
      <Title title="Searching news" />
      <div className={s.searchNews}>
        {highlightedNews.map(news => (
          <SingleNews
            article={news}
            type="small"
            key={news.id}
            isSearching={keywords !== ''}
          />
        ))}
      </div>
    </>
  );
});
