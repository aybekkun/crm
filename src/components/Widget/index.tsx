import React from "react";
import styles from "./Widget.module.scss";
import Paper from '@mui/material/Paper';
const Widget:React.FC = () => {
  return (
    <Paper className={styles.root}>
      <div>
        <h3>45</h3>
        <p>Учеников</p>
      </div>
    </Paper>
  );
};

export default Widget;
