import React from 'react';
import { FaTimes } from 'react-icons/fa';
import css from './CollectionItems.module.scss';

const cards = [
  { id: 'id1', url: 'https://zeit.de/' },
  { id: 'id2', url: 'https://tagesschau.de/' },
  { id: 'id3', url: 'https://tagesschau.de/' },
  { id: 'id4', url: 'https://tagesschau.de/' },
  { id: 'id5', url: 'https://tagesschau.de/' },
  { id: 'id6', url: 'https://tagesschau.de/' },
  { id: 'id7', url: 'https://tagesschau.de/' },
];

export function Cards(props: CardsProps) {
  const {} = props;

  return (
    <div className={css.cards}>
      {cards.map((item) => (
        <div key={item.id} className={css.card}>
          <button className={css.cardClose}>
            <FaTimes />
          </button>

          <div className={css.cardImage}></div>
          <div className={css.cardInfo}>{item.url}</div>
        </div>
      ))}
    </div>
  );
}

interface CardsProps {}
