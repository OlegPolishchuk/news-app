import { News } from 'types/models/news';

export const getRandomNews = (news: News[]): News => {
  const randomIndex = Math.floor(Math.random() * news.length);

  const filteredNews = news.filter(news => news.image !== 'none');

  return filteredNews[randomIndex];
};
