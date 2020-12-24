import React, { useEffect, useRef, useState } from 'react';
import cx from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCurrentCollection,
  setCollectionName,
} from '../../store/collectionsSlice';
import css from './CollectionTitle.module.scss';

export function CollectionTitle() {
  const { id, name } = useSelector(selectCurrentCollection);
  const originalName = useRef(name);
  const [value, setValue] = useState(name);
  const dispatch = useDispatch();

  useEffect(() => {
    setValue(name);
    originalName.current = name;
  }, [name]);

  function setNewName() {
    if (!value) {
      setValue(originalName.current);
    }

    if (value && value !== originalName.current) {
      originalName.current = value;
      dispatch(setCollectionName({ id, name: value }));
    }
  }

  return (
    <div className={cx('container', css.container)}>
      <input
        className={css.input}
        value={value}
        onChange={(e) => void setValue(e.target.value)}
        onBlur={setNewName}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setNewName();
          }
        }}
      />
    </div>
  );
}
