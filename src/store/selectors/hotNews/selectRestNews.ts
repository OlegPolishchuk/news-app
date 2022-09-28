import { RootState } from 'store/store';
import { News } from 'types/models/news';

export const selectRestNews = (state: RootState): News[] =>
  state.newsReducer.hotNews.restNews;
