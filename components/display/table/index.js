import { CheckBox } from '@mui/icons-material';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import TableHeader from './tableHeader';

export default function Table({ headCells, rows }) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHeader headCells={headCells} />
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover sx={{ cursor: 'pointer' }}>
              <TableCell>
                <CheckBox color="primary" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
