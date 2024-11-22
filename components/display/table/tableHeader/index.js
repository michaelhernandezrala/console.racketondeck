import { CheckBox } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

export default function TableHeader({ headCells }) {
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <CheckBox />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} padding={headCell.disablePadding ? 'none' : 'normal'}>
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
