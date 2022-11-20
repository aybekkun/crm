import React from "react";
import SubMenu from "../SubMenu";
import styles from "./Sidebar.module.scss";

import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BarChartIcon from '@mui/icons-material/BarChart';
import BookIcon from '@mui/icons-material/Book';
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import GroupsIcon from '@mui/icons-material/Groups';
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import WorkIcon from "@mui/icons-material/Work";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <h2>Admin</h2>
      </div>
      <div className={styles.center}>
        <ul>
          <li>
            <a href="#">
              <HomeOutlinedIcon className={styles.icon} />
              <span>Главная</span>
            </a>
          </li>
          <li>
            <SubMenu
              menuIcon={<PeopleOutlineIcon className={styles.icon} />}
              menuName="Меню 1"
            >
              <a href="#">
                <HistoryToggleOffIcon className={styles.icon} />
                <span>Ожидание</span>
              </a>
              <a href="#">
                <EmojiPeopleOutlinedIcon className={styles.icon} />
                <span>Студенты</span>
              </a>
              <a href="#">
                <AssignmentIndOutlinedIcon className={styles.icon} />
                <span>Учителя</span>
              </a>
            </SubMenu>
          </li>
          <li>
            <SubMenu
              menuIcon={<WidgetsOutlinedIcon className={styles.icon} />}
              menuName="Меню 2"
            >
             
              <a href="#">
                <BookIcon className={styles.icon} />
                <span>Курсы</span>
              </a>
              <a href="#">
                <GroupsIcon className={styles.icon} />
                <span>Группы</span>
              </a>
              <a href="#">
                <AssignmentIcon className={styles.icon} />
                <span>Расписание</span>
              </a>
            </SubMenu>
          </li>
          <li>
            <SubMenu
              menuIcon={<MonetizationOnOutlinedIcon className={styles.icon} />}
              menuName="Финанс"
            >
              <a href="#">
                <TrendingUpIcon className={styles.icon} />
                <span>Приход</span>
              </a>
              <a href="#">
                <TrendingDownIcon className={styles.icon} />
                <span>Расход</span>
              </a>
              <a href="#">
                <BarChartIcon className={styles.icon} />
                <span>Статистика</span>
              </a>
            </SubMenu>
          </li>
          <li>
            <SubMenu
              menuIcon={<TuneOutlinedIcon className={styles.icon} />}
              menuName="Настройки"
            >
              <a href="#">
                <WorkIcon className={styles.icon} />
                <span>Сотрудники</span>
              </a>
              <a href="#">
                <RemoveRedEyeIcon className={styles.icon} />
                <span>Контроль</span>
              </a>
            </SubMenu>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>
        Copyright © 2021 Karsoft LLC. All rights reserved.
      </div>
    </div>
  );
};

export default Sidebar;
