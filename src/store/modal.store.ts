

import { create } from 'zustand';


interface ModalState {
  isOpen: boolean;
  selectedProject: null | {
    id: number;
    cover: string;
    name: string;
    desc: string;
    url: string;
    video: string;
    date: string;
  };
  openModal: (project: ModalState['selectedProject']) => void;
  closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => {
 

  return {
    isOpen: false,
    selectedProject: null,
    openModal: (project) => {
      set({ isOpen: true, selectedProject: project });
     
    },
    closeModal: () => {
      set({ isOpen: false, selectedProject: null });
      
    },
  };
});
