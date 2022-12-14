import { News } from 'types';
import { wrapWordInHTML } from 'utils/wrapWordInHTML';

export const findSearchingWord = (
  news: News[],
  searchingWord: string,
  className: string,
): News[] => {
  const regExp = searchingWord.split('%').map(word => new RegExp(word, 'gi'));

  return news.map(news => {
    const title = wrapWordInHTML(news.title, regExp, className);
    const description = wrapWordInHTML(news.description, regExp, className);

    return { ...news, description, title };
  });
};
