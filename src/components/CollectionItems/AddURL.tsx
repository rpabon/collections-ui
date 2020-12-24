import React from 'react';
import { FaLink } from 'react-icons/fa';
import css from './CollectionItems.module.scss';

export function AddURL(props: AddURLProps) {
  const {} = props;

  return (
    <div className={css.inputGroup}>
      <div className={css.inputGroupWrapper}>
        <FaLink className={css.linkIcon} />
        <input className={css.inputField} placeholder="Url..." />
      </div>

      <button className={css.button}>Add</button>
    </div>
  );
}

interface AddURLProps {}
