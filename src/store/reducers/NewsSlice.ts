import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchNews, fetchNewsByCategory } from 'store/reducers/actionCreators';
import { ResponseWithParams } from 'types';
import { HotNews } from 'types/models/hotNews';
import { News } from 'types/models/news';
import { RequestParams } from 'types/models/RequestParams';
import { StartPageNews } from 'types/models/startPageNews';
import { BaseResponse } from 'types/responses/BaseResponce';

const initialState: InitialState = {
  currentNews: [],
  isLoading: false,
  error: null,
  startPageNews: {} as StartPageNews,
  hotNews: {
    mainNews: {} as News,
    restNews: [],
    secondNews: {} as News,
  },
  requestParams: {
    page_number: 1,
    category: 'general',
  } as RequestParams,
  pagination: { currentPage: 0 },
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setRequestParams: (state, action: PayloadAction<RequestParams>) => {
      state.requestParams = { ...state.requestParams, ...action.payload };
    },

    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.pagination.currentPage = action.payload;
    },
  },

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
      action: PayloadAction<ResponseWithParams>,
    ) => {
      state.currentNews = action.payload.data.news;
      state.isLoading = false;
      state.requestParams = { ...state.requestParams, ...action.payload.params };
    },
  },
});

export interface InitialState {
  currentNews: News[];
  isLoading: boolean;
  error: string | null;
  startPageNews: StartPageNews;
  hotNews: HotNews;
  requestParams: RequestParams;
  pagination: {
    currentPage: number;
  };
}

export const newsReducer = newsSlice.reducer;

export const { setRequestParams } = newsSlice.actions;
export const { setCurrentPage } = newsSlice.actions;
