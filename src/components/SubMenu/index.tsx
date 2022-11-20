import React from "react";
import styles from "./SubMenu.module.scss";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";

type SubMenuProps = {
  menuIcon: any;
  menuName: string;
  children?: React.ReactChild | React.ReactChild[];
};

const SubMenu: React.FC<SubMenuProps> = ({ menuIcon, menuName, children }) => {
  const [active, setActive] = React.useState(false);
  const menuClasses = active ? `${styles.menu} ${styles.active}` : `${styles.menu}`;
  const iconClasses = active ? `${styles.icon} ${styles.active}` : `${styles.icon}`;
  return (
    <div className={styles.submenu}>
      <div onClick={() => setActive((prev) => !prev)} className={styles.acardion}>
        <div className={styles.name}>
          {menuIcon}
          <span>{menuName}</span>
        </div>
        <KeyboardArrowDownIcon className={iconClasses} />
      </div>
      <div className={menuClasses}>{children}</div>
    </div>
  );
};

export default SubMenu;
