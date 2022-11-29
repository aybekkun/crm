import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IGroupData } from "../../../redux/groups/types";
import TableSpinner from "../../TableSpinner";

type TableGroupsProps = {
  data: IGroupData[] | undefined;
  isLoading: boolean;
};
const TableGroups: React.FC<TableGroupsProps> = ({ data, isLoading }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "25%" }} align="left">
                Название
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="left">
                Курс
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="left">
                Учитель
              </TableCell>
              <TableCell sx={{ width: "25%" }} align="left">
                Текущий урок
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && !isLoading ? (
              data.map((item) => (
                <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="left">{item.course_name}</TableCell>
                  <TableCell align="left">{item.teacher_name}</TableCell>
                  <TableCell align="left">{item.lesson}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableSpinner colSpan={4} />
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableGroups;
