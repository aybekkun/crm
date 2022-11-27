import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import styles from "./AddDrawer.module.scss";
type AddDrawerProps = {
  name: string;
  children?: JSX.Element | JSX.Element[];
  open: boolean;
  onClose: (isOpen: boolean) => void;
};
const AddDrawer: React.FC<AddDrawerProps> = ({ name, children, open = false, onClose }) => {
  const onClickClose: React.MouseEventHandler<HTMLButtonElement> = () => {
    onClose(false);
  };
  return (
    <>
      <Drawer anchor={"right"} open={open} onClose={onClose}>
        <div className={styles.root}>
          <div className={styles.name}>
            <IconButton sx={{marginRight:"12px"}} onClick={onClickClose}>
              <CloseIcon />
            </IconButton>
            <h2>Добавить {name}</h2>
          </div>
          <Divider />
          {children}
        </div>
      </Drawer>
    </>
  );
};

export default AddDrawer;
