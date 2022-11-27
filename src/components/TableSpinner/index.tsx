import { CircularProgress } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type TableSpinnerProps = {
    colSpan?:number | undefined
}

const TableSpinner:React.FC<TableSpinnerProps> = ({ colSpan = 1 }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell align="center" colSpan={colSpan}>
        <CircularProgress />
      </TableCell>
    </TableRow>
  );
};

export default TableSpinner;
