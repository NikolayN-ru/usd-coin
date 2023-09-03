"use client";
import { FC } from "react";
import CardItem from "../../cardItem/cardItem";

import { iProduct, iProducts } from "../../../types/product.types";

import s from "./main.module.scss";

const Main: FC<iProducts> = ({ products }) => {
  return (
    <div className={s.wrapper}>
      {products.map((item: iProduct, id: number) => {
        return <CardItem {...item} key={id} />;
      })}
    </div>
  );
};

export default Main;
