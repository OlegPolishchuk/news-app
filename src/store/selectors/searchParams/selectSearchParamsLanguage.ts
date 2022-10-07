import { RootState } from 'store/store';

export const selectSearchParamsLanguage = (state: RootState): string => {
  return state.newsReducer.requestParams.language;
};
