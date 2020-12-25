import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Collection } from '../types/Collection';
import { registerCollection } from './draggingSlice';

export function useRegisterBoundary(id: Collection['id']) {
  const ref = useRef<HTMLLIElement>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;

    const { top, right, bottom, left } = rect;
    dispatch(registerCollection({ id, top, right, bottom, left }));
  }, [id, ref, dispatch]);

  return ref;
}
