import { IProduct } from "@/lib/productSchema";
import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";

export interface WishStore {
  wishItems: IProduct[];
  addToWish: (item: IProduct) => void;
  removeFromWish: (item: IProduct) => void;
}

export const useWishStore = create<WishStore>()(
  persist(
    (set, get) => ({
      wishItems: [],
      addToWish: (item) =>
        set((state) => {
          const existingItem = state.wishItems.find((i) => i._id === item._id);
          if (existingItem) {
            return state; // Item already exists
          }
          return { wishItems: [...state.wishItems, item] };
        }),
      // removeFromWish: (item) =>
      //   set((state) => ({
      //     wishItems: state.wishItems.filter((i) => i.id !== item.id),
      //   })),
      removeFromWish: (item) =>
        set((state) => {
          return {
            wishItems: state.wishItems.filter(
              (wishItem) => wishItem._id !== item._id
            ),
          };
        }),
    }),
    {
      name: "wish-storage", // Unique name for storage
      // Optional: you can add storage configuration here
    }
  )
);
