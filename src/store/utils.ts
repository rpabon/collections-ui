import { Collection } from '../types/Collection';
import { CollectionState } from '../types/CollectionState';
import { Boundary, CollectionBoundary } from '../types/DraggingState';

export function getCollection(
  state: CollectionState,
  id: Collection['id']
): Collection | undefined {
  return state.list.find((c) => c.id === id);
}

export function createNewCollection(length: number = 0): Collection {
  return {
    id: +new Date(),
    name: `Title ${length + 1}`,
    items: [],
  };
}

export function calculateDropArea(boundaries: CollectionBoundary[]): Boundary {
  const { id, ...boundary } = boundaries[0];
  const bottomEl = boundaries[boundaries.length - 1];

  return {
    ...boundary,
    bottom: bottomEl.bottom,
  };
}
