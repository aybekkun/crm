import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./MainLayout.module.scss"
const MainLayout:React.FC = () => {
  return (
    <div className={styles.root}>
      <aside className="aside">
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Header />
        <div className={styles.mainInner}>
          <Outlet/>
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
