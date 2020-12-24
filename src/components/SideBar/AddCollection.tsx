import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addCollection } from '../../store/collectionsSlice';
import css from './SideBar.module.scss';

export function AddCollection() {
  const dispatch = useDispatch();

  function onClick() {
    dispatch(addCollection());
  }

  return (
    <h3 className={css.title}>
      Collections
      <button onClick={onClick}>
        <FaPlus />
      </button>
    </h3>
  );
}
