import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { DraggingState, CollectionBoundary } from '../types/DraggingState';

const initialState: DraggingState = {
  draggedOverId: 0,
  sideBarBoundaries: { left: 0, right: 0 },
  collectionBoundaries: [],
};

const draggingSlice = createSlice({
  name: 'dragging',
  initialState,
  reducers: {
    setDraggedOverId(
      state,
      { payload }: PayloadAction<DraggingState['draggedOverId']>
    ) {
      state.draggedOverId = payload;
    },
    registerSidebar(
      state,
      { payload }: PayloadAction<DraggingState['sideBarBoundaries']>
    ) {
      state.sideBarBoundaries = payload;
    },
    registerCollection(state, { payload }: PayloadAction<CollectionBoundary>) {
      const collection = state.collectionBoundaries.find(
        ({ id }) => payload.id === id
      );

      if (collection) {
        collection.top = payload.top;
        collection.bottom = payload.bottom;
      } else {
        state.collectionBoundaries.push(payload);
      }
    },
  },
});

export const {
  setDraggedOverId,
  registerSidebar,
  registerCollection,
} = draggingSlice.actions;

export const selectDragging = (s: RootState) => s.dragging;
export const selectDraggedOverId = (s: RootState) => s.dragging.draggedOverId;
export const selectSideBarBoundaries = (s: RootState) =>
  s.dragging.sideBarBoundaries;
export const selectCollectionBoundaries = (s: RootState) =>
  s.dragging.collectionBoundaries;

export default draggingSlice.reducer;
