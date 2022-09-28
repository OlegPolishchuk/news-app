import { Article } from 'models/article';
import { RootState } from 'store/store';

export const selectSecondNews = (state: RootState): Article =>
  state.newsReducer.hotNews.secondNews;
