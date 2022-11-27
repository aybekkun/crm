import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import AddDrawer from "../../components/AddDrawer";
import BasicPagination from "../../components/BasicPagination";
import TableCourses from "../../components/PageComponents/CoursesComponents/TableCourses";
import TopInfo from "../../components/TopInfo";
import { deleteCourse, fetchCourses } from "../../redux/courses/asyncActions";
import { setPageCourses } from "../../redux/courses/slice";
import { RootState, useAppDispatch } from "../../redux/store";
import styles from "./Courses.module.scss";
const Courses: React.FC = () => {
  const dispatch = useAppDispatch();
  const { courses, page, isLoading } = useSelector((state: RootState) => state.courses);
  const [courseCount, setCourseCount] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();

    dispatch(fetchCourses({ page, cancelToken: cancelToken.token }));

    return () => {
      cancelToken.cancel();
    };
  }, [page, dispatch, courseCount]);

  const onChangePage = async (value: number) => {
    await dispatch(setPageCourses(value));
  };

  const onDeleteItem = async (id: number) => {
    await dispatch(deleteCourse(id));
    setCourseCount((prev) => prev + 1);
  };

  return (
    <div className={styles.root}>
      <TopInfo name="Курсы" onClickAdd={()=>setOpen(true)}/>
      <TableCourses isLoading={isLoading} data={courses.data} onDelete={onDeleteItem} />
      <BasicPagination onChangePage={onChangePage} currentPage={page} pageCount={courses.total} />
      <AddDrawer name="курсы" open={open} onClose={()=>setOpen(false)}>
   
      </AddDrawer>
    </div>
  );
};

export default Courses;
