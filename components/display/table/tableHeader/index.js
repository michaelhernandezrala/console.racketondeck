import { CheckBox } from '@mui/icons-material';
import { TableCell, TableHead, TableRow } from '@mui/material';

export default function TableHeader({ headCells }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="center">
          <CheckBox color="primary" />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="center">
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
