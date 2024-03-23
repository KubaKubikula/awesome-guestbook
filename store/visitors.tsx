import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get: any) => ({
      visitors: [
        {
          id: 0,
          fullName: "John Doe",
          email: "john.doe@gmail.com",
          department: "IT",
        },
        {
          id: 1,
          fullName: "Test name",
          email: "john.doe@gmail.com",
          department: "Marketing",
        },
        {
          id: 2,
          fullName: "John Doe 34",
          email: "john.doe@gmail.com",
          department: "Sales",
        },
        {
          id: 3,
          fullName: "John Doe 23",
          email: "john.doe@gmail.com",
          department: "Management",
        },
        {
          id: 4,
          fullName: "John Doe 45",
          email: "john.doe@gmail.com",
          department: "Accounting",
        },
      ],
      addVisitor: (visitor: any) => {
        const vis = get().visitors;
        const max =
          vis.length > 0
            ? vis.reduce((prev, current) =>
                prev && prev.id > current.id ? prev : current
              )
            : { id: 0 };
        return set({ visitors: [...vis, { ...visitor, id: max.id++ }] });
      },
      removeVisitors: (visitors: any) => {
        const visitorResult = get().visitors.filter((visitor: any) => {
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
