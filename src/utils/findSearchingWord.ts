import { News } from 'types';

export const findSearchingWord = (
  news: News[],
  searchingWord: string,
  className: string,
): News[] => {
  // const result = [];
  const regExp = new RegExp(searchingWord, 'gi');

  return news.map(news => {
    // const title = news.title.replace(
    //   searchingWord,
    //   `<span className=${className} >${searchingWord}</span>`,
    // );

    const title = news.title
      .split(' ')
      .map(word => {
        if (regExp.test(word)) {
          return `<span className=${className}>${word}</span>`;
        }

        return word;
      })
      .join(' ');

    // const description = news.description.replace(
    //   searchingWord,
    //   `<span className=${className}>${searchingWord}</span>`,
    // );

    const description = news.description
      .split(' ')
      .map(word => {
        if (regExp.test(word)) {
          return `<span className=${className}>${word}</span>`;
        }

        return word;
      })
      .join(' ');

    return { ...news, description, title };
  });
};
