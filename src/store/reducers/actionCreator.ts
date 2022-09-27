import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { NewsAPI } from 'api';

export const fetchNews = createAsyncThunk('news/fetchNews', async (_, thunkApi) => {
  try {
    return await NewsAPI.fetchStartingNews();
  } catch (e) {
    const error = e as Error | AxiosError;

    return thunkApi.rejectWithValue(error);
  }
});

export const fetchNewsByCategory = createAsyncThunk(
  'news/fetchNewsByCategory',
  async (category: { category: string }, thunkApi) => {
    try {
      return await NewsAPI.fetchNewsByCategory(category.category);
    } catch (e) {
      const error = e as Error | AxiosError;

      return thunkApi.rejectWithValue(error);
    }
  },
);
