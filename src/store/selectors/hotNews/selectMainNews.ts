import { Article } from 'models/article';
import { RootState } from 'store/store';

export const selectMainNews = (state: RootState): Article =>
  state.newsReducer.hotNews.mainNews;
