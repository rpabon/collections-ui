import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Collection } from '../types/Collection';
import { CollectionItem } from '../types/CollectionItem';
import { CollectionState } from '../types/CollectionState';
import { createNewCollection, getCollection } from './utils';

const initialCollection = createNewCollection();
const initialState: CollectionState = {
  currentId: initialCollection.id,
  list: [initialCollection],
};

export const collectionsSlice = createSlice({
  name: 'collections',
  initialState,
  reducers: {
    setCurrentCollectionId(
      state,
      { payload }: PayloadAction<Collection['id']>
    ) {
      state.currentId = payload;
    },
    setCollectionName(
      state,
      { payload }: PayloadAction<Pick<Collection, 'id' | 'name'>>
    ) {
      const collection = getCollection(state, payload.id);
      if (!collection) return;

      collection.name = payload.name;
    },
    addCollection(state) {
      state.list.push(createNewCollection(state.list.length));
    },
    addCollectionItem(
      state,
      { payload }: PayloadAction<{ id: Collection['id']; item: CollectionItem }>
    ) {
      const collection = getCollection(state, payload.id);
      if (!collection) return;

      collection.items.push(payload.item);
    },
    removeCollectionItem(
      state,
      action: PayloadAction<{
        id: Collection['id'];
        itemId: CollectionItem['id'];
      }>
    ) {
      const { id, itemId } = action.payload;
      const collection = getCollection(state, id);
      if (!collection) return;

      collection.items = collection.items.filter((item) => item.id !== itemId);
    },
  },
});

export const {
  setCurrentCollectionId,
  setCollectionName,
  addCollection,
  addCollectionItem,
  removeCollectionItem,
} = collectionsSlice.actions;

export const selectCollections = (state: RootState) => state.collections.list;
export const selectCurrentCollectionId = (state: RootState) =>
  state.collections.currentId;
export const selectCurrentCollection = (state: RootState) => {
  const list = selectCollections(state);
  const id = selectCurrentCollectionId(state);
  const currentCollection = list.find((c) => c.id === id);

  return currentCollection || list[0];
};

export default collectionsSlice.reducer;
