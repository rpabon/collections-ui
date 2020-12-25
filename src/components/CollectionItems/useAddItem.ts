import { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CollectionItem } from '../../types/CollectionItem';
import {
  addCollectionItem,
  selectCurrentCollectionId,
} from '../../store/collectionsSlice';
import image1 from '../../img/1.jpg';
import image2 from '../../img/2.jpg';
import image3 from '../../img/3.jpg';
import image4 from '../../img/4.jpg';
import image5 from '../../img/5.jpg';

const images = [image1, image2, image3, image4, image5];

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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
      imageURL: images[randomNumber(0, 4)],
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
