import { RootState } from 'store/store';

export const selectSearchParamsKeywords = (state: RootState): string => {
  return state.newsReducer.requestParams.keywords;
};
