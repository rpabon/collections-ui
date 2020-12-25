import React, { Dispatch, memo, SetStateAction } from 'react';
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { CollectionItem } from '../../types/CollectionItem';
import css from './CollectionItems.module.scss';
import { useDragging } from './useDragging';

const variants = {
  hidden: { opacity: 0, y: -200, zIndex: -10 },
  show: { opacity: 1, y: 0, zIndex: 0 },
};

export const Card = memo((props: CardProps) => {
  const { id, url, imageURL, setItemId } = props;
  const dragProps = useDragging();

  function onRemove() {
    setItemId(id);
  }

  return (
    <motion.div
      {...dragProps}
      className={css.card}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <button className={css.cardClose} onClick={onRemove}>
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
  setItemId: Dispatch<SetStateAction<number>>;
}
