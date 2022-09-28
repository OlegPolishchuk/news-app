import { RootState } from 'store/store';
import { News } from 'types/models/news';

export const selectCurrentNews = (state: RootState): News[] =>
  state.newsReducer.currentNews;
