import React from 'react';

import s from './NewsBox.module.scss';

import { News } from 'components/main/news/News';
import { Article } from 'models/article';
import { ReturnComponentType } from 'types';

interface PropsType {
  articles: Article[];
}

export const NewsBox = ({ articles }: PropsType): ReturnComponentType => {
  const firstArticle = articles[0];
  const restArticles = articles.slice(1);

  return (
    <div className={s.newsBox}>
      <News article={firstArticle} type="large" />
      <div className={s.newsBox_inner}>
        {restArticles.map(article => {
          return <News key={article.id} article={article} type="small" />;
        })}
      </div>
    </div>
  );
};
