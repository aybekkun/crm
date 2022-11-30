import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { fetchLessons } from "../../redux/lessons/asyncActions";
import { fetchRooms } from "../../redux/rooms/asyncActions";
import { RootState, useAppDispatch } from "../../redux/store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const lessonDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "CБ"];
import styles from "./Lessons.module.scss";

const Lessons: React.FC = () => {
  const dispatch = useAppDispatch();
  const { lessons } = useSelector((state: RootState) => state.lessons);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch(fetchRooms({ cancelToken: cancelToken.token }));
    dispatch(fetchLessons({ cancelToken: cancelToken.token }));

    return () => {
      cancelToken.cancel();
    };
  }, [dispatch]);

  return (
    <div className={styles.root}>
      <div className={styles.topInfo}>
        <h2>Уроки</h2>
      </div>
      <TableContainer component={Paper}>
        <Table aria-label="lessons table">
          <TableHead>
            <TableRow>
              {lessonDays.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            
            {/*   {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Lessons;
