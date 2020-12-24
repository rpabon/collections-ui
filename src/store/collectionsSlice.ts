import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Collection } from '../types/Collection';
import { CollectionItem } from '../types/CollectionItem';

interface CollectionState {
  currentId: Collection['id'];
  list: Collection[];
}

function createNewCollection(length: number = 0): Collection {
  return { id: +new Date(), name: `Title ${length + 1}`, items: [] };
}

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
      const collection = state.list.find((c) => c.id === payload.id);

      if (collection) {
        collection.name = payload.name;
      }
    },
    addCollection(state) {
      state.list.push(createNewCollection(state.list.length));
    },
    addCollectionItem(
      state,
      { payload }: PayloadAction<{ id: Collection['id']; item: CollectionItem }>
    ) {
      const collection = state.list.find(({ id }) => id === payload.id);
      if (!collection) return;

      collection.items.push(payload.item);
    },
  },
});

export const {
  setCurrentCollectionId,
  setCollectionName,
  addCollection,
  addCollectionItem,
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
