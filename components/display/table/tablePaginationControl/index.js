import { TablePagination } from '@mui/material';

export default function TablePaginationControl({ count, rowsPerPage, page, onPageChange, onRowsPerPageChange }) {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
    />
  );
}
