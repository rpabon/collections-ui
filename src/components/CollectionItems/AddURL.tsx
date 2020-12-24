import React from 'react';
import { FaLink } from 'react-icons/fa';
import { useAddItem } from './useAddItem';
import { Button } from '../Button/Button';
import css from './CollectionItems.module.scss';

export function AddURL() {
  const { url, updateUrl, addItem } = useAddItem();

  return (
    <div className={css.inputGroup}>
      <div className={css.inputGroupWrapper}>
        <FaLink className={css.linkIcon} />
        <input
          className={css.inputField}
          placeholder="Url..."
          value={url}
          onChange={updateUrl}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              addItem();
            }
          }}
        />
      </div>

      <Button className={css.button} disabled={!url} onClick={addItem} inverted>
        Add
      </Button>
    </div>
  );
}
