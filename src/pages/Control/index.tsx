import React from "react";
import styles from "./Control.module.scss";
import TextField from "@mui/material/TextField";
import RoomItem from "../../components/PageComponents/ControlComponents/RoomItem";
import TimeItem from "../../components/PageComponents/ControlComponents/TimeItem";
import LeadItem from "../../components/PageComponents/ControlComponents/LeadItem";

const Control: React.FC = () => {
  return (
    <div className={styles.root}>
      <RoomItem />
      <TimeItem/>
      <LeadItem/>
    </div>
  );
};

export default Control;
