import { create } from "zustand";

interface AppState {
  selectedBrandId: string;
  selectedModuleId: string;
  setBrand: (id: string) => void;
  setModule: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: "kasparro",
  selectedModuleId: "entity",
  setBrand: (id) => set({ selectedBrandId: id }),
  setModule: (id) => set({ selectedModuleId: id }),
}));
