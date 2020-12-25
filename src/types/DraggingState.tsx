import { Collection } from './Collection';

export interface Boundary {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface CollectionBoundary extends Boundary {
  id: Collection['id'];
}

export interface DraggingState {
  draggedOverId: Collection['id'];
  dropArea: Boundary;
  collectionBoundaries: CollectionBoundary[];
}
