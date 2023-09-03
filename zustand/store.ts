import { create } from "zustand";

interface UsersState {
  setting: any;
  curency: "USD" | "COIN";
  togleCurrency: () => void;
  totalUSD: number;
  totalCOIN: number;
  buyCOIN: (count: number) => void;
  buy: (currecny: any) => void;
  cart: any[];
  addCart: (candidate: any) => void;
}

const useBearStore = create<UsersState>((set) => ({
  setting: null,
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
  buy: (options: any) =>
    set((state) => {
      if (options.carrency == "USD") {
        return {
          totalUSD: state.totalUSD - options.total,
          cart: [],
        };
      }
      return {
        totalCOIN: state.totalCOIN - options.total,
        cart: [],
      };
    }),
}));

export default useBearStore;
