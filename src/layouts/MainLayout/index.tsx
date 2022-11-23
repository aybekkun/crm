import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import styles from "./MainLayout.module.scss"
const MainLayout = () => {
  return (
    <div className={styles.root}>
      <aside className="aside">
        <Sidebar />
      </aside>
      <main className={styles.main}>
        <Header />
        <div>bla bla</div>
      </main>
    </div>
  );
};

export default MainLayout;
