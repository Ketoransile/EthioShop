import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  increaseQuantity: (itemId: string) => void;
  decreaseQuantity: (itemId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  updateItemQuantity: (itemId: string, value: number) => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const exists = state.items.some((i) => i.id === item.id);
          if (exists) return state; // Do nothing if item already exists

          const newItem = { ...item, quantity: Math.max(1, item.quantity) };
          return { items: [...state.items, newItem] };
        }),

      increaseQuantity: (itemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        })),

      decreaseQuantity: (itemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(0, item.quantity - 1) }
              : item
          ),
        })),
      removeItem: (itemId) =>
        set((state) => ({
          // Filter out the item with the matching itemId
          items: state.items.filter((item) => item.id !== itemId),
        })),

      clearCart: () =>
        set(() => ({
          items: [],
        })),

      getTotalPrice: () => {
        const { items } = get();
        return parseFloat(
          items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)
        );
      },
      updateItemQuantity: (itemId, value) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === itemId
              ? { ...item, quantity: Math.max(0, value) }
              : item
          ),
        })),
    }),
    { name: "cart" }
  )
);
