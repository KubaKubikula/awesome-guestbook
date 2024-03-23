import { create } from "zustand";
import { persist } from "zustand/middleware";
import { visitorsMock } from "@/mock";

export type IVisitor = {
  id: number;
  fullName: string;
  email: string;
  department: string;
};

export type VisitorStateType =
  | {
      visitors: IVisitor | null;
      addVisitor: (visitor: Omit<IVisitor, "id">) => void;
      removeVisitors: (visitors: IVisitor[]) => void;
    }
  | any;

export const useStore = create<VisitorStateType>(
  persist(
    (set, get) => ({
      visitors: visitorsMock,
      addVisitor: (visitor: Omit<IVisitor, "id"> | unknown) => {
        const vis = get().visitors;

        if (!visitor) {
          return vis;
        }

        const max =
          vis.length > 0
            ? vis.reduce((prev: IVisitor, current: IVisitor) =>
                prev && prev.id > current.id ? prev : current
              )
            : { id: 0 };
        return set({ visitors: [...vis, { ...visitor, id: max.id++ }] });
      },
      removeVisitors: (visitors: IVisitor[]) => {
        const visitorResult = get().visitors.filter((visitor: IVisitor) => {
          // @ts-ignore
          return !visitors.has(visitor.id);
        });

        return set({ visitors: visitorResult });
      },
    }),
    {
      name: "visitor-storage",
    }
  )
);
