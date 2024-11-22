import UserMenu from '@/components/navigation/userMenu';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Autocomplete, Avatar, Box, IconButton, TextField, Tooltip } from '@mui/material';
import { useState } from 'react';

const academies = ['Academia 1', 'Academia 2'];

export default function HeaderNavBarOptions() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Autocomplete
        sx={{ width: 200 }}
        options={academies}
        renderInput={(params) => <TextField {...params} placeholder="Academia" />}
      />

      <Tooltip title="Open documentation">
        <IconButton>
          <InfoIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Open notifications">
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Open settings">
        <IconButton onClick={handleClick}>
          <Avatar />
        </IconButton>
      </Tooltip>

      <UserMenu anchorEl={anchorEl} open={open} handleClose={handleClose} />
    </Box>
  );
}
