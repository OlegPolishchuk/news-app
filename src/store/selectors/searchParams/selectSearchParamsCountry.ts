import { RootState } from 'store/store';

export const selectSearchParamsCountry = (state: RootState): string => {
  return state.newsReducer.requestParams.country;
};
