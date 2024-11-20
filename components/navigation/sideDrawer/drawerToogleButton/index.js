import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export default function DrawerToggleButton({ open, onToggle }) {
  return (
    <IconButton edge="start" color="inherit" onClick={onToggle} aria-label={open ? 'close-drawer' : 'open-drawer'}>
      {open ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
    </IconButton>
  );
}
