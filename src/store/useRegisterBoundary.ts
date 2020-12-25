import { RefObject, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { registerCollection, registerSidebar } from './draggingSlice';
import { Collection } from '../types/Collection';

export function useRegisterBoundary<T>(id?: Collection['id']) {
  const ref = useRef<T>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    const rect = ref.current?.getBoundingClientRect();

    if (id) {
      const top = rect?.top || 0;
      const bottom = rect?.bottom || 0;

      dispatch(registerCollection({ id, top, bottom }));
    } else {
      const left = rect?.left || 0;
      const right = rect?.right || 0;

      dispatch(registerSidebar({ left, right }));
    }
  }, [id, ref, dispatch]);

  return ref;
}
