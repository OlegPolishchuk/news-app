import { RootState } from 'store/store';
import { News } from 'types/models/news';

export const selectMainNews = (state: RootState): News =>
  state.newsReducer.hotNews.mainNews;
