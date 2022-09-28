import { RootState } from 'store/store';
import { RequestParams } from 'types';

export const selectRequestParams = (state: RootState): RequestParams =>
  state.newsReducer.requestParams;
