import React from 'react';
import Widget from '../../components/Widget';
import styles from "./Home.module.scss";

const Home:React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.widgets}>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
        <Widget/>
      </div>
    </div>
  )
}

export default Home