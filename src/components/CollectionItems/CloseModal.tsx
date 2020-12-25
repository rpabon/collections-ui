import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import {
  removeCollectionItem,
  selectCurrentCollectionId,
} from '../../store/collectionsSlice';
import { Button } from '../Button/Button';
import css from './CollectionItems.module.scss';

const variants = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

export function CloseModal(props: CloseModalProps) {
  const { itemToRemoveId, setItemToRemoveId } = props;
  const id = useSelector(selectCurrentCollectionId);
  const dispatch = useDispatch();

  function clearId() {
    setItemToRemoveId(0);
  }

  function onDelete() {
    dispatch(removeCollectionItem({ id, itemId: itemToRemoveId }));
    clearId();
  }

  return (
    <AnimatePresence>
      {Boolean(itemToRemoveId) && (
        <motion.div className={css.closeModalWrapper} key="modal">
          <motion.div
            className={css.closeModal}
            variants={variants}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <p className={css.modalTitle}>Delete Item?</p>
            <p className={css.modalText}>
              This will delete the item from the currently selected collection.
            </p>

            <div className={css.modalButtons}>
              <Button onClick={clearId} plain>
                cancel
              </Button>
              <Button onClick={onDelete}>delete</Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface CloseModalProps {
  itemToRemoveId: number;
  setItemToRemoveId: Dispatch<SetStateAction<number>>;
}
