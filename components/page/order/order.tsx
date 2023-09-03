"use client";
import { FC, useState } from "react";
import Link from "next/link";
import Btn from "../../btn/btn";
import useBearStore from "../../../zustand/store";

import s from "./order.module.scss";

const Order: FC<{ total: number; toglePopup: () => void }> = ({
  total,
  toglePopup,
}) => {
  const [moment, setMoment] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const [pay, setPay] = useState<boolean>(false);
  const buy = useBearStore((state) => state.buy);
  const [carrency, setCyrency] = useState<string>("");

  const Buy = () => {
    setMoment(true);
    setTimeout(() => {
      setMoment(false);
      setDone(true);
      buy({ carrency, total });
    }, 3000);
  };

  return (
    <div className={s.order}>
      <div className={s.toglePopup}>
        <button onClick={toglePopup}>close</button>
      </div>
      {!done && (
        <div className={s.wrapper}>
          <h1>оформление заказа</h1>
          <div>
            <p>способ оплаты</p>
            <div>
              <form action="">
                <input
                  // checked
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                  onChange={() => {
                    setCyrency("USD");
                    setPay(true);
                  }}
                />
                <label htmlFor="contactChoice1">USD</label>
                <input
                  type="radio"
                  id="contactChoice1"
                  name="contact"
                  value="email"
                  onChange={() => {
                    setCyrency("COIN");
                    setPay(true);
                  }}
                />
                <label htmlFor="contactChoice1">COIN</label>
              </form>
            </div>
          </div>

          <p>будет списано : {total}</p>
          {!moment && pay && <Btn func={Buy} title="оплатить" />}
          {moment && "идет опалата - ожидайте"}
        </div>
      )}
      {done && (
        <div className={s.done}>
          продолжить покупки {" "}
          <Link href="/">на главную</Link>
        </div>
      )}
    </div>
  );
};

export default Order;
