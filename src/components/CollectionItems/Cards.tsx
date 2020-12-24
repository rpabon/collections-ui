import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCollectionItem,
  selectCurrentCollection,
} from '../../store/collectionsSlice';
import { Card } from './Card';
import css from './CollectionItems.module.scss';

export function Cards() {
  const { id, items } = useSelector(selectCurrentCollection);
  const dispatch = useDispatch();

  function removeItem(itemId: number) {
    dispatch(removeCollectionItem({ id, itemId }));
  }

  return (
    <div className={css.cards}>
      {items.map((item) => (
        <Card key={item.id} {...item} removeItem={removeItem} />
      ))}
    </div>
  );
}
