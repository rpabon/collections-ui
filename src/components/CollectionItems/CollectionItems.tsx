import React, { useState } from 'react';
import { AddURL } from './AddURL';
import { ToggleItems } from './ToggleItems';
import { Cards } from './Cards';
import css from './CollectionItems.module.scss';

export function CollectionItems() {
  const [open, setOpen] = useState(true);

  return (
    <div className="container">
      <div className={css.topSection}>
        <ToggleItems open={open} onClick={() => void setOpen(!open)} />
        <AddURL />
      </div>

      <Cards open={open} />
    </div>
  );
}
