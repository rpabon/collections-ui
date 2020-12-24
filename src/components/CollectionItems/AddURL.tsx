import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCollectionItem,
  selectCurrentCollectionId,
} from '../../store/collectionsSlice';
import css from './CollectionItems.module.scss';
import { CollectionItem } from '../../types/CollectionItem';

export function AddURL() {
  const id = useSelector(selectCurrentCollectionId);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  function addItem() {
    const item: CollectionItem = {
      id: +new Date(),
      url,
      imageURL: '',
    };
    dispatch(addCollectionItem({ id, item }));
    setUrl('');
  }

  return (
    <div className={css.inputGroup}>
      <div className={css.inputGroupWrapper}>
        <FaLink className={css.linkIcon} />
        <input
          className={css.inputField}
          placeholder="Url..."
          value={url}
          onChange={(e) => void setUrl(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addItem();
            }
          }}
        />
      </div>

      <button className={css.button} onClick={addItem}>
        Add
      </button>
    </div>
  );
}
