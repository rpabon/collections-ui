import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';
import css from './SideBar.module.scss';

const variants = {
  grow: { scale: [1, 1.7, 1] },
};

export function Name({ name }: NameProps) {
  const controls = useAnimation();
  const oldName = useRef(name);

  useEffect(() => {
    if (oldName.current !== name) {
      controls.start('grow');
      oldName.current = name;
    }
  }, [name, oldName, controls]);

  return (
    <motion.span
      className={css.listItemName}
      variants={variants}
      animate={controls}
    >
      <FaPaperclip />
      {name}
    </motion.span>
  );
}

interface NameProps {
  name: string;
}
