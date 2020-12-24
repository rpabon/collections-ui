import React from 'react';
import { FaPaperclip } from 'react-icons/fa';
import css from './SideBar.module.scss';

const arr = [
  { id: 'id1', name: 'Title 1', count: 6 },
  { id: 'id2', name: 'Title 2', count: 0 },
];

export function List(props: ListProps) {
  const {} = props;

  return (
    <ul className={css.list}>
      {arr.map((item) => (
        <li key={item.id} className={css.listItem}>
          <span className={css.listItemName}>
            <FaPaperclip />
            {item.name}
          </span>
          <span className={css.count}>{item.count}</span>
        </li>
      ))}
    </ul>
  );
}

interface ListProps {}
