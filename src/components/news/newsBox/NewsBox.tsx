import React from 'react';

import s from 'components/news/newsBox/NewsBox.module.scss';
import { SingleNews } from 'components/news/singleNews/SingleNews';
import { ReturnComponentType } from 'types';
import { News } from 'types/models/news';

interface PropsType {
  news: News[];
}

export const NewsBox = ({ news }: PropsType): ReturnComponentType => {
  const firstArticle = news[0];
  const restArticles = news.slice(1);

  return (
    <div className={s.newsBox}>
      <SingleNews article={firstArticle} type="large" />
      <div className={s.newsBox_inner}>
        {restArticles.map(article => {
          return <SingleNews key={article.id} article={article} type="small" />;
        })}
      </div>
    </div>
  );
};
