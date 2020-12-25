import React from 'react';
import cx from 'classnames';
import { FaChevronDown } from 'react-icons/fa';
import css from './CollectionItems.module.scss';

export function ToggleItems({ onClick, open }: ToggleItemsProps) {
  return (
    <h2 className={css.title}>
      <button
        className={cx(css.toggleList, { [css.open]: open })}
        onClick={onClick}
      >
        <FaChevronDown />
      </button>
      Items
    </h2>
  );
}

interface ToggleItemsProps {
  open: boolean;
  onClick?(): void;
}
