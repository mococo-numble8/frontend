import create, { StateCreator } from 'zustand';

// UI 관련 전역 상태
interface UiSlice {
  isModal: boolean;
  setModal: (state: boolean) => void;
}
const createUiSlice: StateCreator<UiSlice, [], []> = set => ({
  isModal: false,
  setModal: state => set({ isModal: state }),
});

export const useStore = create<UiSlice>()((...a) => ({
  ...createUiSlice(...a),
}));
