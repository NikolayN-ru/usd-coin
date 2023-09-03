import { create } from "zustand";

interface iLiteProduct {
  id: number;
  title: string;
  price: number;
}

interface UsersState {
  curency: "USD" | "COIN";
  togleCurrency: () => void;
  totalUSD: number;
  totalCOIN: number;
  buyCOIN: (count: number) => void;
  buy: (options: { carrency: string; total: number }) => void;
  cart: iLiteProduct[];
  addCart: (candidate: iLiteProduct) => void;
}

const useBearStore = create<UsersState>((set) => ({
  curency: "USD",
  togleCurrency: () =>
    set((state) => ({ curency: state.curency === "USD" ? "COIN" : "USD" })),
  totalUSD: 12000,
  totalCOIN: 34,
  buyCOIN: (count: number) =>
    set((state) => ({
      totalUSD: state.totalUSD - count,
      totalCOIN: state.totalCOIN + count,
    })),
  cart: [],
  addCart: (candidate) =>
    set((state) => ({
      cart: [...state.cart, { ...candidate }],
    })),
  buy: ({ carrency, total }: { carrency: string; total: number }) =>
    set((state) => {
      if (carrency !== "USD") {
        return {
          totalCOIN: state.totalCOIN - total,
          cart: [],
        };
      }
      return {
        totalUSD: state.totalUSD - total,
        cart: [],
      };
    }),
}));

export default useBearStore;
