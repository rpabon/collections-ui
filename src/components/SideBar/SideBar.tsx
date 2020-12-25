import React from 'react';
import { AddCollection } from './AddCollection';
import { useRegisterBoundary } from '../../store/useRegisterBoundary';
import { List } from './List';
import css from './SideBar.module.scss';

export function SideBar() {
  const draggingRef = useRegisterBoundary<HTMLElement>();

  return (
    <aside ref={draggingRef} className={css.sideBar}>
      <AddCollection />
      <List />
    </aside>
  );
}
