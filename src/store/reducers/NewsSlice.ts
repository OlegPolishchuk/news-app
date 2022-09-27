import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BaseResponse } from 'api/types';
import { DEFAULT_PAGINATION_OFFSET, LIMIT_PAGE } from 'globalConstants';
import { Article } from 'models/article';
import { HotNews } from 'models/hotNews';
import { Pagination } from 'models/pagination';
import { StartPageArticles } from 'models/startPageArticles';
import { fetchNews } from 'store/reducers/actionCreator';

const initialState: InitialState = {
  pagination: {
    limit: LIMIT_PAGE,
    offset: DEFAULT_PAGINATION_OFFSET,
    count: 0,
    total: 0,
  },
  articles: [],
  isLoading: false,
  error: null,
  startPageArticles: {} as StartPageArticles,
  hotNews: {
    mainNews: {} as Article,
    restNews: [],
    secondNews: {} as Article,
  },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchNews.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<BaseResponse>) => {
      const { news } = action.payload;
      const restArticlesStartIndex = 2;

      state.articles = news;
      [state.hotNews.mainNews, state.hotNews.secondNews] = action.payload.news;
      state.hotNews.restNews = news.slice(restArticlesStartIndex);
    },
  },
});

export interface InitialState {
  pagination: Pagination;
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  startPageArticles: StartPageArticles;
  hotNews: HotNews;
}

export const newsReducer = newsSlice.reducer;
