import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CircularProgress, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { IRooms } from "../../../../redux/rooms/types";
import Box from "@mui/material/Box";
import { ITime } from "../../../../redux/time/types";
import { ILead } from "../../../../redux/lead/types";
import DeleteButton from "../../../Buttons/DeleteButton";
import TableSpinner from "../../../TableSpinner";

type TableControlProps = {
  data: IRooms[] | ITime[] | ILead[] | undefined;
  onDelete: (id: number) => void;
  isLoading: boolean;
};

const TableControl: React.FC<TableControlProps> = ({ data, onDelete, isLoading }) => {
  const onDeleteValue = (id: number) => {
    onDelete(id);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "80%" }}>Название</TableCell>
              <TableCell sx={{ width: "20%" }} align="right">
                Действие
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data && !isLoading ? (
              data.map((item, i) => (
                <TableRow key={item.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell align="right">
                    <DeleteButton color="error" onDelete = {()=>onDelete(item.id)}/>
                  </TableCell>
                </TableRow>
              ))
            ) : (
             <TableSpinner colSpan={2}/>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TableControl;
