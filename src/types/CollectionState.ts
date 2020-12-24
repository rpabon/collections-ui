import { Collection } from './Collection';

export interface CollectionState {
  currentId: Collection['id'];
  list: Collection[];
}
