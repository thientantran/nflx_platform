import { create } from 'zustand';

export interface InfoModalInterface {
  movie?: any;
  isOpen: boolean;
  openModal: (movieId: string) => void;
  closeModal: () => void;
}

const useInfoModal = create<InfoModalInterface>((set) => ({
  movieId: undefined,
  isOpen: false,
  openModal: (movie: any) => set({ isOpen: true, movie }),
  closeModal: () => set({ isOpen: false, movie: undefined }),
}));

export default useInfoModal;
