import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { DEFAULT_LANGUAGE_CODE } from 'globalConstants';
import { fetchNews, fetchNewsWithParams } from 'store/reducers/actionCreators';
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
    keywords: '',
    country: 'INT',
    language: DEFAULT_LANGUAGE_CODE,
  } as RequestParams,
  isInitialized: false,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setRequestParams: (state, action: PayloadAction<RequestParams>) => {
      state.requestParams = { ...state.requestParams, ...action.payload };
    },

    setRequestParamsKeywords: (state, action: PayloadAction<string>) => {
      state.requestParams.keywords = action.payload;
    },

    setRequestParamsPageNumber: (state, action: PayloadAction<number>) => {
      state.requestParams.page_number = action.payload;
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
      state.currentNews = action.payload.news;

      state.isLoading = false;
      state.isInitialized = true;
    },

    [fetchNewsWithParams.pending.type]: state => {
      state.isLoading = true;
    },
    [fetchNewsWithParams.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchNewsWithParams.fulfilled.type]: (
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
  isInitialized: boolean;
}

export const newsReducer = newsSlice.reducer;

export const { setRequestParamsKeywords } = newsSlice.actions;
export const { setRequestParamsPageNumber } = newsSlice.actions;
export const { setRequestParams } = newsSlice.actions;
