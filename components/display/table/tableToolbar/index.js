import { Delete } from '@mui/icons-material';
import { alpha, IconButton, TextField, Toolbar, Tooltip, Typography } from '@mui/material';

export default function TableToolbar({ total, numSelected }) {
  return (
    <Toolbar
      sx={[
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
          flexGrow: 1,
        },
        numSelected > 0 && {
          bgcolor: (theme) => alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography sx={{ flex: '1 1 100%' }} color="inherit" variant="subtitle1" component="div">
          {numSelected} seleccionados
        </Typography>
      ) : (
        <Typography sx={{ flex: '1 1 100%' }} variant="h6" id="tableTitle" component="div">
          {total} resultados
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      ) : (
        <TextField variant="standard" size="small" placeholder="Buscar" sx={{ width: 300 }} />
      )}
    </Toolbar>
  );
}
