import React from 'react';

import { NavLink } from 'react-router-dom';

import newsImg from 'assets/images/img_news.jpg';
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
}

export const SingleNews = ({ article, type, revers }: Props): ReturnComponentType => {
  let imgSrc = article.image === 'None' ? newsImg : article.image;
  const imgSource =
    'https://static.arxiv.org/static/browse/0.3.4/images/icons/favicon.ico';
  const author = deleteHTMLTagFromText(article.author);
  const articleDate = dateStringSlicer(article.published);

  imgSrc = imgSrc.includes(imgSource) ? newsImg : imgSrc;

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
        <NavLink className={s.news_img_link} to={`${Path.News}/${article.id}`}>
          <img className={s.news_img} src={imgSrc} alt={article.title} />
        </NavLink>
      </div>
      <div className={s.news_description}>
        <div className={s.news_author}>
          <h3>{author}</h3>
          <span>{articleDate}</span>
        </div>
        <NavLink to={`${Path.News}/${article.id}`}>
          <h2 className={s.news_title}>{article.title}</h2>
        </NavLink>
        <p className={s.news_text}>{article.description}</p>
        <a className={s.news_linkTo} href={article.url} target="_blank" rel="noreferrer">
          read more
        </a>
      </div>
    </article>
  );
};
