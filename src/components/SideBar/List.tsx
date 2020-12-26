import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { selectCollections } from '../../store/collectionsSlice';
import { ListItem } from './ListItem';
import css from './SideBar.module.scss';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function List() {
  const collections = useSelector(selectCollections);

  return (
    <motion.ul
      className={css.list}
      variants={variants}
      initial="hidden"
      animate="show"
      data-testid="collection-list"
    >
      {collections.map((collection) => (
        <ListItem key={collection.id} {...collection} />
      ))}
    </motion.ul>
  );
}
