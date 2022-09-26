import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BaseResponse } from 'api/types';
import { DEFAULT_PAGINATION_OFFSET, LIMIT_PAGE } from 'globalConstants';
import { Article } from 'models/article';
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
  startPageArticles: {
    general: [],
    business: [],
    entertainment: [],
    health: [],
    science: [],
    sports: [],
    technology: [],
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
    [fetchNews.fulfilled.type]: (state, action: PayloadAction<BaseResponse[]>) => {
      console.log(action.payload);
      const arrayOfArt = action.payload.map(res => res.data);

      console.log(arrayOfArt);
    },
  },
});

export interface InitialState {
  pagination: Pagination;
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  startPageArticles: StartPageArticles;
}

export const newsReducer = newsSlice.reducer;
