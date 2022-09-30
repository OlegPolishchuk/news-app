import React from 'react';

import { useParams } from 'react-router-dom';

import s from './CurrentNews.module.scss';

import { GoBackButton } from 'components/goBackButton/GoBackButton';
import { Title } from 'components/title/Title';
import { useAppSelector } from 'hooks/useAppSelector/useAppSelector';
import { selectNewsById } from 'store/selectors/currentNews/selectNewsById';
import { ReturnComponentType } from 'types';
import { dateStringSlicer } from 'utils/dateStringSlicer';

export const CurrentNews = (): ReturnComponentType => {
  const { id } = useParams();

  const news = useAppSelector(selectNewsById(id as string));

  return (
    <>
      <GoBackButton />
      <article className={s.article}>
        <Title title={news.title} />
        <div className={s.article_content}>
          <img src={news.image} alt={news.title} />
          <div className={s.article_description}>
            <div className={s.article_author}>
              <span>{news.author}</span>
              <span>{dateStringSlicer(news.published)}</span>
            </div>
            <p className={s.article_text}>{news.description}</p>
            <a
              href={news.url}
              target="_blank"
              className={s.article_linkTo}
              rel="noreferrer"
            >
              read more
            </a>
          </div>
        </div>
      </article>
    </>
  );
};
