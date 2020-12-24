import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionItem } from '../../types/CollectionItem';
import {
  addCollectionItem,
  selectCurrentCollectionId,
} from '../../store/collectionsSlice';

export function useAddItem() {
  const id = useSelector(selectCurrentCollectionId);
  const dispatch = useDispatch();
  const [url, setUrl] = useState('');

  function updateUrl(e: ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function addItem() {
    const item: CollectionItem = {
      id: +new Date(),
      url,
      imageURL: '',
    };

    dispatch(addCollectionItem({ id, item }));
    setUrl('');
  }

  return {
    url,
    updateUrl,
    addItem,
  };
}
