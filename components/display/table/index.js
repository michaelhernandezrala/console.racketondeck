import { CheckBox } from '@mui/icons-material';
import { Table as MuiTable, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';
import moment from 'moment';
import TableHeader from './tableHeader';

const formatCellContent = (value) => {
  if (moment(value, moment.ISO_8601, true).isValid()) {
    return moment(value).format('DD MMMM YYYY');
  }
  return value;
};

export default function Table({ headCells, rows }) {
  return (
    <TableContainer>
      <MuiTable>
        <TableHeader headCells={headCells} rowCount={rows.length} />
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex} hover sx={{ cursor: 'pointer' }}>
              <TableCell align="center">
                <CheckBox color="primary" />
              </TableCell>

              {headCells.map((headCell, cellIndex) => (
                <TableCell key={cellIndex} align="center">
                  {formatCellContent(row[headCell.id])}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
}
