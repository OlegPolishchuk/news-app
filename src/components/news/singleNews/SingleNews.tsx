import React, { useState } from 'react';

import parse from 'html-react-parser';
import { NavLink } from 'react-router-dom';

import newsImg from 'assets/images/img_news.jpg';
import imgNotFound from 'assets/images/img_news_not_found.jpg';
import s from 'components/news/singleNews/SingleNews.module.scss';
import { Path } from 'enums';
import { ReturnComponentType } from 'types';
import { News } from 'types/models/news';
import { dateStringSlicer } from 'utils/dateStringSlicer';
import { deleteHTMLTagFromText } from 'utils/deleteHTMLTagFromText';

interface Props {
  article: News;
  type: 'large' | 'middle' | 'small';
  revers?: boolean;
  isSearching?: boolean;
}

const imgBadSource =
  'https://static.arxiv.org/static/browse/0.3.4/images/icons/favicon.ico';

function prepareImgSrc(src: string): string {
  let result = src;

  if (src === 'None') result = newsImg;
  if (src.includes(imgBadSource)) result = newsImg;

  return result;
}

export const SingleNews = ({
  article,
  type,
  revers,
  isSearching,
}: Props): ReturnComponentType => {
  const [finalImgSrc, setFinalImgSrc] = useState(prepareImgSrc(article.image));

  const author = deleteHTMLTagFromText(article.author);
  const articleDate = dateStringSlicer(article.published);
  const title = isSearching ? parse(article.title) : article.title;
  const description = isSearching ? parse(article.description) : article.description;

  let classNames = '';

  switch (type) {
    case 'large':
      classNames = s.newsLarge;
      break;
    case 'middle':
      classNames = s.newsMiddle;
      break;
    case 'small':
      classNames += `${s.newsSmall}`;
      break;
    default:
      classNames = s.newsSmall;
      break;
  }

  if (revers) {
    classNames += ` ${s.reverse}`;
  }

  const replaceImgSrc = (): void => {
    setFinalImgSrc(imgNotFound);
  };

  return (
    <article className={`${s.news} ${classNames}`}>
      <div className={s.news_img_box}>
        <NavLink className={s.news_img_link} to={`${Path.News}/${article.id}`}>
          <img
            className={s.news_img}
            src={finalImgSrc}
            onError={replaceImgSrc}
            alt={article.title}
          />
        </NavLink>
      </div>
      <div className={s.news_description}>
        <div className={s.news_author}>
          <h3>{author}</h3>
          <span>{articleDate}</span>
        </div>
        <NavLink to={`${Path.News}/${article.id}`}>
          <h2 className={s.news_title}>{title}</h2>
        </NavLink>
        <p className={s.news_text}>{description}</p>
        <a className={s.news_linkTo} href={article.url} target="_blank" rel="noreferrer">
          read more
        </a>
      </div>
    </article>
  );
};
