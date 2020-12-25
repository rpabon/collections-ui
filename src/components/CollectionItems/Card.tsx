import React, { Dispatch, memo, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { CollectionItem } from '../../types/CollectionItem';
import { useDragging } from './useDragging';
import css from './CollectionItems.module.scss';

const variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const Card = memo(({ setItemToRemoveId, ...item }: CardProps) => {
  const dragProps = useDragging(item);
  const { id, imageURL, url } = item;

  return (
    <motion.div
      {...dragProps}
      className={css.card}
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <button
        className={css.cardClose}
        onClick={() => void setItemToRemoveId(id)}
      >
        <FaTimes />
      </button>

      <div className={css.cardImage}>
        <img alt={url} src={imageURL} />
      </div>

      <div className={css.cardInfo}>{url}</div>
    </motion.div>
  );
});

interface CardProps extends CollectionItem {
  setItemToRemoveId: Dispatch<SetStateAction<number>>;
}
