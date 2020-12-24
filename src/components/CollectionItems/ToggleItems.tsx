import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import css from './CollectionItems.module.scss';

export function ToggleItems(props: ToggleItemsProps) {
  const {} = props;

  return (
    <h2 className={css.title}>
      <button className={css.toggleList}>
        <FaChevronDown />
      </button>
      Items
    </h2>
  );
}

interface ToggleItemsProps {}