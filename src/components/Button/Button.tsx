import React, { ReactNode } from 'react';
import cx from 'classnames';
import css from './Button.module.scss';

export function Button(props: ButtonProps) {
  return (
    <button
      className={cx(
        css.button,
        props.className,
        { [css.inverted]: props.inverted },
        { [css.plain]: props.plain }
      )}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}

interface ButtonProps {
  children: ReactNode;
  inverted?: boolean;
  plain?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?(): void;
}
