import React from 'react';
import { AddURL } from './AddURL';
import { ToggleItems } from './ToggleItems';
import { Cards } from './Cards';
import css from './CollectionItems.module.scss';

export function CollectionItems() {
  return (
    <div className="container">
      <div className={css.topSection}>
        <ToggleItems />
        <AddURL />
      </div>

      <Cards />
    </div>
  );
}
