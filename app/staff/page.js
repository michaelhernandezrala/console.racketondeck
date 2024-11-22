'use client';

import Table from '@/components/display/table';
import TablePaginationControl from '@/components/display/table/tablePaginationControl';
import TableToolbar from '@/components/display/table/tableToolbar';
import MainWrapper from '@/components/wrappers/mainWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

export default function Staff() {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  const [numSelected, setNumSelected] = useState(0);

  const handlePageChange = (_, newPage) => setPage(newPage);
  const handleRowsPerPageChange = (event) => setRowsPerPage(parseInt(event.target.value, 10));

  return (
    <MainWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TableToolbar total={rows.length} numSelected={numSelected} />
        <Button variant="contained" color="primary" startIcon={<Add />} sx={{ height: 'fit-content' }}>
          Miembro
        </Button>
      </Box>
      <Table rows={rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
      <TablePaginationControl
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </MainWrapper>
  );
}
