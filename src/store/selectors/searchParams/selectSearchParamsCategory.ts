import { RootState } from 'store/store';

export const selectSearchParamsCategory = (state: RootState): string => {
  return state.newsReducer.requestParams.category;
};
