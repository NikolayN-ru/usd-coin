import { FC } from "react";
import useBearStore from "../../zustand/store";
import Btn from "../btn/btn";

import { iProduct } from "../../types/product.types";

import s from "./cartItem.module.scss";

const CardItem: FC<iProduct> = ({ id, title, price }) => {
  const addCart = useBearStore((state) => state.addCart);
  return (
    <div className={s.wrapper}>
      <div>{title}</div>
      <div className={s.price}>
        <span>цена: {price}</span>
        <Btn title="add to cart" func={() => addCart({ id, title, price })} />
      </div>
    </div>
  );
};

export default CardItem;
