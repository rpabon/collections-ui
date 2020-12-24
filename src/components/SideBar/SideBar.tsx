import React from 'react';
import { FaPaperclip, FaPlus } from 'react-icons/fa';
import css from './SideBar.module.scss';

const arr = [
  { id: 'id1', name: 'Title 1', count: 6 },
  { id: 'id2', name: 'Title 2', count: 0 },
];

export function SideBar(props: SideBarProps) {
  const {} = props;

  return (
    <aside className={css.sideBar}>
      <h3 className={css.title}>
        Collections
        <button>
          <FaPlus />
        </button>
      </h3>

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
    </aside>
  );
}

interface SideBarProps {}
