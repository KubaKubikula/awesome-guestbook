import { create } from "zustand";

export type NoticeStateType = {
  notice: string;
  addNotice: (notice: string) => void;
};

export const useNoticeStore = create<NoticeStateType>((set) => ({
  notice: "",
  addNotice: (notice: string) => set({ notice: notice }),
}));
