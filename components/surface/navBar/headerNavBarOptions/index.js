import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, IconButton, Tooltip } from '@mui/material';

export default function HeaderNavBarOptions() {
  return (
    <Box>
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
        <IconButton>
          <Avatar />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
