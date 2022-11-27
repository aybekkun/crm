import React from "react";
import AddButton from "../Buttons/AddButton";
import styles from "./TopInfo.module.scss"

type TopInfoProps = {
    name:string;
    onClickAdd:()=>void;
}
const TopInfo:React.FC<TopInfoProps> = ({name = "Страница", onClickAdd}) => {
  return (
    <div className={styles.root}>
      <h2>{name}</h2>
      <AddButton onAdd={onClickAdd}/>
    </div>
  );
};

export default TopInfo;
