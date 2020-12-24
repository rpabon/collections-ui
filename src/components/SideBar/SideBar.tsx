import React from 'react';
import { AddCollection } from './AddCollection';
import { List } from './List';
import css from './SideBar.module.scss';

export function SideBar(props: SideBarProps) {
  const {} = props;

  return (
    <aside className={css.sideBar}>
      <AddCollection />
      <List />
    </aside>
  );
}

interface SideBarProps {}
