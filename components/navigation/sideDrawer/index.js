import uiConfig from '@/config/uiConfig';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Fragment } from 'react';

import menuDrawer from './menuDrawer';

export default function SideDrawer({ open }) {
  return (
    <Drawer
      sx={{
        width: uiConfig.surface.drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: uiConfig.surface.drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <List sx={{ width: '100%', position: 'relative', overflow: 'auto' }}>
        {menuDrawer.map((menu) => (
          <Fragment key={menu.id}>
            <ListSubheader>{menu.section}</ListSubheader>
            {menu.items.map((item) => (
              <ListItem key={item.id} disablePadding disableGutters>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
}
