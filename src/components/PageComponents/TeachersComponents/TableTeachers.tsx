import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ITeacherData } from "../../../redux/teachers/types";
import DeleteButton from "../../Buttons/DeleteButton";
import EditButton from "../../Buttons/EditButton";
import TableSpinner from "../../TableSpinner";
import { Link } from "react-router-dom";

type TableTeachersProps = {
  data: ITeacherData[] | undefined;
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
  isLoading: boolean;
};
const TableTeachers: React.FC<TableTeachersProps> = ({
  data,
  onDelete = () => undefined,
  onEdit = () => undefined,
  isLoading,
}) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "20%" }} align="left">
                Ф.И.О
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Телефон номер
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                День рождения
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Адрес
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="center">
                Процент %
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && !isLoading ? (
              data.map((item) => (
                <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Link style={{ display: "block", textDecoration:"none", color: "#1976D2"}} to={`/teachers/${item.id}`}>
                      {item.name} {item.surname}
                    </Link>
                  </TableCell>
                  <TableCell align="left">{item.phone}</TableCell>
                  <TableCell align="left">{item.birthday}</TableCell>
                  <TableCell align="left">{item.address}</TableCell>
                  <TableCell align="center">{item.percent}</TableCell>
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

export default TableTeachers;
