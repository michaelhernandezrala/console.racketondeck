import NavBar from '@/components/surface/navBar';
import uiConfig from '@/config/uiConfig';
import { Box, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState } from 'react';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${uiConfig.surface.drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

export default function MainWrapper({ children }) {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar open={open} toggleDrawer={toggleDrawer} />
      <Main open={open}>
        <Offset />
        <Container maxWidth="lg" sx={{ padding: 10 }}>
          {children}
        </Container>
      </Main>
    </Box>
  );
}
