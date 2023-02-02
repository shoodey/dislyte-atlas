import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

import type { Element, Esper, Filter, Rarety, Role } from "./types";

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

interface FilterState {
  filter: Filter;
  setRarety: (rarety: Rarety) => void;
  setElement: (element: Element) => void;
  setRole: (role: Role) => void;
}

// TODO: Leverage store slices
// @see https://stackoverflow.com/a/72654447/5915741
// @see https://github.com/pmndrs/zustand/blob/main/docs/guides/typescript.md#slices-pattern

export const useFilterStore = create<FilterState>()((set) => ({
  filter: {
    rarety: ["rare", "epic", "legendary"],
    element: ["inferno", "flow", "wind", "shimmer"],
    role: ["fighter", "support", "defender", "controller"],
  },
  setRarety: (rarety: Rarety) =>
    set((state) =>
      state.filter.rarety.includes(rarety)
        ? {
            filter: {
              ...state.filter,
              rarety: state.filter.rarety.filter((v) => v !== rarety),
            },
          }
        : {
            filter: {
              ...state.filter,
              rarety: [...new Set([...state.filter.rarety, rarety])],
            },
          }
    ),
  setElement: (element: Element) =>
    set((state) =>
      state.filter.element.includes(element)
        ? {
            filter: {
              ...state.filter,
              element: state.filter.element.filter((v) => v !== element),
            },
          }
        : {
            filter: {
              ...state.filter,
              element: [...new Set([...state.filter.element, element])],
            },
          }
    ),
  setRole: (role: Role) =>
    set((state) =>
      state.filter.role.includes(role)
        ? {
            filter: {
              ...state.filter,
              role: state.filter.role.filter((v) => v !== role),
            },
          }
        : {
            filter: {
              ...state.filter,
              role: [...new Set([...state.filter.role, role])],
            },
          }
    ),
}));
