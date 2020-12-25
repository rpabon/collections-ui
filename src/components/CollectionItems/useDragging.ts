import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DraggableProps } from 'framer-motion';
import { CollectionItem } from '../../types/CollectionItem';
import { selectDragging, setDraggedOverId } from '../../store/draggingSlice';
import { addCollectionItem } from '../../store/collectionsSlice';

export function useDragging(item: CollectionItem) {
  const { draggedOverId, dropArea, collectionBoundaries } = useSelector(
    selectDragging
  );
  const dispatch = useDispatch();
  const ref = useRef<HTMLDivElement>(null);

  function setId(id: number) {
    dispatch(setDraggedOverId(id));
  }

  const onDrag: DraggableProps['onDrag'] = () => {
    const card = ref.current?.getBoundingClientRect();
    if (!card) return;

    const overlap =
      dropArea.top < card.bottom &&
      dropArea.left < card.right &&
      dropArea.right > card.left &&
      dropArea.bottom > card.top;

    if (!overlap) return;

    for (let i = 0; i < collectionBoundaries.length; i++) {
      const { id, top, bottom } = collectionBoundaries[i];

      if (card.top >= top && card.top <= bottom && id !== draggedOverId) {
        setId(id);
        break;
      }
    }
  };

  const onDragEnd: DraggableProps['onDragEnd'] = () => {
    if (!draggedOverId) return;

    dispatch(addCollectionItem({ id: draggedOverId, item }));
    setId(0);
  };

  const whileDrag: DraggableProps['whileDrag'] = {
    scale: 0.9,
    opacity: 0.8,
    zIndex: 10,
  };

  const dragConstraints: DraggableProps['dragConstraints'] = {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  };

  return {
    drag: true,
    dragMomentum: false,
    dragElastic: true,
    ref,
    whileDrag,
    dragConstraints,
    onDrag,
    onDragEnd,
  };
}
