import { create } from "zustand";

export const useMenuStore = create((set) => ({
  menuOpen: false,
  toggleMenu: () =>
    set((state) => {
      const newState = !state.menuOpen;

      if (newState) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden"); 
      }

      return { menuOpen:newState };
    }),
}));
