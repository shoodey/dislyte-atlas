import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Esper } from "./types";

interface EsperState {
  espers: Esper[];
  setEspers: (espers: Esper[]) => void;
  addEsper: (esper: Esper) => void;
  removeEsper: (esper: Esper) => void;
}

export const useEsperStore = create<EsperState>()(
  persist(
    (set) => ({
      espers: [],
      setEspers: (espers: Esper[]) => set({ espers }),
      addEsper: (esper: Esper) =>
        set((state) => ({
          espers: [...new Set([...state.espers, esper])].sort(
            (a, b) => a.id - b.id
          ),
        })),
      removeEsper: (esper: Esper) =>
        set((state) => ({
          espers: state.espers.filter((e) => e.name !== esper.name),
        })),
    }),
    {
      name: "espers",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
