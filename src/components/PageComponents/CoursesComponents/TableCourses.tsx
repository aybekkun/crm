import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { ICourseData } from "../../../redux/courses/types";
import DeleteButton from "../../Buttons/DeleteButton";
import EditButton from "../../Buttons/EditButton";
import TableSpinner from "../../TableSpinner";

type TableCoursesProps = {
  data: ICourseData[] | undefined;
  onDelete: (id: number) => void;
  isLoading: boolean;
};
const TableCourses: React.FC<TableCoursesProps> = ({ data, onDelete, isLoading }) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "40%" }}>Названия</TableCell>
              <TableCell sx={{ width: "20%" }} align="right">
                Стоимость
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="right">
                Продолжительность
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="right">
                Действии
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
                  <TableCell align="right">{item.price + " uzs"}</TableCell>
                  <TableCell align="right">{item.duration}</TableCell>
                  <TableCell align="right">
                    <EditButton />
                    <DeleteButton onDelete={() => onDelete(item.id)} color="error" />
                  </TableCell>
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

export default TableCourses;
