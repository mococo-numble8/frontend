import { useStore } from 'store/store';
import { useCallback } from 'react';

export const useOverlay = () => {
  const { setOverlay } = useStore();

  const openOverlay = useCallback(() => setOverlay(true), [setOverlay]);

  const closeOverlay = useCallback(() => setOverlay(false), [setOverlay]);

  return {
    openOverlay,
    closeOverlay,
  };
};
