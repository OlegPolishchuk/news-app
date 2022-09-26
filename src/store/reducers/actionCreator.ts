import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { NewsAPI } from 'api';

export const fetchNews = createAsyncThunk('news/fetchNews', async (_, thunkApi) => {
  try {
    const data = await NewsAPI.fetchStartingNews();

    return data.map(data => data.data);
  } catch (e) {
    const error = e as Error | AxiosError;

    return thunkApi.rejectWithValue(error);
  }
});
