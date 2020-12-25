import React, { memo, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Collection } from '../../types/Collection';
import { useRegisterBoundary } from '../../store/useRegisterBoundary';
import { setCurrentCollectionId } from '../../store/collectionsSlice';
import { selectDraggedOverId } from '../../store/draggingSlice';
import css from './SideBar.module.scss';

const variants = {
  hidden: { opacity: 0, x: -184 },
  show: { opacity: 1, x: 0 },
  grow: { scale: 1.5 },
  shrink: { scale: 1 },
};

const count = {
  grow: { scale: [1, 2.5, 1] },
};

export const ListItem = memo((props: Collection) => {
  const { id, name, items } = props;
  const draggingRef = useRegisterBoundary(id);
  const draggedOverId = useSelector(selectDraggedOverId);
  const dispatch = useDispatch();
  const controls = useAnimation();
  const controles = useAnimation();
  const prevCount = useRef(items.length);

  useEffect(() => {
    if (prevCount.current !== items.length) {
      controls.start('grow');
      prevCount.current = items.length;
    }
  }, [items.length, prevCount, controls]);

  useEffect(() => {
    if (id === draggedOverId) {
      controles.start('grow');
    } else {
      controles.start('shrink');
    }
  }, [id, draggedOverId, controles]);

  function setId(id: number) {
    dispatch(setCurrentCollectionId(id));
  }

  return (
    <motion.li variants={variants} ref={draggingRef} animate={controles}>
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
});
