import React from "react";
import styles from "./Widget.module.scss";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

type WidgetProps = {
  link: string;
  count: number;
  desc: string;
};

const Widget: React.FC<WidgetProps> = ({ link, count, desc }) => {
  return (
    <Link className={styles.root} to={`/${link}`} style={{ textDecoration: "none" }}>
      <Paper className={styles.paper}>
        <div>
          <h3>{count}</h3>
          <p>{desc}</p>
        </div>
      </Paper>
    </Link>
  );
};

export default Widget;
