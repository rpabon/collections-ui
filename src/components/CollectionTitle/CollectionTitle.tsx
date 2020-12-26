import React from 'react';
import { useName } from './useName';
import css from './CollectionTitle.module.scss';

export function CollectionTitle() {
  const { inputValue, updateValue, setNewName } = useName();

  return (
    <div className={css.container}>
      <div className="container">
        <input
          className={css.input}
          value={inputValue}
          onChange={updateValue}
          onBlur={setNewName}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setNewName();
            }
          }}
        />
      </div>
    </div>
  );
}
