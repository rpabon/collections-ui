import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeCollectionItem,
  selectCurrentCollection,
} from '../../store/collectionsSlice';
import css from './CollectionItems.module.scss';

export function Cards() {
  const { id, items } = useSelector(selectCurrentCollection);
  const dispatch = useDispatch();

  function removeItem(itemId: number) {
    dispatch(removeCollectionItem({ id, itemId }));
  }

  return (
    <div className={css.cards}>
      {items.map(({ id, url, imageURL }) => (
        <div key={id} className={css.card}>
          <button className={css.cardClose} onClick={() => void removeItem(id)}>
            <FaTimes />
          </button>

          <div className={css.cardImage}>
            <img alt={url} src={imageURL} />
          </div>

          <div className={css.cardInfo}>{url}</div>
        </div>
      ))}
    </div>
  );
}
