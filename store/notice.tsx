import { create } from "zustand";

export const useNoticeStore = create((set) => ({
  notice: "",
  addNotice: (notice: string) => set({ notice: notice }),
}));
