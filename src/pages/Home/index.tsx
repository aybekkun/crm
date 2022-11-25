import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import PieStatistics from '../../components/Statistics/PieStatistics';
import Widget from '../../components/Widget';
import { fetchMain } from '../../redux/home/asyncActions';
import { RootState, useAppDispatch } from '../../redux/store';
import styles from "./Home.module.scss";

const Home:React.FC = () => {
  const { data } = useSelector((state:RootState) => state.home);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchMain({ cancelToken: cancelToken.token }));

    return () => {
      cancelToken.cancel();
    };
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.widgets}>
        <Widget link='wait' count={data.waits} desc="Ожидания"/>
        <Widget link='students' count={data.students} desc="Студенты"/>
        <Widget link='teachers' count={data.teachers} desc="Учителя"/>
        <Widget link='courses' count={data.courses} desc="Курсы"/>
        <Widget link='groups' count={data.groups} desc="Группы"/>
      </div>
      <PieStatistics lead={data.lead}/>
    </div>
  )
}

export default Home