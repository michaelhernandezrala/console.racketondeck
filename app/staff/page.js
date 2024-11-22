'use client';

import Table from '@/components/display/table';
import TablePaginationControl from '@/components/display/table/tablePaginationControl';
import TableToolbar from '@/components/display/table/tableToolbar';
import MainWrapper from '@/components/wrappers/mainWrapper';
import { Add } from '@mui/icons-material';
import { Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import userService from '../api/services/userService';

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
  { id: 'email', numeric: false, disablePadding: true, label: 'Email' },
  { id: 'rol', numeric: false, disablePadding: true, label: 'Puesto' },
  { id: 'sports', numeric: true, disablePadding: true, label: 'Deportes' },
  { id: 'createdAt', numeric: true, disablePadding: true, label: 'Contratación' },
];

export default function Staff() {
  const [rows, setRows] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [numSelected, setNumSelected] = useState(0);

  useEffect(() => {
    const fetchStaff = async () => {
      const staffMembers = await userService.findAndCountAll('d0a514c1-bb31-47aa-9958-20b4e5730e25');
      setTotal(staffMembers.count);
      setRows(staffMembers.data);
    };

    fetchStaff();
  }, []);

  const handlePageChange = (_, newPage) => setPage(newPage);
  const handleRowsPerPageChange = (event) => setRowsPerPage(parseInt(event.target.value, 10));

  return (
    <MainWrapper>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <TableToolbar total={total} numSelected={numSelected} />
        <Button variant="contained" color="primary" startIcon={<Add />} sx={{ height: 'fit-content' }}>
          Miembro
        </Button>
      </Box>
      <Table headCells={headCells} rows={rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)} />
      <TablePaginationControl
        count={total}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
      />
    </MainWrapper>
  );
}
