import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentCollection } from '../../store/collectionsSlice';
import { Card } from './Card';
import { CloseModal } from './CloseModal';
import css from './CollectionItems.module.scss';

export function Cards() {
  const { items } = useSelector(selectCurrentCollection);
  const [itemIdToRemove, setItemIdToRemove] = useState(0);

  return (
    <>
      <div className={css.cards}>
        {items.map((item) => (
          <Card key={item.id} {...item} setItemToRemoveId={setItemIdToRemove} />
        ))}
      </div>

      <CloseModal itemId={itemIdToRemove} setItemId={setItemIdToRemove} />
    </>
  );
}
