import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import css from './SideBar.module.scss';

const variants = {
  grow: { scale: [1, 2.5, 1] },
};

export function Count({ count }: CountProps) {
  const controls = useAnimation();
  const prevCount = useRef(count);

  useEffect(() => {
    if (prevCount.current !== count) {
      controls.start('grow');
      prevCount.current = count;
    }
  }, [count, prevCount, controls]);

  return (
    <motion.span className={css.count} variants={variants} animate={controls}>
      {count}
    </motion.span>
  );
}

interface CountProps {
  count: number;
}
