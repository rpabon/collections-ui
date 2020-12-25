import { Collection } from './Collection';

export interface CollectionBoundary {
  id: Collection['id'];
  top: number;
  bottom: number;
}

export interface DraggingState {
  draggedOverId: Collection['id'];
  sideBarBoundaries: {
    left: number;
    right: number;
  };
  collectionBoundaries: CollectionBoundary[];
}
