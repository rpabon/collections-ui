import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';
import { DraggingState, CollectionBoundary } from '../types/DraggingState';
import { calculateDropArea } from './utils';

const initialState: DraggingState = {
  draggedOverId: 0,
  dropArea: { top: 0, bottom: 0, left: 0, right: 0 },
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
    registerCollection(state, { payload }: PayloadAction<CollectionBoundary>) {
      const colIndex = state.collectionBoundaries.findIndex(
        (col) => col.id === payload.id
      );
      if (colIndex >= 0) return;

      state.collectionBoundaries.push(payload);
      state.dropArea = calculateDropArea(state.collectionBoundaries);
    },
  },
});

export const { setDraggedOverId, registerCollection } = draggingSlice.actions;

export const selectDragging = (s: RootState) => s.dragging;
export const selectDraggedOverId = (s: RootState) => s.dragging.draggedOverId;

export default draggingSlice.reducer;
