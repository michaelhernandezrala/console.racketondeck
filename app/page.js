"use client";

import { ArrowForward } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Button startIcon={<ArrowForward />} disableElevation variant="contained">
        My boton
      </Button>

      <IconButton color="secondary">
        <ArrowForward />
      </IconButton>
    </main>
  );
}
