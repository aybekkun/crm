import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../Buttons/AddButton";
import styles from "./TopInfoPersonal.module.scss";
import { Button } from "@mui/material";
type TopInfoPersonalProps = {
  name: string;
};
const TopInfoPersonal: React.FC<TopInfoPersonalProps> = ({ name = "Страница" }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.root}>
      <h2>Информация об учителе</h2>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
};

export default TopInfoPersonal;
