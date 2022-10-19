import React, { useLayoutEffect } from 'react';

import { ControlsPanel } from 'components/controlsPanel/ControlsPanel';
import { NewsBox } from 'components/news/newsBox/NewsBox';
import { SingleNews } from 'components/news/singleNews/SingleNews';
import { Title } from 'components/title/Title';
import { useAppDispatch } from 'hooks/useAppDispatch/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { fetchNews } from 'store/reducers/actionCreators';
import {
  selectIsInitialized,
  selectMainNews,
  selectRestNews,
  selectSecondNews,
} from 'store/selectors';
import { ReturnComponentType } from 'types';
import { newsSlicer } from 'utils/newsSlicer';

export const HotNews = (): ReturnComponentType => {
  const dispatch = useAppDispatch();

  const mainNews = useAppSelector(selectMainNews);
  const secondNews = useAppSelector(selectSecondNews);
  const restNews = useAppSelector(selectRestNews);
  const isInitialized = useAppSelector(selectIsInitialized);

  const articlesForNewsBox = newsSlicer(restNews);

  useLayoutEffect(() => {
    dispatch(fetchNews());
  }, []);

  return (
    <>
      <ControlsPanel />
      <section>
        <Title title="Hot news" />
        {isInitialized && (
          <>
            <SingleNews article={mainNews} type="large" />
            <SingleNews article={secondNews} revers type="large" />
            {articlesForNewsBox.map((article, i) => (
              <NewsBox key={i.toString()} news={article} />
            ))}
          </>
        )}
      </section>
    </>
  );
};
