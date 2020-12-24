import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { CollectionItem } from '../../types/CollectionItem';
import css from './CollectionItems.module.scss';

const variants = {
  hidden: { opacity: 0, x: 182, zIndex: -10 },
  show: { opacity: 1, x: 0, zIndex: 0 },
};

export function Card(props: CardProps) {
  const { id, url, imageURL, removeItem } = props;
  const controls = useAnimation();
  useEffect(() => void controls.start('show'), [controls]);

  async function onRemove() {
    await controls.start('hidden');
    removeItem(id);
  }

  return (
    <motion.div
      className={css.card}
      variants={variants}
      initial="hidden"
      animate={controls}
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
}

interface CardProps extends CollectionItem {
  removeItem(itemId: CollectionItem['id']): void;
}
