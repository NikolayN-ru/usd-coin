"use client";
import React, { FC, useEffect, useState } from "react";
import useBearStore from "../../../zustand/store";
import Btn from "../../btn/btn";
import Order from "../order/order";
import s from "./cart.module.scss";

const Cart = () => {
  const cart = useBearStore((state) => state.cart);
  const totalCOIN = useBearStore((state) => state.totalCOIN);
  const totalUSD = useBearStore((state) => state.totalUSD);
  const curency = useBearStore((state) => state.curency);
  const buyCOIN = useBearStore((state) => state.buyCOIN);

  //   const togleCurrency = useBearStore((store) => store.togleCurrency);

  const [totalBuy, setTotalBuy] = useState<number>(0);
  const [total, setTotal] = useState<any>(0);
  const [popup, setPopup] = useState<any>(false);

  const toglePopup = () => {
    setPopup((prev: boolean) => !prev);
  };

  useEffect(() => {
    let total = 0;
    cart.forEach((item) => (total += item.price));
    setTotal(total);
  }, [cart]);

  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        {cart.length ? (
          cart.map((item, id) => <ItemCart key={id} {...item} />)
        ) : (
          <div className={s.error}>корзина пуста</div>
        )}
      </div>
      <div className={s.right}>
        <div className={s.total} role="alert">
          <span className="font-medium"> у вас</span>{" "}
          {curency === "USD" ? `${totalUSD} долларов` : `${totalCOIN} коинов`}{" "}
        </div>
        <div className={s.total} role="alert">
          <span className="font-medium">сумма заказа: {total}</span>
        </div>

        {(curency === "USD" ? totalUSD : totalCOIN) < total ? (
          "у вас не хватает денег на покупку"
        ) : (
          <Btn title="оформить заказ" func={toglePopup} />
        )}

        <div>
          <div className={s.buy}>
            купить коины:
            <input
              type="number"
              onChange={(e: any) => setTotalBuy(e.target.value)}
              value={totalBuy}
            />
            <button
              onClick={() => {
                buyCOIN(+totalBuy);
                setTotalBuy(0);
              }}
            >
              buyCOIN
            </button>
          </div>
        </div>
        {popup && <Order total={total} toglePopup={toglePopup} />}
      </div>
    </div>
  );
};

export default Cart;

const ItemCart: FC<any> = ({ title, price }) => {
  return (
    <div className={s.items}>
      <div className="flow-root">
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {title}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                {price}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
