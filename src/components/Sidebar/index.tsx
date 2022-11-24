import React from "react";
import SubMenu from "../SubMenu";
import styles from "./Sidebar.module.scss";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import BarChartIcon from "@mui/icons-material/BarChart";
import BookIcon from "@mui/icons-material/Book";
import EmojiPeopleOutlinedIcon from "@mui/icons-material/EmojiPeopleOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
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
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.top}>
        <h2>Admin</h2>
      </div>
      <div className={styles.center}>
        <ul>
          <li>
            <Link to="/">
              <HomeOutlinedIcon className={styles.icon} />
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <SubMenu menuIcon={<PeopleOutlineIcon className={styles.icon} />} menuName="Меню 1">
              <Link to="/wait">
                <HistoryToggleOffIcon className={styles.icon} />
                <span>Ожидание</span>
              </Link>
              <Link to="/students">
                <EmojiPeopleOutlinedIcon className={styles.icon} />
                <span>Студенты</span>
              </Link>
              <Link to="/teachers">
                <AssignmentIndOutlinedIcon className={styles.icon} />
                <span>Учителя</span>
              </Link>
            </SubMenu>
          </li>
          <li>
            <SubMenu menuIcon={<WidgetsOutlinedIcon className={styles.icon} />} menuName="Меню 2">
              <Link to="/courses">
                <BookIcon className={styles.icon} />
                <span>Курсы</span>
              </Link>
              <Link to="/groups">
                <GroupsIcon className={styles.icon} />
                <span>Группы</span>
              </Link>
              <Link to="/lessons">
                <AssignmentIcon className={styles.icon} />
                <span>Расписание</span>
              </Link>
            </SubMenu>
          </li>
          <li>
            <SubMenu menuIcon={<MonetizationOnOutlinedIcon className={styles.icon} />} menuName="Финанс">
              <Link to="/payments">
                <TrendingUpIcon className={styles.icon} />
                <span>Приход</span>
              </Link>
              <Link to="/expenses">
                <TrendingDownIcon className={styles.icon} />
                <span>Расход</span>
              </Link>
              <Link to="/statistics">
                <BarChartIcon className={styles.icon} />
                <span>Статистика</span>
              </Link>
            </SubMenu>
          </li>
          <li>
            <SubMenu menuIcon={<TuneOutlinedIcon className={styles.icon} />} menuName="Настройки">
              <Link to="/employees">
                <WorkIcon className={styles.icon} />
                <span>Сотрудники</span>
              </Link>
              <Link to="/control">
                <RemoveRedEyeIcon className={styles.icon} />
                <span>Контроль</span>
              </Link>
            </SubMenu>
          </li>
        </ul>
      </div>
      <div className={styles.bottom}>Copyright © 2021 Karsoft LLC. All rights reserved.</div>
    </div>
  );
};

export default Sidebar;
