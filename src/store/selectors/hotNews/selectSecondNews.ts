import { RootState } from 'store/store';
import { News } from 'types/models/news';

export const selectSecondNews = (state: RootState): News =>
  state.newsReducer.hotNews.secondNews;
