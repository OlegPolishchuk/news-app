import React from 'react';

import newsImg from 'assets/images/img_news.jpg';
import s from 'components/news/singleNews/SingleNews.module.scss';
import { ReturnComponentType } from 'types';
import { News } from 'types/models/news';
import { deleteHTMLTagFromText } from 'utils/deleteHTMLTagFromText';

interface Props {
  article: News;
  type: 'large' | 'middle' | 'small';
  revers?: boolean;
}

export const SingleNews = ({ article, type, revers }: Props): ReturnComponentType => {
  const imgSrc = article.image === 'None' ? newsImg : article.image;
  const author = deleteHTMLTagFromText(article.author);

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

  return (
    <article className={`${s.news} ${classNames}`}>
      <div className={s.news_img_box}>
        <img className={s.news_img} src={imgSrc} alt={article.title} />
      </div>
      <div className={s.news_description}>
        <div className={s.news_author}>
          <h3>{author}</h3>
          <span>{article.published}</span>
        </div>
        <h2 className={s.news_title}>{article.title}</h2>
        <p className={s.news_text}>{article.description}</p>
        <a href={article.url} target="_blank" rel="noreferrer">
          read more
        </a>
      </div>
    </article>
  );
};
