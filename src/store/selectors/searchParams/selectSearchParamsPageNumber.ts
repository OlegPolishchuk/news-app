import { RootState } from 'store/store';

export const selectSearchParamsPageNumber = (state: RootState): number => {
  return state.newsReducer.requestParams.page_number;
};
