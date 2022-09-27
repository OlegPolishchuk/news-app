import { Article } from 'models/article';

const quantity = 4;

export const newsSlicer = (news: Article[]): Article[][] => {
  console.log(`news`, news);
  const result = [];
  let count = 0;

  for (let i = 0; i < news.length; i += 1) {
    if (i % quantity === 0 && i !== 0) {
      result.push(news.slice(count, i));
      count = i;
    }
  }

  return result;
};
