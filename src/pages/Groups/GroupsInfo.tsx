import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AboutGroup from "../../components/AboutGroup";
import JournalTabs from "../../components/PageComponents/JournalComponents/JournalTabs";
import TopInfoPersonal from "../../components/TopInfoPersonal";
import { fetchOneGroup } from "../../redux/groups/asyncActions";
import { setCurrentMonth } from "../../redux/groups/slice";
import { RootState, useAppDispatch } from "../../redux/store";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const GroupsInfo = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { group, currentMonth, isLoading } = useSelector((state: RootState) => state.groups);

  React.useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    (async () => {
      await dispatch(
        fetchOneGroup({
          id,
          month: currentMonth ? currentMonth : null,
          cancelToken: cancelToken.token,
        })
      );
    })();
    return () => {
      cancelToken.cancel();
    };
  }, [dispatch, id, currentMonth]);

  const onChangeTabs = (key: number) => {
    dispatch(setCurrentMonth(key));
  };

  return (
    <div>
      <TopInfoPersonal name="Группа" />
      <AboutGroup data={group} />
      <JournalTabs data={group.months} onChange={onChangeTabs} />

      <div>
        <TableContainer component={Paper}>
          <Table aria-label="stundets table">
            <TableHead>
              <TableRow>
                <TableCell style={{ width: "80px" }} align="left">
                  <b>ФИО</b>
                </TableCell>
                <TableCell style={{ width: "80px" }} align="left">
                  <b>Номер</b>
                </TableCell>
                {group.students.length > 0 ? (
                  group.students[0].lessons.map((item) => (
                    <TableCell key={item.id}   align="center">
                    <div>
                      
                    </div>
                    </TableCell>
                  ))
                ) : (
                  <TableCell align="center">
                    <b>Loading...</b>
                  </TableCell>
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {group.students.length > 0 ? (
                group.students.map((item, i) => (
                  <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.phone}
                    </TableCell>
                    {group.students[i].lessons.map((item) => (
                      <TableCell key={item.id} align="center">
                        h
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="left">Empty</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default GroupsInfo;
