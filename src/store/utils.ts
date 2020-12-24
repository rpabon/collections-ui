import { Collection } from '../types/Collection';
import { CollectionState } from '../types/CollectionState';

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
