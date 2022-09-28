import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { NewsAPI } from 'api';
import { RequestParams } from 'types';

export const fetchNews = createAsyncThunk('hotNews/fetchNews', async (_, thunkApi) => {
  try {
    return await NewsAPI.fetchStartingNews();
  } catch (e) {
    const error = e as Error | AxiosError;

    return thunkApi.rejectWithValue(error);
  }
});

export const fetchNewsByCategory = createAsyncThunk(
  'hotNews/fetchNewsByCategory',
  async (params: RequestParams, thunkApi) => {
    try {
      const data = await NewsAPI.fetchNewsByCategory(params);

      return {
        data,
        requestParams: params,
      };
    } catch (e) {
      const error = e as Error | AxiosError;

      return thunkApi.rejectWithValue(error);
    }
  },
);
