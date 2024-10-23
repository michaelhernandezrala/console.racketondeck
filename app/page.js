"use client";

import { Button, CssBaseline, TextField } from "@mui/material";

export default function Home() {
  return (
    <main>
      <CssBaseline />
      <TextField label="Nombre de la academia" placeholder="Super Academy" variant="filled" />
      <Button>Enviar</Button>
    </main>
  );
}
