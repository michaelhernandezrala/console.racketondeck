'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { AppBar, CssBaseline, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function Home() {
  return (
    <div>
      <CssBaseline />
      <AppBar color="transparent" position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <div>Logo</div>
        </Toolbar>
      </AppBar>
      <Offset />

      <h1>Hello</h1>

      <div style={{ height: '150rem' }}></div>
    </div>
  );
}
