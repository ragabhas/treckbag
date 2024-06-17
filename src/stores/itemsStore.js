import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialItems } from "../lib/constants";

export const useItemsStore = create(
  persist(
    (set) => ({
      items: initialItems,

      addItem: (itemText) => {
        const newItem = {
          id: new Date().getTime(),
          text: itemText,
          checked: false,
        };
        set((state) => ({
          items: [...state.items, newItem],
        }));
      },

      removeAllItems: () => {
        set(() => ({
          items: [],
        }));
      },

      resetToInitial: () => {
        set(() => ({
          items: initialItems,
        }));
      },

      markAllAsComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, checked: true })),
        }));
      },

      markAllAsInComplete: () => {
        set((state) => ({
          items: state.items.map((item) => ({ ...item, checked: false })),
        }));
      },

      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== itemId),
        }));
      },

      toggleItem: (itemId) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, checked: !item.checked } : item
          ),
        }));
      },
    }),
    {
      name: "items",
    }
  )
);
