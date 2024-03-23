import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get: any) => ({
      visitors: [],
      addVisitor: (visitor: any) =>
        set({ visitors: [...get().visitors, visitor] }),
    }),
    {
      name: "visitor-storage",
    }
  )
);
