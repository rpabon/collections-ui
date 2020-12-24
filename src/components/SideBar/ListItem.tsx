import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Collection } from '../../types/Collection';
import { setCurrentCollectionId } from '../../store/collectionsSlice';
import css from './SideBar.module.scss';

const variants = {
  hidden: { opacity: 0, x: -184 },
  show: { opacity: 1, x: 0 },
};

const count = {
  grow: { scale: [1, 2.5, 1] },
};

export function ListItem(props: Collection) {
  const { id, name, items } = props;
  const dispatch = useDispatch();
  const controls = useAnimation();
  const prevCount = useRef(items.length);

  useEffect(() => {
    if (prevCount.current !== items.length) {
      controls.start('grow');
      prevCount.current = items.length;
    }
  }, [items.length, prevCount, controls]);

  function setId(id: number) {
    dispatch(setCurrentCollectionId(id));
  }

  return (
    <motion.li variants={variants}>
      <button className={css.listItem} onClick={() => void setId(id)}>
        <span className={css.listItemName}>
          <FaPaperclip />
          {name}
        </span>
        <motion.span className={css.count} variants={count} animate={controls}>
          {items.length}
        </motion.span>
      </button>
    </motion.li>
  );
}
