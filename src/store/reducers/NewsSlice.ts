import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BaseResponse } from 'api/types';
import { DEFAULT_PAGINATION_OFFSET, LIMIT_PAGE } from 'globalConstants';
import { fetchNews, fetchNewsByCategory } from 'store/reducers/actionCreators';
import { HotNews } from 'types/models/hotNews';
import { News } from 'types/models/news';
import { Pagination } from 'types/models/pagination';
import { StartPageNews } from 'types/models/startPageNews';

const initialState: InitialState = {
  pagination: {
    limit: LIMIT_PAGE,
    offset: DEFAULT_PAGINATION_OFFSET,
    count: 0,
    total: 0,
  },
  currentNews: [],
  isLoading: false,
  error: null,
  startPageNews: {} as StartPageNews,
  hotNews: {
    mainNews: {} as News,
    restNews: [],
    secondNews: {} as News,
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
      state.isLoading = false;
    },
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<BaseResponse>) => {
      const { news } = action.payload;
      const restArticlesStartIndex = 2;

      [state.hotNews.mainNews, state.hotNews.secondNews] = action.payload.news;
      state.hotNews.restNews = news.slice(restArticlesStartIndex);

      state.isLoading = false;
    },

    [fetchNewsByCategory.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchNewsByCategory.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchNewsByCategory.fulfilled.type]: (
      state,
      action: PayloadAction<BaseResponse>,
    ) => {
      state.currentNews = action.payload.news;
      state.isLoading = false;
    },
  },
});

export interface InitialState {
  pagination: Pagination;
  currentNews: News[];
  isLoading: boolean;
  error: string | null;
  startPageNews: StartPageNews;
  hotNews: HotNews;
}

export const newsReducer = newsSlice.reducer;
