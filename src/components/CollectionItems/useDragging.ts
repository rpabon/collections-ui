import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DraggableProps } from 'framer-motion';
import { selectDragging, setDraggedOverId } from '../../store/draggingSlice';

export function useDragging() {
  const {
    draggedOverId,
    sideBarBoundaries: { left, right },
    collectionBoundaries: collections,
  } = useSelector(selectDragging);
  const dispatch = useDispatch();
  const dragRef = useRef<HTMLDivElement>(null);


  function setId(id: number) {
    dispatch(setDraggedOverId(id));
  }

  const onDrag: DraggableProps['onDrag'] = () => {
    const rect = dragRef.current?.getBoundingClientRect();
    const xPos = rect?.left || 0;
    const yPos = rect?.top || 0;

    if (xPos < left || xPos > right) {
      setId(0);
    }

    for (let i = 0; i < collections.length; i++) {
      const { id, top, bottom } = collections[i];

      if (yPos >= top && yPos <= bottom && id !== draggedOverId) {
        setId(id);
        break;
      }
    }
  };

  //   const whileDrag: DraggableProps['whileDrag'] = {
  //     scale: 0.3,
  //   };

  return {
    drag: true,
    dragMomentum: false,
    onDrag,
    // whileDrag,
    ref: dragRef,
  };
}
