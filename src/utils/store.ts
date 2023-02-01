import { create } from "zustand";

interface myEspersState {
  myEspers: string[];
  addEsper: (name: string) => void;
  removeEsper: (name: string) => void;
}

export const useMyEspersStore = create<myEspersState>()((set) => ({
  myEspers: [],
  addEsper: (name: string) =>
    set((state) => ({ myEspers: [...state.myEspers, name] })),
  removeEsper: (name: string) =>
    set((state) => ({
      myEspers: state.myEspers.filter((esper) => esper !== name),
    })),
}));
