import React from 'react';
import { FaChevronDown, FaLink, FaTimes } from 'react-icons/fa';
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

export function CollectionItems(props: CollectionItemsProps) {
  const {} = props;

  return (
    <div className="container">
      <div className={css.topSection}>
        <h2 className={css.title}>
          <button className={css.toggleList}>
            <FaChevronDown />
          </button>
          Items
        </h2>

        <div className={css.inputGroup}>
          <div className={css.inputGroupWrapper}>
            <FaLink className={css.linkIcon} />
            <input className={css.inputField} placeholder="Url..." />
          </div>

          <button className={css.button}>Add</button>
        </div>
      </div>

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
    </div>
  );
}

interface CollectionItemsProps {}
