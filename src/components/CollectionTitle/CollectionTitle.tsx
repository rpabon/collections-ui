import React from 'react';
import cx from 'classnames';
import css from './CollectionTitle.module.scss';

export function CollectionTitle(props: CollectionTitleProps) {
  const {} = props;

  return (
    <div className={cx('container', css.container)}>
      <h1>Title</h1>
    </div>
  );
}

interface CollectionTitleProps {}
