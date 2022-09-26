import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { newsReducer } from 'store/reducers/NewsSlice';

const rootReducer = combineReducers({
  newsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
