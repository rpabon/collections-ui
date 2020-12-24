import React from 'react';
import { FaPlus } from 'react-icons/fa';
import css from './SideBar.module.scss';

export function AddCollection(props: AddCollectionProps) {
  const {} = props;

  return (
    <h3 className={css.title}>
      Collections
      <button>
        <FaPlus />
      </button>
    </h3>
  );
}

interface AddCollectionProps {}
