"use client";
import React, { FC } from "react";
import CardItem from "../../cardItem/cardItem";
import s from "./main.module.scss";

const Main: FC<any> = ({ products }) => {
  console.log(products, "products");
  return (
    <div className={s.wrapper}>
      {products.map((item: any, id: number) => {
        return <CardItem {...item} key={id} />;
      })}
    </div>
  );
};

export default Main;
