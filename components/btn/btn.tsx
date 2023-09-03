import React, { FC } from "react";
import s from './btn.module.scss';

const Btn: FC<any> = ({ title = "NONE", func = () => {} }) => {
  return <button onClick={func} className={s.btn}>{title}</button>;
};

export default Btn;
