import { Drawer } from '@mui/material';

import uiConfig from '@/config/uiConfig';

export default function SideDrawer({ open }) {
  return (
    <Drawer
      sx={{
        width: uiConfig.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: uiConfig.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      Abierto
    </Drawer>
  );
}
