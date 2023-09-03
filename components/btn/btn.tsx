import { FC } from "react";
import s from "./btn.module.scss";

const Btn: FC<{ title: string; func: () => void }> = ({
  title = "NONE",
  func = () => {},
}) => {
  return (
    <button onClick={func} className={s.btn}>
      {title}
    </button>
  );
};

export default Btn;
