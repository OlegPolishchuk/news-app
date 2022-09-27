import { Article } from 'models/article';

export const getRandomNews = (news: Article[]): Article => {
  const randomIndex = Math.floor(Math.random() * news.length);

  const filteredNews = news.filter(news => news.image !== 'none');

  return filteredNews[randomIndex];
};
