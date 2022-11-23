import React from "react";
import styles from "./NotFound.module.scss";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.root}>
      <h1 onClick={onClickBack}>404 page not found</h1>
      <Button onClick={onClickBack} fullWidth variant="text" color="primary">
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
