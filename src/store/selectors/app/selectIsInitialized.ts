import { RootState } from 'store/store';

export const selectIsInitialized = (state: RootState): boolean => {
  return state.newsReducer.isInitialized;
};
