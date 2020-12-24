import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import collectionsSlice from './collectionsSlice';

export const store = configureStore({
  reducer: {
    collections: collectionsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
