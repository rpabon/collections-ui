import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import cx from 'classnames';
import { Collection } from '../../types/Collection';
import { useRegisterBoundary } from '../../store/useRegisterBoundary';
import { setCurrentCollectionId } from '../../store/collectionsSlice';
import { selectDraggedOverId } from '../../store/draggingSlice';
import { Count } from './Count';
import { Name } from './Name';
import css from './SideBar.module.scss';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const ListItem = memo(({ id, name, items }: Collection) => {
  const draggingRef = useRegisterBoundary(id);
  const draggedOverId = useSelector(selectDraggedOverId);
  const dispatch = useDispatch();

  function setId(id: number) {
    dispatch(setCurrentCollectionId(id));
  }

  return (
    <motion.li
      ref={draggingRef}
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <button
        className={cx(css.listItem, { [css.grow]: id === draggedOverId })}
        onClick={() => void setId(id)}
      >
        <Name name={name} />
        <Count count={items.length} />
      </button>
    </motion.li>
  );
});
