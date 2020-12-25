import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-collapse';
import { selectCurrentCollection } from '../../store/collectionsSlice';
import { Card } from './Card';
import { CloseModal } from './CloseModal';
import css from './CollectionItems.module.scss';

export function Cards({ open }: CardProps) {
  const { items } = useSelector(selectCurrentCollection);
  const [itemToRemoveId, setItemToRemoveId] = useState(0);

  return (
    <>
      <Collapse isOpened={open}>
        <div className={css.cards}>
          {items.map((item) => (
            <Card
              {...item}
              key={item.id}
              setItemToRemoveId={setItemToRemoveId}
            />
          ))}
        </div>
      </Collapse>

      <CloseModal
        itemToRemoveId={itemToRemoveId}
        setItemToRemoveId={setItemToRemoveId}
      />
    </>
  );
}

interface CardProps {
  open: boolean;
}
