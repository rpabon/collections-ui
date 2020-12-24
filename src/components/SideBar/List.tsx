import React from 'react';
import { FaPaperclip } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCollections,
  setCurrentCollectionId,
} from '../../store/collectionsSlice';
import css from './SideBar.module.scss';

export function List() {
  const collections = useSelector(selectCollections);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {collections.map(({ id, name, items }) => (
        <li key={id}>
          <button
            className={css.listItem}
            onClick={() => void dispatch(setCurrentCollectionId(id))}
          >
            <span className={css.listItemName}>
              <FaPaperclip />
              {name}
            </span>
            <span className={css.count}>{items.length}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}
