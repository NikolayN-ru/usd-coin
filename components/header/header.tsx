"use client";
import Link from "next/link";
import React from "react";
import s from "./header.module.scss";
import useBearStore from "../../zustand/store";

const Header = () => {
  const curency = useBearStore((store) => store.curency);
  const togleCurrency = useBearStore((store) => store.togleCurrency);
  return (
    <div className={s.header}>
      <Link  href="/" className={s.link}>
        Catalog
      </Link>
      |
      <Link href="cart" className={s.link}>
        Cart
      </Link>
      <div onClick={togleCurrency} className={s.currency}> | активная валюта: {curency}</div>
    </div>
  );
};

export default Header;
