import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import dragging from './draggingSlice';
import collections from './collectionsSlice';

// const reducers = combineReducers({
//   collections,
//   dragging,
// });

const persistConfig = { key: 'root', storage };
const persistedCollections = persistReducer(persistConfig, collections);

export const store = configureStore({
  reducer: {
    dragging,
    collections: persistedCollections,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
