import { useStore } from 'store/store';
import { useCallback } from 'react';

export const useModal = () => {
  const { setModal } = useStore();

  const openModal = useCallback(() => setModal(true), [setModal]);

  const closeModal = useCallback(() => setModal(false), [setModal]);

  return {
    openModal,
    closeModal,
  };
};
