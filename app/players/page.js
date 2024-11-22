'use client';

import Table from '@/components/display/table';
import TablePaginationControl from '@/components/display/table/tablePaginationControl';
import TableToolbar from '@/components/display/table/tableToolbar';
import MainWrapper from '@/components/wrappers/mainWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useState } from 'react';

const headCells = [
  { id: 'image', numeric: false, disablePadding: true },
  { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
  { id: 'email', numeric: false, disablePadding: true, label: 'Email' },
  { id: 'sport', numeric: true, disablePadding: true, label: 'Deporte' },
  { id: 'level', numeric: false, disablePadding: true, label: 'Nivel' },
  { id: 'instructor', numeric: false, disablePadding: true, label: 'Instructor' },
  { id: 'createdAt', numeric: true, disablePadding: true, label: 'Alumno desde' },
];

export default function Players() {
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
          Alumno/a
        </Button>
      </Box>
      <Table headCells={headCells} rows={rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
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
