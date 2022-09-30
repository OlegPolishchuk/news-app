import { RootState } from 'store/store';
import { News } from 'types';

export const selectNewsById =
  (newsId: string) =>
  (state: RootState): News => {
    const allNews = state.newsReducer.currentNews;
    const result = allNews.find(news => news.id === newsId);

    return result || ({} as News);
  };
