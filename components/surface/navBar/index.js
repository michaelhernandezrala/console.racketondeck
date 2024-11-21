'use client';
import { AppBar, Box, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

import SideDrawer from '@/components/navigation/sideDrawer';
import DrawerToggleButton from '@/components/navigation/sideDrawer/drawerToogleButton';
import uiConfig from '@/config/uiConfig';
import HeaderNavBarOptions from './headerNavBarOptions';

const NavBarWrapper = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${uiConfig.surface.drawerWidth}px)`,
        marginLeft: `${uiConfig.surface.drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function NavBar() {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBarWrapper color="transparent" position="fixed" open={open}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <DrawerToggleButton open={open} onToggle={toggleDrawer} />
          <HeaderNavBarOptions />
        </Toolbar>
      </NavBarWrapper>
      <SideDrawer open={open} />
    </Box>
  );
}
