import { CollectionItem } from './CollectionItem';

export interface Collection {
  id: number;
  name: string;
  items: CollectionItem[];
}
