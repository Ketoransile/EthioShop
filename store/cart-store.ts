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
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          return { items: [...state.items, item] };
        }),
      removeItem: (itemId) =>
        set((state) => {
          return {
            items: state.items
              .map((item) =>
                item.id === itemId
                  ? { ...item, quantity: item.quantity - 1 }
                  : item
              )
              .filter((item) => item.quantity > 0),
          };
        }),
      clearCart: () =>
        set(() => {
          return { items: [] };
        }),

      getTotalPrice: () => {
        const { items } = get();
        return parseFloat(
          items
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)
        );
      },
      updateItemQuantity: (itemId, value) =>
        set((state) => {
          return {
            items: state.items.map((item) =>
              item.id === itemId ? { ...item, quantity: value } : item
            ),
          };
        }),
    }),
    { name: "cart" }
  )
);
