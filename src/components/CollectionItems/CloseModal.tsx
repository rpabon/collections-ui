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
  const { itemId, setItemId } = props;
  const id = useSelector(selectCurrentCollectionId);
  const dispatch = useDispatch();

  function onCancel() {
    setItemId(0);
  }

  function onDelete() {
    dispatch(removeCollectionItem({ id, itemId }));
    setItemId(0);
  }

  return (
    <AnimatePresence>
      {Boolean(itemId) && (
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
              <Button onClick={onCancel} plain>
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
  itemId: number;
  setItemId: Dispatch<SetStateAction<number>>;
}
