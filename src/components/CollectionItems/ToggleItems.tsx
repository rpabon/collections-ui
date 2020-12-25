import React from 'react';
// import { FaChevronDown } from 'react-icons/fa';
import css from './CollectionItems.module.scss';

export function ToggleItems({ onClick }: ToggleItemsProps) {
  return (
    <h2 className={css.title}>
      {/* <button className={css.toggleList} onClick={onClick}>
        <FaChevronDown />
      </button> */}
      Items
    </h2>
  );
}

interface ToggleItemsProps {
  onClick?(): void;
}
