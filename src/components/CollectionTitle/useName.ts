import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentCollection,
  setCollectionName,
} from '../../store/collectionsSlice';

export function useName() {
  const { id, name } = useSelector(selectCurrentCollection);
  const originalName = useRef(name);
  const [inputValue, setInputValue] = useState(name);
  const dispatch = useDispatch();

  useEffect(() => {
    setInputValue(name);
    originalName.current = name;
  }, [name]);

  function updateValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function setNewName() {
    if (!inputValue) {
      setInputValue(originalName.current);
    }

    if (inputValue && inputValue !== originalName.current) {
      originalName.current = inputValue;
      dispatch(setCollectionName({ id, name: inputValue }));
    }
  }

  return {
    inputValue,
    updateValue,
    setNewName,
  };
}
