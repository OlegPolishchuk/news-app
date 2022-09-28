import { Article } from 'models/article';
import { RootState } from 'store/store';

export const selectRestNews = (state: RootState): Article[] =>
  state.newsReducer.hotNews.restNews;
