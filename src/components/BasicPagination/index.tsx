import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React from "react";

{
  /* <Stack spacing={2}>
<Typography>Page: {page}</Typography>
<Pagination count={10} page={page} onChange={handleChange} />
</Stack> */
}

type BasicPaginationProps = {
  pageCount: number;
  currentPage: number;
  onChangePage:(page:number)=>void;
};
const BasicPagination: React.FC<BasicPaginationProps> = ({ pageCount = 1, currentPage = 1, onChangePage }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    onChangePage(value)
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <Stack spacing={2}>
        <Pagination page={currentPage} count={Math.ceil(pageCount / 10)} onChange={handleChange} />
      </Stack>
    </div>
  );
};

export default BasicPagination;
