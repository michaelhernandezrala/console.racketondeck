import { CheckBox } from '@mui/icons-material';
import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

const headCells = [
  { id: 'image', numeric: false, disablePadding: true },
  { id: 'name', numeric: false, disablePadding: true, label: 'Nombre' },
  { id: 'email', numeric: false, disablePadding: true, label: 'Email' },
  { id: 'rol', numeric: false, disablePadding: true, label: 'Puesto' },
  { id: 'sports', numeric: true, disablePadding: true, label: 'Deportes' },
  { id: 'createdAt', numeric: true, disablePadding: true, label: 'Contratación' },
];

export default function TableHeader() {
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
